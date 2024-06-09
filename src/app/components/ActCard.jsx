"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Bowlby_One } from "next/font/google";
import Image from 'next/image';

const BowlbyOne = Bowlby_One({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

function ActCard({ name, genre, start, end, src, slug, day, scene }) {

  return (
    <motion.article
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="mb-8 border-2 border-Hotpink hover:scale-105"
    >

        <Link href={`/lineup/${slug}`} prefetch={false}>
        <section className="grid grid-cols-3 gap-4 sm:gap-24 bg-Black">
        <div className="text-center flex flex-col justify-center items-center">

          {/* Time */}
            <p className="text-md md:text-lg font-semibold text-White ">
              {start} - {end}
            </p>
          </div>

          {/* Bands name */}
          <div className="flex flex-col justify-center items-center">
            <p className="pl-4 text-md md:text-lg  text-White text-center font-bold uppercase">{name}</p>
          </div>

          {/* image */}
            <div className="relative h-24 md:h-28">
            <Image
              alt="Artist presentation"
              src={src.startsWith("http") ? src : `https://yielding-cooperative-tarsal.glitch.me/logos/${src}`}
              layout="fill"
              objectFit="cover"
              className="rounded-xl"
            />
            </div>
          </section>
        </Link>
    </motion.article>
  );
}

export default ActCard;
