import React from "react";
import ProductCard from "../Card/ProductCard";
import { MainButton } from "../Buttons/Buttons";

const ExploreProduct = () => {
  return (
    <section className="flex sm:justify-start justify-center flex-col sm:items-start">
      <div className="flex flex-wrap flex-col items-start sm:flex-row justify-between sm:items-center py-10">
        <div className="mb-4 md:mb-0">
          <div className="flex gap-0 items-center">
            <span className="h-[40px] w-[25px] bg-secondary2 rounded"></span>
            <h2 className="font-poppins text-base sm:text-xl ml-2 capitalize text-secondary2">
              Our Products
            </h2>
          </div>
          <p className="text-lg sm:text-3xl lg:text-4xl font-inter font-semibold">
            Explore Our Products
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-3 pb-20 w-full">
        {ExploreProductCards.map((product, index) => (
          <ProductCard
            key={index}
            image={product.image}
            title={product.title}
            price={product.price}
            originalPrice={product.originalPrice}
            discount={product.discount}
            rating={product.rating}
            totalReviews={product.totalReviews}
            isView={product.isView}
            isNew={product.isNew}
            wishlist={product.wishlist}
            colors={product.colors}
            slug={product.slug}
          />
        ))}
      </div>
      <MainButton text="View All Products" href="/shop" />
    </section>
  );
};
const ExploreProductCards = [
  {
    image: "/images/wishlist/laptop.png",
    title: "ASUS FHD Gaming Laptop",
    slug: "asus-fhd-gaming-laptop",
    price: 960,
    originalPrice: 1160,
    discount: 35,
    rating: 5,
    totalReviews: 65,
    isView: true,
    wishlist: true,
    colors: [
      { colorName: "Red", colorCode: "#FF0000" },
      { colorName: "Black", colorCode: "#000000" },
      { colorName: "Blue", colorCode: "#0000FF" },
    ],
  },
  {
    image: "/images/wishlist/led.png",
    title: "IPS LCD Gaming Monitor",
    slug: "ips-lcd-gaming-monitor",
    originalPrice: 1160,
    rating: 5,
    totalReviews: 85,
    isView: true,
    wishlist: true,
    colors: [
      { colorName: "White", colorCode: "#FFFFFF" },
      { colorName: "Grey", colorCode: "#808080" },
    ],
  },
  {
    image: "/images/wishlist/gamepad.png",
    title: "HAVIT HV-G92 Gamepad",
    slug: "havit-hv-g92-gamepad",
    originalPrice: 560,
    rating: 5,
    totalReviews: 78,
    isNew: true,
    isView: true,
    wishlist: true,
    colors: [
      { colorName: "Yellow", colorCode: "#FFFF00" },
      { colorName: "Black", colorCode: "#000000" },
      { colorName: "Green", colorCode: "#00FF00" },
    ],
  },
  {
    image: "/images/wishlist/keyboard.png",
    title: "AK-900 Wired Keyboard",
    slug: "ak-900-wired-keyboard",
    originalPrice: 200,
    rating: 5,
    totalReviews: 57,
    isView: true,
    wishlist: true,
    colors: [
      { colorName: "Purple", colorCode: "#800080" },
      { colorName: "Black", colorCode: "#000000" },
      { colorName: "Orange", colorCode: "#FFA500" },
    ],
  },
  {
    image: "/images/wishlist/gamepad.png",
    title: "HAVIT HV-G92 Gamepad",
    slug: "havit-hv-g92-gamepad",
    originalPrice: 560,
    rating: 5,
    totalReviews: 78,
    isNew: true,
    isView: true,
    wishlist: true,
    colors: [
      { colorName: "Yellow", colorCode: "#FFFF00" },
      { colorName: "Black", colorCode: "#000000" },
      { colorName: "Green", colorCode: "#00FF00" },
    ],
  },
  {
    image: "/images/wishlist/led.png",
    title: "IPS LCD Gaming Monitor",
    slug: "ips-lcd-gaming-monitor",
    originalPrice: 1160,
    rating: 5,
    totalReviews: 85,
    isView: true,
    wishlist: true,
    colors: [
      { colorName: "White", colorCode: "#FFFFFF" },
      { colorName: "Grey", colorCode: "#808080" },
    ],
  },
  {
    image: "/images/wishlist/keyboard.png",
    title: "AK-900 Wired Keyboard",
    slug: "ak-900-wired-keyboard",
    originalPrice: 200,
    rating: 5,
    totalReviews: 57,
    isView: true,
    wishlist: true,
    colors: [
      { colorName: "Purple", colorCode: "#800080" },
      { colorName: "Black", colorCode: "#000000" },
      { colorName: "Orange", colorCode: "#FFA500" },
    ],
  },
  {
    image: "/images/wishlist/laptop.png",
    title: "ASUS FHD Gaming Laptop",
    slug: "asus-fhd-gaming-laptop",
    price: 960,
    originalPrice: 1160,
    discount: 35,
    rating: 5,
    totalReviews: 65,
    isView: true,
    wishlist: true,
    colors: [
      { colorName: "Red", colorCode: "#FF0000" },
      { colorName: "Black", colorCode: "#000000" },
      { colorName: "Blue", colorCode: "#0000FF" },
    ],
  },
];

export default ExploreProduct;
