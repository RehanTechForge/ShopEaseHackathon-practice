import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

const SliderButton = () => {
  return (
    <Link
      href={"/shop"}
      className="flex gap-2 items-center capitalize underline underline-offset-8 text-base sm:text-lg"
    >
      <span>shop now</span>
      <span>
        <FaArrowRight />
      </span>
    </Link>
  );
};

export default SliderButton;
