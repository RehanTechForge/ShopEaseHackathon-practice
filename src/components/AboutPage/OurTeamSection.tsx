"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import Image from "next/image";
import { SlSocialTwitter } from "react-icons/sl";
import { LuInstagram } from "react-icons/lu";
import { FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";

const OurTeamSection = () => {
  return (
    <section className="px-6 sm:px-10 lg:px-20">
      <h2 className="text-4xl font-bold text-center mb-10">Meet Our Team</h2>
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        breakpoints={{
          640: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 3, spaceBetween: 30 },
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper my-10"
      >
        {teamMembers.map((member) => (
          <SwiperSlide key={member.id} className="teamSlide">
            <div className="bg-secondary pt-2 flex justify-center rounded-t-lg">
              <div className="w-full px-6 overflow-hidden h-[400px] flex justify-center items-center">
                <Image
                  src={member.image}
                  alt={member.name}
                  height={300}
                  width={300}
                  className=" object-cover"
                />
              </div>
            </div>
            <div className="text-black px-6 py-4 flex items-start flex-col bg-white rounded-b-lg shadow-md">
              <h3 className="capitalize font-inter text-2xl font-semibold my-2">
                {member.name}
              </h3>
              <p className="font-poppins text-lg text-gray-600">
                {member.role}
              </p>
              <div className="my-4 flex gap-4 text-xl text-gray-500">
                <Link href={"#"} className="hover:text-primary">
                  <SlSocialTwitter />
                </Link>
                <Link href={"#"} className="hover:text-primary">
                  <LuInstagram />
                </Link>
                <Link href={"#"} className="hover:text-primary">
                  <FaLinkedinIn />
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

// Dummy data for team members
const teamMembers = [
  {
    id: 1,
    name: "Tom Cruise",
    role: "Founder & Chairman",
    image: "/images/about/team2.png",
  },
  {
    id: 2,
    name: "Emma Watson",
    role: "CEO",
    image: "/images/about/team2.png",
  },
  {
    id: 3,
    name: "Robert Downey Jr.",
    role: "CTO",
    image: "/images/about/team2.png",
  },
  {
    id: 4,
    name: "Tom Cruise",
    role: "Founder & Chairman",
    image: "/images/about/team2.png",
  },
  {
    id: 5,
    name: "Emma Watson",
    role: "CEO",
    image: "/images/about/team2.png",
  },
  {
    id: 6,
    name: "Robert Downey Jr.",
    role: "CTO",
    image: "/images/about/team1.png",
  },
];

export default OurTeamSection;
