import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Bowlby_One } from 'next/font/google';
import Loader from './Loader';

const BowlbyOne = Bowlby_One({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
});

export default function LineUp() {
  const [bands, setBands] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedGenre, setSelectedGenre] = useState('All');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://yielding-cooperative-tarsal.glitch.me/bands`);
        const data = await response.json();
        setBands(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Hvis loading er sand, vis loader-komponenten
  if (loading) return <Loader />;

  // Hvis bands ikke er tilgængelige, vis besked om ingen bands data
  if (!bands) return <p>No bands data</p>;

  const handleGenreChange = (event) => {
    setSelectedGenre(event.target.value);
  };

  // Filtrering af bands efter valgt genre
  const filteredBands = selectedGenre === 'All' ? bands : bands.filter((band) => band.genre === selectedGenre);

  // Gruppering af bands efter genre
  const groupedByGenre = bands.reduce((acc, band) => {
    if (!acc[band.genre]) {
      acc[band.genre] = [];
    }
    acc[band.genre].push(band);
    return acc;
  }, {});

  // Sortering af genrer
  const sortedGenres = Object.keys(groupedByGenre).sort((a, b) => a.localeCompare(b));

  return (
    <section className='p-10'>
      {/* Dropdown for valg af genre */}
      <div className="flex justify-center relative h-full xl:mb-20 xl:-mt-52">
        <div className="grid md:flex mb-10 bg-Black">
          <label htmlFor="genre" className="text-White p-10 text-xl sm:text-5xl mb-3 font-semibold">Choose a genre: </label>
          <select
            id="genre"
            name="genre"
            className="bg-BlackBlack md:p-10 md:py-0 text-White xl:text-4xl"
            onChange={handleGenreChange}
            value={selectedGenre}
          >
            <option className='text-center' value="All">All genres</option>
            {sortedGenres.map((genre) => (
              <option key={genre} value={genre}>{genre}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Bands for the selected genre */}
      {selectedGenre !== 'All' && filteredBands.length > 0 && (
        <div className="mb-10">

          <h2 className="text-White text-2xl sm:text-4xl xl:text-4xl font-semibold">{selectedGenre}</h2>

          <div className="grid snap-start grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 justify-start max-w-full p-4 sm:p-12">
            {filteredBands.map((band) => (
              <div key={band.name} className="flex flex-col">
                <Link href={`/lineup/${band.slug}`} prefetch={false}>
                  <div className="border-2 border-Hotpink rounded-lg cursor-pointer hover:scale-105 transition-transform duration-150">
                    <div className="w-full h-40 sm:h-72 md:h-40 relative">
                      <Image
                        alt="Artist presentation"
                        src={band.logo.startsWith("http") ? band.logo : `https://yielding-cooperative-tarsal.glitch.me/logos/${band.logo}`}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-t-lg"
                      />
                    </div>
                    <div className="p-2 sm:p-4">
                      <p className="text-Hotpink mt-2 sm:mt-5 text-md sm:text-2xl font-semibold">{band.genre}</p>
                      <p className="text-White text-lg sm:text-3xl font-bold uppercase mb-1 sm:mb-2">{band.name}</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Bands grouped by all genres */}
      {sortedGenres.map((genre) => (
        <div key={genre} className="mb-10">
          <h2 className="text-White text-2xl sm:text-4xl font-semibold mb-4">{genre}</h2>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 justify-start max-w-full p-4 sm:p-12">
            {groupedByGenre[genre].map((band) => (
              <div key={band.name} className="flex flex-col">
                <Link href={`/lineup/${band.slug}`} prefetch={false}>
                  <div className="border-2 border-Hotpink rounded-lg cursor-pointer hover:scale-105 transition-transform duration-150 ">
                    <div className="w-full h-40 sm:h-72 md:h-80 relative">
                      <Image
                        alt="Artist presentation"
                        src={band.logo.startsWith("http") ? band.logo : `https://yielding-cooperative-tarsal.glitch.me/logos/${band.logo}`}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-t-lg"
                      />
                    </div>
                    <div className="p-2 sm:p-4">
                      <p className="text-Hotpink mt-2 sm:mt-5 text-md sm:text-2xl font-semibold">{band.genre}</p>
                      <p className="text-White text-lg sm:text-3xl font-bold uppercase mb-1 sm:mb-2">{band.name}</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
