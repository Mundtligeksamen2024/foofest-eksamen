// forside, landingpage
import ArtistPoster from "./components/ArtistPoster";
import LpBanner from "./components/LpBanner";
import { Bowlby_One } from "next/font/google";
import ForsideCamping from "./components/ForsideCamping";
import ForsideQnA from "./components/ForsideQnA";
import RotateBanner from "./components/RotateBanner";




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
      <ForsideQnA/>
      <RotateBanner/>
    </>
  );
}
