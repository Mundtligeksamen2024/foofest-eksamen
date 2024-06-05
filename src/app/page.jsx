// forside, landingpage
import ArtistPoster from "./components/ArtistPoster";
import FooTicket from "./components/FooTicket";
import LpBanner from "./components/LpBanner";
import { Bowlby_One } from "next/font/google";
import VipTicket from "./components/VipTicket";
import ForsideCamping from "./components/ForsideCamping";
import ForsideQnA from "./components/ForsideQnA";
import Nyhedsbrev from "./components/Nyhedsbrev";



const BowlbyOne = Bowlby_One({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata = {
  title: "Foo Fest | Home",
  Description: "Discover FOO Festival 2024: Your ultimate destination for electrifying music and unforgettable experiences.",
};


export default function Home() {
  return (
    <>

      <LpBanner />
      <div id="artistPoster"></div>
      <ArtistPoster />
      <ForsideCamping/>

      <div className="text-center mt-12">
        <h2 className={`text-White text-4xl md:text-5xl mb-5 ${BowlbyOne.className}`}>TICKETS</h2>
        <div className='flex flex-col items-center gap-10 p-10 text-White md:flex-row md:justify-center md:gap-20 md:p-15 mb-24'>
          <FooTicket />
          <VipTicket />
        </div>
      </div>

      
      <ForsideQnA/>
      <Nyhedsbrev/>
      

    </>
  );
}
