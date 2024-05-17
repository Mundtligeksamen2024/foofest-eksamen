import Link from 'next/link'

export default async function Header() {
    const res = await fetch(`https://yielding-cooperative-tarsal.glitch.me/`);
    const dogs = await res.json();

  return (
    <>
    <nav className=" flex justify-between bg-Darkblue text-White text-xl px-10 py-3 items-center">
        <ul className="flex gap-2">
            <li>
                <Link className='font-bold' href={"/"} prefetch={false}>
                    FOOFEST
                </Link>
            </li> 
        </ul>

        <ul className='flex items-center gap-10'>
            <li>
                <Link href={"/booking"} prefetch={false}>
                    <img src="/ticket.png" alt="ticket" width={70} height={70}/>
                </Link>
            </li>
            <li>
                <Link href={"/lineup"} prefetch={false}>
                    Artister
                </Link>
            </li>
            <li>
                <Link href={"/schedule"} prefetch={false}>
                    Program
                </Link>
            </li>
        </ul>
    </nav>
    </>
  );
}





