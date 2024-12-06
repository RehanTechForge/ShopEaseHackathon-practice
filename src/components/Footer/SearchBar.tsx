import Image from "next/image";
import React from "react";
const SearchBar = () => {
  return (
    <form className="flex items-center max-w-lg mx-auto my-2">
      <label htmlFor="voice-search" className="sr-only">
        Search
      </label>
      <div className="relative w-full">
        <input
          type="text"
          id="voice-search"
          className="bg-transparent border border-white text-white text-sm rounded-sm focus:ring-grey-500 focus:border-grey-500 block w-full p-2.5 placeholder:font-poppins placeholder:text-base placeholder:text-text placeholder:opacity-50 focus:outline-none"
          placeholder="Enter your email"
          required
        />
        <button
          type="button"
          className="absolute inset-y-0 end-0 flex items-center pe-3"
        >
          <Image
            src={"/images/footer/send.svg"}
            alt="Send Email"
            width={16}
            height={16}
          />
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
