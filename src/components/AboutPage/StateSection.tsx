import React from "react";
import IconCard from "./IconCard";

const stats = [
  {
    id: 1,
    value: "10.5k",
    label: "Sellers active on our site",
    icon: "/images/about/i1.png",
  },
  {
    id: 2,
    value: "33k",
    label: "Monthly Product Sale",
    icon: "/images/about/i2.png",
    hover: true,
  },
  {
    id: 3,
    value: "45.5k",
    label: "Customers active on our site",
    icon: "/images/about/i3.png",
  },
  {
    id: 4,
    value: "25k",
    label: "Annual gross sale on our site",
    icon: "/images/about/i4.png",
  },
];

export default function StatsSection() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 px-6 sm:px-10 lg:px-20 py-10 gap-6">
      {stats.map((stat) => (
        <div
          key={stat.id}
          className="flex flex-col items-center justify-center border p-6 rounded-lg transition-colors cursor-pointer hover:bg-secondary2 hover:text-text group"
        >
          <IconCard id={stat.id} icon={stat.icon} invert={true} />
          <p className="mt-4 text-black font-inter text-xl md:text-2xl font-bold">
            {stat.value}
          </p>
          <p className="text-center font-poppins text-sm md:text-base">
            {stat.label}
          </p>
        </div>
      ))}
    </section>
  );
}
