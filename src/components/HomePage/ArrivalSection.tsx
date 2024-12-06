import React from "react";
import ProductCards from "./ProductCard";

const ArrivalSection = () => {
  return (
    <section className="mb-10">
      <div className="flex flex-wrap flex-col items-start sm:flex-row justify-between sm:items-center py-10">
        <div className="mb-4 md:mb-0">
          <div className="flex gap-0 items-center">
            <span className="h-[40px] w-[25px] bg-secondary2 rounded"></span>
            <h2 className="font-poppins text-base sm:text-xl ml-2 capitalize text-secondary2">
              featured
            </h2>
          </div>
          <p className="text-lg sm:text-3xl lg:text-4xl font-inter font-semibold capitalize">
            new arrival
          </p>
        </div>
      </div>
      <ProductCards />
    </section>
  );
};
export default ArrivalSection;
