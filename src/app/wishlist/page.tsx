import { OutlineButton } from "@/components/Buttons/Buttons";
import ProductCard from "@/components/Card/ProductCard";
import React from "react";

const WishList = () => {
  return (
    <section className="px-4 sm:px-10 lg:px-20">
      {/* Wishlist Header */}
      <div className="flex flex-wrap justify-between items-center py-10">
        <h2 className="font-poppins text-lg sm:text-xl ml-2">Wishlist (4)</h2>
        <OutlineButton text="Move All To Bag" href={"/shop"} />
      </div>

      {/* Wishlist Items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {wishlistCard.map((product, index) => (
          <ProductCard
            key={index}
            image={product.image}
            title={product.title}
            price={product.price}
            originalPrice={product.originalPrice}
            discount={product.discount}
            deleteBtn={product.deleteBtn}
            slug={product.slug}
          />
        ))}
      </div>

      {/* Just For You Header */}
      <div className="flex flex-wrap justify-between items-center py-10">
        <div className="flex gap-2 items-center">
          <span className="h-8 w-8 bg-secondary2 rounded"></span>
          <h2 className="font-poppins text-lg sm:text-xl ml-2">Just For You</h2>
        </div>
        <OutlineButton text="See All" href={"/shop"} />
      </div>

      {/* Just For You Items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pb-20">
        {JFYCard.map((product, index) => (
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
            slug={product.slug}
          />
        ))}
      </div>
    </section>
  );
};

const wishlistCard = [
  {
    image: "/images/wishlist/bag.png",
    title: "Gucci duffle bag",
    price: 1160,
    originalPrice: 960,
    discount: 35,
    deleteBtn: true,
    slug: "gucci-duffle-bag",
  },
  {
    image: "/images/wishlist/speaker.png",
    title: "RGB liquid CPU Cooler",
    originalPrice: 1960,
    deleteBtn: true,
    slug: "rgb-liquid-cpu-cooler",
  },
  {
    image: "/images/wishlist/controller.png",
    title: "GP11 Shooter USB Gamepad",
    originalPrice: 550,
    deleteBtn: true,
    slug: "gp11-shooter-usb-gamepad",
  },
  {
    image: "/images/wishlist/jacket.png",
    title: "Quilted Satin Jacket",
    originalPrice: 750,
    deleteBtn: true,
    slug: "quilted-satin-jacket",
  },
];

const JFYCard = [
  {
    image: "/images/wishlist/laptop.png",
    title: "ASUS FHD Gaming Laptop",
    price: 960,
    originalPrice: 1160,
    discount: 35,
    rating: 5,
    totalReviews: 65,
    isView: true,
    slug: "asus-fhd-gaming-laptop",
  },
  {
    image: "/images/wishlist/led.png",
    title: "IPS LCD Gaming Monitor",
    originalPrice: 1160,
    rating: 5,
    totalReviews: 85,
    isView: true,
    slug: "ips-lcd-gaming-monitor",
  },
  {
    image: "/images/wishlist/gamepad.png",
    title: "HAVIT HV-G92 Gamepad",
    originalPrice: 560,
    rating: 5,
    totalReviews: 78,
    isNew: true,
    isView: true,
    slug: "havit-hv-g92-gamepad",
  },
  {
    image: "/images/wishlist/keyboard.png",
    title: "AK-900 Wired Keyboard",
    originalPrice: 200,
    rating: 5,
    totalReviews: 57,
    isView: true,
    slug: "ak-900-wired-keyboard",
  },
];

export default WishList;
