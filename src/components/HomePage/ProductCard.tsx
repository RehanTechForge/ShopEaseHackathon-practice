import React from "react";
import Image from "next/image";
import Link from "next/link";

const ProductCards = () => {
  return (
    <div className="grid grid-cols-4 grid-rows-3 lg:grid-rows-2 gap-6">
      <div className="col-span-4 lg:col-span-2 lg:row-span-2">
        <div className="bg-black relative px-4 sm:px-6 pt-12 sm:pt-16 rounded h-full">
          <div className="flex justify-center">
            <Image
              src={"/images/home/ps5.png"}
              alt="ps5"
              className="w-full max-w-xs sm:max-w-sm"
              width={0}
              height={0}
              sizes="100vw"
            />
          </div>
          <div className="absolute bottom-0 left-0 text-white flex gap-2 flex-col items-start p-4 sm:p-6">
            <h2 className="text-lg sm:text-2xl font-semibold">PlayStation 5</h2>
            <p className="text-xs sm:text-sm">
              Black and White version of the PS5 <br /> coming out on sale.
            </p>
            <Link href="/shop" className="underline underline-white">
              Shop Now
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden lg:block lg:col-span-2">
        <div className="bg-black relative px-4 sm:px-6 py-8 rounded h-full">
          <div className="absolute right-0 bottom-0 max-w-xs">
            <Image
              src={"/images/home/women.png"}
              alt="women image"
              className="w-full max-w-sm"
              width={0}
              height={0}
              sizes="100vw"
            />
          </div>
          <div className="absolute bottom-0 left-0 text-white flex gap-2 flex-col items-start p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl font-semibold">
              Women&rsquo;s Collections
            </h2>
            <p className="text-xs sm:text-sm">
              Featured woman collections that give you another vibe.
            </p>
            <Link href="/shop" className="underline underline-white">
              Shop Now
            </Link>
          </div>
        </div>
      </div>
      <div className="col-span-4 lg:col-span-1">
        <div className="bg-black relative px-4 sm:px-6 py-8 rounded h-full">
          <div className="flex justify-center">
            <Image
              src={"/images/home/speaker.png"}
              alt="Speakers"
              className="w-full max-w-xs"
              width={0}
              height={0}
              sizes="100vw"
            />
          </div>
          <div className="absolute bottom-0 left-0 text-white flex gap-2 flex-col items-start p-4 sm:p-6">
            <h2 className="text-lg font-semibold">Speakers</h2>
            <p className="text-xs sm:text-sm">Amazon wireless speakers</p>
            <Link href="/shop" className="underline underline-white">
              Shop Now
            </Link>
          </div>
        </div>
      </div>
      <div className="col-span-4 lg:col-span-1">
        <div className="bg-black relative px-4 sm:px-6 py-8 rounded h-full">
          <div className="flex justify-center">
            <Image
              src={"/images/home/perfume.png"}
              alt="Perfume"
              className="w-full max-w-xs"
              width={0}
              height={0}
              sizes="100vw"
            />
          </div>
          <div className="absolute bottom-0 left-0 text-white flex gap-2 flex-col items-start p-4 sm:p-6">
            <h2 className="text-lg font-semibold">Perfume</h2>
            <p className="text-xs sm:text-sm">GUCCI INTENSE OUD EDP</p>
            <Link href="/shop" className="underline underline-white">
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCards;
