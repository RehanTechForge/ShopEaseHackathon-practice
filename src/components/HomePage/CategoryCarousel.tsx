"use client";

import React from "react";
import { Carousel } from "@/components/ui/apple-cards-carousel";
import CategoryCard from "./CategoryCard";
import {
  FiSmartphone,
  FiMonitor,
  FiHeadphones,
  FiCamera,
  FiWatch,
} from "react-icons/fi"; // Import icons

// Sample categories array with React Icons
const categories = [
  {
    name: "Phones",
    icon: <FiSmartphone size={56} className="text-blue-500" />,
  },
  {
    name: "Laptops",
    icon: <FiMonitor size={56} className="text-green-500" />,
  },
  {
    name: "Headphones",
    icon: <FiHeadphones size={56} className="text-sky-800" />,
  },
  {
    name: "Cameras",
    icon: <FiCamera size={56} className="text-purple-500" />,
  },
  {
    name: "Watches",
    icon: <FiWatch size={56} className="text-yellow-500" />,
  },
  {
    name: "Phones",
    icon: <FiSmartphone size={56} className="text-blue-500" />,
  },
  {
    name: "Headphones",
    icon: <FiHeadphones size={56} className="text-sky-800" />,
  },
  {
    name: "Laptops",
    icon: <FiMonitor size={56} className="text-green-500" />,
  },
];

export function CategoryCarousel() {
  const cards = categories.map((category, index) => (
    <CategoryCard key={index} icon={category.icon} label={category.name} />
  ));

  return (
    <div className="w-full h-full pt-20 text-center border-b mb-10">
      <Carousel
        items={cards}
        show={false} // Controls visibility of buttons, etc.
        label="categories"
        title="browse by category"
      />
    </div>
  );
}
