import React from "react";
import IconCard from "./IconCard";

const SupportSection = () => {
  return (
    <section className="flex flex-wrap justify-center gap-10 md:gap-16 lg:gap-20 py-10 px-4">
      {sections.map((section, index) => (
        <div
          key={index}
          className="flex flex-col justify-center items-center text-center max-w-[300px]"
        >
          <IconCard icon={section.icon} id={section.id} />
          <h3 className="font-poppins text-[18px] md:text-[20px] font-semibold mt-4">
            {section.title}
          </h3>
          <p className="font-poppins text-[14px] md:text-[16px] mt-2">
            {section.description}
          </p>
        </div>
      ))}
    </section>
  );
};

const sections = [
  {
    icon: "/images/about/i5.png",
    id: 0,
    title: "FREE AND FAST DELIVERY",
    description: "Free delivery for all orders over $140",
  },
  {
    icon: "/images/about/i6.png",
    id: 1,
    title: "SECURE PAYMENTS",
    description: "We ensure secure payment options.",
  },
  {
    icon: "/images/about/i7.png",
    id: 2,
    title: "24/7 CUSTOMER SUPPORT",
    description: "Friendly support anytime you need it.",
  },
];

export default SupportSection;
