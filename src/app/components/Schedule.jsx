"use client";
import React, { useState, useEffect } from "react";
import ActCard from "./ActCard";
import { motion } from "framer-motion";
import Loader from "./Loader";
import { Bowlby_One } from "next/font/google";

const BowlbyOne = Bowlby_One({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

function Schedule({ newArray, days }) {
  const [selectedDay, setSelectedDay] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const today = new Date()
      .toLocaleDateString("en", { weekday: "short" })
      .toLowerCase();
    setSelectedDay(today);

    if (newArray) {
      setIsLoading(false);
    }
  }, [newArray]);

  const filterActsByDay = (day) => {
    setSelectedDay(day);
  };

  const sortedByTime = (scene) => {
    return newArray
      .filter((act) => act.scene === scene && act.day === selectedDay)
      .sort((a, b) => {
        const aTime = new Date(`1970-01-01T${a.eventInfo.start}`);
        const bTime = new Date(`1970-01-01T${b.eventInfo.start}`);
        return aTime.getTime() - bTime.getTime();
      });
  };

  return (
    <>
      {isLoading ? (
        <Loader />

      ) : (

        <div>
        {/* filter knapper efter ugedage */}
          <div className="flex justify-center flex-wrap my-8 mb-28 gap-5">
            {days.map((day) => (
              <button
                key={day}
                className={`text-xl px-4 text-White p-1 w-20 rounded-xl bg-Hotpink uppercase transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-Lightpink duration-300 cursor-pointer focus:text-White`}
                onClick={() => filterActsByDay(day)}
              >
                {day}
              </button>
            ))}
          </div>

        {/* grid starter her for scenerne */}
          <section className="mx-auto max-w-6xl">
            <div>
              <motion.h3
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 2 }}
                viewport={{ once: true }}
                className="text-3xl mb-5 text-White text-center font-semibold uppercase"
              >
                Midgard
              </motion.h3>
              <div>
                {sortedByTime("Midgard").map((act) => (
                  <ActCard
                    slug={act.slug}
                    src={act.logo}
                    key={act.name}
                    name={act.name}
                    genre={act.genre}
                    start={act.eventInfo.start}
                    end={act.eventInfo.end}
                    day={act.day}
                  />
                ))}
              </div>
            </div>

            <div>
              <motion.h3
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="text-3xl mb-5 mt-32 text-White text-center font-semibold uppercase"
              >
                Vanaheim
              </motion.h3>
              <div>
                {sortedByTime("Vanaheim").map((act) => (
                  <ActCard
                    slug={act.slug}
                    src={act.logo}
                    key={act.name}
                    name={act.name}
                    genre={act.genre}
                    start={act.eventInfo.start}
                    end={act.eventInfo.end}
                    day={act.day}
                  />
                ))}
              </div>
            </div>

            <div>
              <motion.h3
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="text-3xl mb-5 mt-32 text-White text-center font-semibold uppercase"
              >
                Jotunheim
              </motion.h3>
              <div>
                {sortedByTime("Jotunheim").map((act) => (
                  <ActCard
                    slug={act.slug}
                    src={act.logo}
                    key={act.name}
                    name={act.name}
                    genre={act.genre}
                    start={act.eventInfo.start}
                    end={act.eventInfo.end}
                    day={act.day}
                  />
                ))}
              </div>
            </div>
          </section>
        </div>
      )}
    </>
  );
}

export default Schedule;
