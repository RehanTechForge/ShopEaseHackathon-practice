import Link from "next/link";
import React from "react";
import { FaChevronDown } from "react-icons/fa";

const TopHeader = () => {
  return (
    <section className="bg-button px-4 sm:px-20 py-4 flex flex-col-reverse gap-2 lg:flex-row justify-between items-center">
      <div className="flex gap-4 text-text justify-center sm:w-full">
        <p>
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
        </p>
        <Link href={"/shop"} className="font-semibold text-primary underline">
          ShopNow
        </Link>
      </div>
      <div className="w-24 flex gap-4 items-center text-text">
        <span>English</span>
        <span className="text-primary">
          <FaChevronDown />
        </span>
      </div>
    </section>
  );
};

export default TopHeader;
