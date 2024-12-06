import Link from "next/link";
import React from "react";

const OutlineButton = ({ text, href }: { text: string; href: string }) => {
  return (
    <Link
      href={href}
      className="capitalize font-poppins text-base border-2 border-[#808080] border-opacity-50 rounded px-16 py-4 hover:border-secondary2 transition-all duration-500 hover:bg-[#e6e4e4] "
    >
      {text}
    </Link>
  );
};

const MainButton = ({ text, href }: { text: string; href: string }) => {
  return (
    <Link
      href={href}
      className="capitalize font-poppins text-base text-white border-none rounded px-12 py-3 bg-button2 hover:bg-opacity-90 hover:shadow-lg transition-all duration-300"
    >
      {text}
    </Link>
  );
};

export { OutlineButton, MainButton };
