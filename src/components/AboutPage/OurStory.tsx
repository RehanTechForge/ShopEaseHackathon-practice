import Image from "next/image";
import React from "react";

const OurStory = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center px-6 md:px-16 lg:px-20 sm:py-10">
      <div className="flex flex-col gap-6">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-wider">
          Our Story
        </h2>
        <p className="text-text2 font-poppins text-sm md:text-base leading-relaxed">
          Launched in 2015, Exclusive is South Asia&rsquo;s premier online
          shopping marketplace with an active presence in Bangladesh. Supported
          by a wide range of tailored marketing, data, and service solutions,
          Exclusive has 10,500 sellers and 300 brands and serves 3 million
          customers across the region.
        </p>
        <p className="text-text2 font-poppins text-sm md:text-base leading-relaxed">
          Exclusive has more than 1 million products to offer, growing at a very
          fast rate. Exclusive offers a diverse assortment in categories ranging
          from consumer goods to specialized products.
        </p>
      </div>
      <div className="flex justify-center">
        <Image
          src={"/images/about/about.png"}
          alt="About us image"
          height={400}
          width={700}
          className="w-full h-auto rounded-lg"
        />
      </div>
    </section>
  );
};

export default OurStory;
