import React from "react";
import Schedule from "@/app/components/Schedule";
import { Bowlby_One } from "next/font/google";


const BowlbyOne = Bowlby_One({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});


export const metadata = {
  title: "Foo Fest | Schedule",
  Description: "Check out the complete schedule for FOO Festival 2024 and plan your ultimate festival experience!",
};


async function SchedulePage() {
  // Merger to links sammen. Bands og schedule
  const bands = await fetch(
    "https://yielding-cooperative-tarsal.glitch.me/bands"
  ).then((r) => r.json());
  const schedule = await fetch(
    "https://yielding-cooperative-tarsal.glitch.me/schedule"
  ).then((r) => r.json());

  const scenes = ["Midgard", "Jotunheim", "Vanaheim"];
  const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

  const merged = bands.map((band) => {
    const newBand = { ...band };
    scenes.forEach((scene) => {
      days.forEach((day) => {
        if (schedule[scene][day].find((item) => item.act === band.name)) {
          const eventInfo = schedule[scene][day].find(
            (item) => item.act === band.name
          );
          newBand.eventInfo = eventInfo;
          newBand.scene = scene;
          newBand.day = day;
        }
      });
    });
    return newBand;
  });

  return (
    <>
      <main>
        <div>
        <img className='m-auto w-full bg-center' src="/schedule-hero2.jpg" alt="banner" />
        <div className="flex text-3xl -mt-10 mb-0 justify-center md:md-28 lg:mb-28 md:text-4xl md:-mt-72 lg:-mt-72 lg:text-8xl">
          <h1 className={`text-White md:mb-96 xl:-mb-28 lg:-mt-28 xl:-mt-96 ${BowlbyOne.className}`}>SCHEDULE</h1></div>
        </div>
        <Schedule newArray={merged} days={days}/>
      </main>
    </>
  );
}

export default SchedulePage;