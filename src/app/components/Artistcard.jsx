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
    <section>

      {/* Dropdown for valg af genre */}
      <div className="flex justify-center items-center h-full">
        <div className="m-4">
          <label htmlFor="genre" className="text-Hotpink text-xl sm:text-3xl mb-3 mr-4 font-semibold">Choose a genre:</label>
          <select
            id="genre"
            name="genre"
            className="rounded-full px-2 md:px-6 py-2 border-2 border-Hotpink"
            onChange={handleGenreChange}
            value={selectedGenre}
          >
            <option value="All">All genres</option>
            {sortedGenres.map((genre) => (
              <option key={genre} value={genre}>{genre}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Bands opdelt efter genre */}
      {filteredBands.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-12 justify-center max-w-6xl mx-auto p-4 sm:p-12">
          {filteredBands.map((band) => (
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
      ) : (
        <p className="text-White">No bands found for the selected genre.</p>
      )}
    </section>
  );
}
