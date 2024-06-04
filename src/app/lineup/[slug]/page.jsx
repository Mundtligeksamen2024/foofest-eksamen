import React from 'react'
import Image from "next/image";
import { Bowlby_One } from "next/font/google";

const BowlbyOne = Bowlby_One({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata = {
  title: "Foo Fest | Artists",
  Description: "Explore the FOO Festival 2024 lineup and discover the top techno artists set to perform",
};

export async function generateStaticParams() {
  const res = await fetch("https://yielding-cooperative-tarsal.glitch.me/bands/");
  const pages = await res.json();

  // generer stier baseret på bandets slug
  const paths = pages.map((page) => {
    return { slug: page.slug };
  });

  return paths;
}

export default async function Page({ params }) {
  const { slug } = params;
  const url = `https://yielding-cooperative-tarsal.glitch.me/bands/${slug}`;
  const res = await fetch(url);
  const artist = await res.json();
  
  // Bestem billede url - linjen tjekker om url starter med http eller ej. Hvis det gør, hentes billeder fra unsplash. Hvis ikke hentes billeder fra glitch.
  const imageUrl = artist.logo.startsWith("http") ? artist.logo : `https://yielding-cooperative-tarsal.glitch.me/logos/${artist.logo}`;

  // Del medlemmerne op i en liste
  const membersList = typeof artist.members === 'string'
    ? artist.members.split(',').map(member => member.trim())
    : Array.isArray(artist.members)
      ? artist.members
      : [];

  return (

    <div>
      <div className='relative w-full h-[500px]'>
        <img className="m-auto w-full h-full obejct-cover" src="/backgroundbannergradientimg.webp" alt="" />
      </div>

      <div className='max-w-5xl mx-auto'>
        <div className='absolute inset-x-0 top-32 flex flex-col items-center z-10 p-8'>
          <div className="w-52 h-52 md:w-64 md:h-64 lg:w-72 lg:h-72 mx-auto overflow-hidden">
            <Image
              alt={artist.logoCredits}
              src={imageUrl}
              width={350}
              height={350}
              className='rounded-xl w-full h-full object-cover opacity-55'
            />
          </div>
          <h2 className={`text-White text-center text-5xl sm:text-6xl font-bold uppercase mt-12 mb-1 sm:mb-2 ${BowlbyOne.className}`}>{artist.name}</h2>
        </div>

        <div className=' text-White mt-20 font-medium p-6 grid grid-cols-1 md:grid-cols-2 sm:gap-32 gap-14'>
          <div>
            {membersList.map((member, index) => (
              <p key={index} className='mb-1 text-3xl text-Hotpink uppercase font-bold'>{member}{index !== membersList.length - 1 && ','}</p>

            ))}
            <p className='sm:max-w-96 mt-5 text-xl sm:text-2xl italic font-semibold'>are coming to the Foo Festival. Catch them live on stage and experience their electrifying performances! Rock out with your favorite artists. Dont miss this unforgettable event - grab your tickets now!</p>

          </div>
          <div>
            <p className='text-3xl sm:text-4xl text-White uppercase font-bold'>About {artist.name}</p>
            <p className='mt-5 text-lg font-semibold'>Prepare for an electrifying festival experience as {artist.name} bringing the <span className='text-Hotpink'> {artist.genre} </span> to the stage.
            </p>
            <p className='text-White mt-5 text-lg font-normal'>{artist.bio}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
