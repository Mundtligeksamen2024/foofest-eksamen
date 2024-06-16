import React, { useState, useEffect } from 'react';
import { Bowlby_One } from 'next/font/google';

import Image from 'next/image';
import Link from 'next/link';
import Loader from './Loader';





// font
const BowlbyOne = Bowlby_One({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
});




// Lineup funktion
export default function LineUp() {
  // array med banddata de er hentet fra API
  const [bands, setBands] = useState(null);

  // Angiver om data hentes med true
  const [loading, setLoading] = useState(true);

  // Angiver den akutelle valgte genre fra en dropdown
  const [selectedGenre, setSelectedGenre] = useState('All');


  // hentning af banddata ved brug af useEffect 
  // på linje 45 betyder at den kun køres en gang pga []
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





  // håndtering af genrevalg
  // opdaterer tilstanden baseret på dropdown-valg
  const handleGenreChange = (event) => {
    setSelectedGenre(event.target.value);
  };




  // Denne linje bestemmer, hvilke bands der skal vises baseret på den valgte genre (selectedGenre)
  const filteredBands = selectedGenre === 'All' ? bands : bands.filter((band) => band.genre === selectedGenre);
  // ? : tjekker om selectedGenre er lig med All
  // bands.filter((band) => band.genre === selectedGenre) - Når selectedGenre ikke er 'All', filtrerer dette bands til kun at inkludere de bands, hvor band.genre matcher selectedGenre
  // Opretter et nyt array (filteredBands), der kun indeholder bands af den valgte genre




  // Gruppering af bands efter genre
  const groupedByGenre = bands.reduce((acc, band) => { // reduce gennemgår hvert element (band) i bands-arrayet.  
    if (!acc[band.genre]) { 
      acc[band.genre] = []; // Initialiserer et tomt array for hver unikke genre, der findes i bands
    }
    acc[band.genre].push(band); // Tilføjer det aktuelle band-objekt til arrayet, der svarer til dets genre
    return acc; // Returnerer acc-objektet efter hver iteration, som alle bands grupperet efter deres respektive genrer
  }, {});



  // Sorter genrerne alfabetisk baseret på groupedByGenre-objektet
  // Object.keys(groupedByGenre): Henter en array af alle (genrer) fra groupedByGenre-objektet
  // Bruger sort-metoden til at sortere arrayet af genrer alfabetisk
  // a.localeCompare(b) sikrer, at sorteringen sker i henhold til lokaliseret rækkefølge, hvilket er nyttigt for håndtering af forskellige tegnsæt og sprog.
  const sortedGenres = Object.keys(groupedByGenre).sort((a, b) => a.localeCompare(b));


// Komponenten renderes med dens indhold, baseret på tilstanden og data (filteredBands, groupedByGenre, sortedGenres).
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
            onChange={handleGenreChange} // opdaterer selectedGenre
            value={selectedGenre}
          >

            {/* sorteret alfabetisk */}
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
