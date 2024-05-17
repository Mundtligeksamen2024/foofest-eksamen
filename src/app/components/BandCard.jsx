import { Bowlby_One } from "next/font/google";
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const BowlbyOne = Bowlby_One({
    subsets: ["latin"],
    weight: "400",
    display: "swap",
  });

async function BandCard({ searchParams }) {
      // første url
  const response = await fetch(
    `https://yielding-cooperative-tarsal.glitch.me/bands`
  );
  const data = await response.json();
  console.log(data)

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
    {data.map((band) => {
      return <div key={band.name}>
        <Link href={`/lineup/${band.slug}`} prefetch={false}>
          <div>

            <div className="border-2 border-Hotpink p-2 rounded-sm">
              <Image
                alt="Artist presentation"
                src={`https://yielding-cooperative-tarsal.glitch.me/logos/${band.logo}`}
                width={350}
                height={350}
              />
              <h2 className='text-White mt-5 text-lg font-light'>{band.genre}</h2>
              <h1 className={`text-Hotpink text-2xl font-medium ${BowlbyOne.className}`}>{band.name}</h1>

            </div>
          </div>
        </Link>
      </div>
    })}
    </div>
  )
}

export default BandCard;