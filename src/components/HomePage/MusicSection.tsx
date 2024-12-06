"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function MusicSection() {
  return (
    <section className="flex flex-wrap items-center justify-between bg-black text-white p-10 my-20">
      {/* Left Section */}
      <div className="flex flex-col space-y-5 md:w-1/2 w-full mb-10 md:mb-0">
        <p className="text-button1 uppercase text-sm sm:text-base font-semibold font-poppins">
          Categories
        </p>
        <h1 className=" text-2xl sm:text-5xl font-semibold font-inter leading-tight">
          Enhance Your <br /> Music Experience
        </h1>
        {/* Countdown */}
        <div className="flex items-center space-x-4 mt-4 sm:mt-6">
          <div className="text-center">
            <p className="text-2xl font-bold">23</p>
            <span className="text-sm text-gray-300">Hours</span>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold">05</p>
            <span className="text-sm text-gray-300">Days</span>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold">59</p>
            <span className="text-sm text-gray-300">Minutes</span>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold">35</p>
            <span className="text-sm text-gray-300">Seconds</span>
          </div>
        </div>
        {/* Button */}
        <Link
          href={"/shop"}
          className="mt-6 py-3 px-6 bg-button1 text-white rounded text-base font-poppins hover:bg-green-400 transition w-[150px] text-center"
        >
          Buy Now!
        </Link>
      </div>

      {/* Right Section */}
      <div className="md:w-1/2 w-full flex justify-center md:justify-end">
        <div className="relative">
          {/* White glow around the image */}
          <Image
            src="/images/home/music.png"
            alt="Music Speaker"
            width={450}
            height={400}
            className="object-contain shadow-lg"
            style={{
              filter: "drop-shadow(0 0 80px rgba(255,255,255,.3))", // White glow effect
            }}
          />
        </div>
      </div>
    </section>
  );
}
