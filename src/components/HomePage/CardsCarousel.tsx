"use client";

import React from "react";
import { Carousel } from "@/components/ui/apple-cards-carousel";
import ProductCard from "@/components/Card/ProductCard";
import { MainButton } from "../Buttons/Buttons";

export function CardsCarousel() {
  const cards = products.map((product, index) => (
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
      slug={product.slug}
    />
  ));

  return (
    <div className="w-full h-full py-20 text-center border-b mb-10">
      <Carousel items={cards} show={true} label="Today's" title="flash sales" />
      <MainButton text="View All Products" href="/shop" />
    </div>
  );
}

// Sample products array
const products = [
  {
    image: "/images/wishlist/laptop.png",
    title: "Product 1",
    slug: "product-1",
    originalPrice: 120,
    rating: 4.5,
    totalReviews: 120,
    isView: true,
    isNew: true,
    wishlist: true,
  },
  {
    image: "/images/wishlist/bag.png",
    title: "Product 2",
    slug: "product-2",
    price: 199,
    originalPrice: 250,
    discount: 25,
    rating: 4.7,
    totalReviews: 90,
    isView: true,
    isNew: false,
    wishlist: true,
  },
  {
    image: "/images/wishlist/gamepad.png",
    title: "Product 3",
    slug: "product-3",
    price: 299,
    originalPrice: 350,
    discount: 15,
    rating: 4.3,
    totalReviews: 60,
    isView: true,
    isNew: false,
    wishlist: true,
  },
  {
    image: "/images/wishlist/jacket.png",
    title: "Product 1",
    slug: "product-1",
    originalPrice: 120,
    rating: 4.5,
    totalReviews: 120,
    isView: true,
    isNew: true,
    wishlist: true,
  },
  {
    image: "/images/wishlist/keyboard.png",
    title: "Product 2",
    slug: "product-2",
    price: 199,
    originalPrice: 250,
    discount: 25,
    rating: 4.7,
    totalReviews: 90,
    isView: true,
    isNew: false,
    wishlist: true,
  },
  {
    image: "/images/wishlist/led.png",
    title: "Product 3",
    slug: "product-3",
    price: 299,
    originalPrice: 350,
    discount: 15,
    rating: 4.3,
    totalReviews: 60,
    isView: true,
    isNew: false,
    wishlist: true,
  },
  {
    image: "/images/wishlist/speaker.png",
    title: "Product 1",
    slug: "product-1",
    price: 99,
    originalPrice: 120,
    discount: 20,
    rating: 4.5,
    totalReviews: 120,
    isView: true,
    isNew: true,
    wishlist: true,
  },
  {
    image: "/images/wishlist/bag.png",
    title: "Product 2",
    slug: "product-2",
    originalPrice: 250,
    rating: 4.7,
    totalReviews: 90,
    isView: true,
    isNew: true,
    wishlist: true,
  },
  {
    image: "/images/wishlist/laptop.png",
    title: "Product 3",
    slug: "product-3",
    price: 299,
    originalPrice: 350,
    discount: 15,
    rating: 4.3,
    totalReviews: 60,
    isView: true,
    isNew: false,
    wishlist: true,
  },
];
