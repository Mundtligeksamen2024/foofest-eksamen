import Link from 'next/link';
import { Bowlby_One } from 'next/font/google';


const BowlbyOne = Bowlby_One({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
});

export default async function Header() {
  const res = await fetch(`https://yielding-cooperative-tarsal.glitch.me/`);
  const nav = await res.json();

  return (
    <>
      <nav className="fixed w-full justify-between gap-2 sm:gap-10 md:gap-10 xl:gap-20 bg-Black top-0 z-50 flex text-White px-2 py-4 2xl:py-5 items-center md:px-10">
      <ul className="flex gap-2">
          <li>
            <Link
              className={`font-bold text-sm sm:text-2xl xl:text-2xl ${BowlbyOne.className} hover:text-Hotpink`}
              href="/"
              prefetch={false}
            >
              FOOFEST
            </Link>
          </li>
        </ul>

        <ul className='flex gap-2 xl:gap-5'>
        <li>
            <Link
              className="font-bold text-sm md:text-mg xl:text-base hover:text-Hotpink"
              href="/lineup"
              prefetch={false}
            >
              LINEUP
            </Link>
          </li>
          <li>
            <Link
              className="font-bold text-sm md:text-mg xl:text-base hover:text-Hotpink"
              href="/schedule"
              prefetch={false}
            >
              SCHEDULE
            </Link>
          </li>
          
          <li>
            <Link
              href="/booking"
              prefetch={false}
              className=" border-2 border-Hotpink font-bold text-sm md:text-mg xl:text-base py-1 px-2 md:px-6 md:py-2 hover:text-Hotpink"
            >
              BUY TICKETS
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
