import React from "react";
import Link from "next/link";
import InputWithSearchIcon from "./InputWithSearchIcon";
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import Navbar from "./Navbar";

const MainHeader = () => {
  return (
    <section className="px-20 py-4 bg-primary border-b border-text1 flex justify-between items-center flex-col gap-2 lg:flex-row">
      <div className="text-2xl font-semibold">
        <Link href={"/"}>Exclusive</Link>
      </div>
      <Navbar />
      <div className=" flex gap-4 items-center">
        <InputWithSearchIcon />
        <span className="text-2xl">
          <Link href={"/wishlist"}>
            <FaRegHeart />
          </Link>
        </span>
        <span className="text-2xl">
          <Link href={"/cart"}>
            <IoCartOutline />
          </Link>
        </span>
      </div>
    </section>
  );
};

export default MainHeader;
