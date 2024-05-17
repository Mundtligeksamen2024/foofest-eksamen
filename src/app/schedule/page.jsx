
import React from "react";
import { Bowlby_One, Monda } from "next/font/google";
import Image from "next/image";

const BowlbyOne = Bowlby_One({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

  const scenes = ["Midgard", "Jotunheim", "Vanaheim"];
  const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];


 export default async function SchedulePage() {

  //data fetching fra band
  const bands = await fetch(
    "https://yielding-cooperative-tarsal.glitch.me/bands").then((r) => r.json());

  //data fetching fra schedule
  const schedule = await fetch(
    "https://yielding-cooperative-tarsal.glitch.me/schedule/`${Midgard}`}");
    const Midgard = await schedule.json();
    console.log(Midgard);

  //mapper image fra /bands ind og scener + ugedage fra /schedule
  return (
  <section>
    <h1 className="text-White text-6xl text-center mb-5 p-16">SCHEDULE</h1>

      {schedule && bands.map((bands, schedule) => {
        return <div key={schedule.Midgard}>
          <h1 className="text-White" >{weekdays.shift(0)}</h1>
          <div>
            <p className="text-White">{Midgard.start}</p>
            <p className="text-White">{bands.name}</p>
            <p className="text-White">{Midgard.act}</p>
          
          <Image
                alt="Artist presentation"
                src={`https://yielding-cooperative-tarsal.glitch.me/logos/${bands.logo}`}
                width={350}
                height={350}
              />
          </div>
          
        </div>
      }) }
  </section>
  );
}




    {/* <div>
    {bands.map((band, schedule) => {
      return <div key={band.name}>
       
      <div>
        <p className="text-White">{schedule["start"]}</p>
          <Image
                alt="Artist presentation"
                src={`https://yielding-cooperative-tarsal.glitch.me/logos/${band.logo}`}
                width={350}
                height={350}
              />
      </div>   
      </div>
    })}
    </div> */}


      // const schedule = await fetch(
  //   "https://yielding-cooperative-tarsal.glitch.me/schedule").then((r) => r.json());

