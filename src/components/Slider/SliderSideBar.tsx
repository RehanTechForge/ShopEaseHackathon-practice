"use client";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

// Define types for category and subcategory data
type Category = {
  name: string;
  subcategories?: string[];
};

const categories: Category[] = [
  {
    name: "Woman&rsquo;s Fashion",
    subcategories: ["Dresses", "Shoes", "Accessories"],
  },
  {
    name: "Men&rsquo;s Fashion",
    subcategories: ["Shirts", "Pants", "Watches"],
  },
  {
    name: "Home & Lifestyle",
  },
  {
    name: "Medicine",
  },
  {
    name: "Sports & Outdoor",
  },
  {
    name: "Baby&rsquo;s & Toys",
  },
  {
    name: "Groceries & Pets",
  },
  {
    name: "Health & Beauty",
  },
];

const SliderSideBar: React.FC = () => {
  // State to manage which categories are open, with index keys and boolean values
  const [openCategories, setOpenCategories] = useState<Record<number, boolean>>(
    {}
  );

  // Function to toggle category visibility
  const toggleCategory = (index: number) => {
    setOpenCategories((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="col-span-1 lg:col-span-3 border-r border-text1 py-4 px-2 sm:p-4">
      <ul className="hidden lg:flex flex-col gap-4 text-text2">
        {categories.map((category, index) => (
          <li key={index} className="cursor-pointer">
            <div
              className="flex items-center justify-between"
              onClick={() => toggleCategory(index)}
            >
              <span dangerouslySetInnerHTML={{ __html: category.name }}></span>
              <span className="ml-2">
                {category.subcategories && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className={`w-4 h-4 transition-transform duration-200 ${
                      openCategories[index] ? "rotate-90" : "rotate-0"
                    }`}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 9l6 6 6-6"
                    />
                  </svg>
                )}
              </span>
            </div>
            {openCategories[index] && category.subcategories && (
              <ul className="ml-4 mt-2 text-sm text-gray-600">
                {category.subcategories.map((subcategory, subIndex) => (
                  <li key={subIndex}>{subcategory}</li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>

      <div className="block lg:hidden">
        <Sheet>
          <SheetTrigger>
            <GiHamburgerMenu />
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader>
              <SheetTitle>Category Menu</SheetTitle>
              <SheetDescription>
                <ul className="flex flex-col gap-4 text-text2">
                  {categories.map((category, index) => (
                    <li key={index} className="cursor-pointer">
                      <div
                        className="flex items-center justify-between"
                        onClick={() => toggleCategory(index)}
                      >
                        <span
                          dangerouslySetInnerHTML={{ __html: category.name }}
                        ></span>
                        <span className="ml-2">
                          {category.subcategories && (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className={`w-4 h-4 transition-transform duration-200 ${
                                openCategories[index] ? "rotate-90" : "rotate-0"
                              }`}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 9l6 6 6-6"
                              />
                            </svg>
                          )}
                        </span>
                      </div>
                      {openCategories[index] && category.subcategories && (
                        <ul className="ml-4 mt-2 text-sm text-gray-600">
                          {category.subcategories.map(
                            (subcategory, subIndex) => (
                              <li key={subIndex}>{subcategory}</li>
                            )
                          )}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default SliderSideBar;
