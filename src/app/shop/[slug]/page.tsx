"use client";
import Breadcrumb from "@/components/BreadCrumb/BreadCrumb";
import ProductCard from "@/components/Card/ProductCard";
import RenderColors from "@/components/Card/RenderColor";
import StarRating from "@/components/Card/StarRating";
import DeliveryInfo from "@/components/ShopDetail/DeliveryInfo";
import ProductActions from "@/components/ShopDetail/ProductAction";
import ProductGallery from "@/components/ShopDetail/ProductGallery";
import SizeSelector from "@/components/ShopDetail/SizeSelector";
import React from "react";

const page = ({ params: { slug } }: { params: { slug: string } }) => {
  console.log(slug);

  return (
    <>
      <Breadcrumb />
      <section className="px-20 pb-20">
        <div className="grid grid-cols-12 gap-7 mb-10">
          <div className="col-span-7">
            <ProductGallery />
          </div>
          <div className="col-span-5">
            <h3 className="text-2xl font-inter font-semibold">
              Havic HV G-92 Gamepad
            </h3>
            <div className="my-2">
              <StarRating rating={4} totalReviews={67} details={true} />
            </div>
            <p className="text-2xl font-inter">$192.00</p>
            <p className="font-poppins text-sm border-b border-text2 border-opacity-50 py-5">
              PlayStation 5 Controller Skin High quality vinyl with air channel
              adhesive for easy bubble free install & mess free removal Pressure
              sensitive.
            </p>
            <div className="font-inter text-xl flex items-center gap-4 my-3">
              Colours:
              <RenderColors colors={colors} />
            </div>
            <div className="font-inter text-xl flex items-center gap-4 my-3">
              Size:
              <SizeSelector sizes={availableSizes} />
            </div>
            <ProductActions />
            <DeliveryInfo />
          </div>
        </div>
        <div className="flex justify-between items-center py-10">
          <div className="flex gap-0 items-center">
            <span className="h-[40px] w-[30px] bg-secondary2 rounded"></span>
            <h2 className="font-poppins text-xl capitalize ml-2">
              related item
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-6 pb-20">
          {relatedProducts.map((product, index) => (
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
            />
          ))}
        </div>
      </section>
    </>
  );
};

const colors = [
  { colorName: "red", colorCode: "#ffffff" },
  { colorName: "black", colorCode: "#000000" },
];
const availableSizes = ["XS", "S", "M", "L", "XL"];
const relatedProducts = [
  {
    image: "/images/wishlist/laptop.png",
    title: "ASUS FHD Gaming Laptop",
    price: 49.99,
    originalPrice: 59.99,
    discount: 17, // Discount percentage
    rating: 2,
    totalReviews: 120,
    isView: true, // Determines if the product is being viewed
    isNew: true, // Indicates if the product is new
    wishlist: true,
  },
  {
    image: "/images/wishlist/gamepad.png",
    title: "HAVIT HV-G92 Gamepad",
    price: 29.99,
    originalPrice: 39.99,
    discount: 25,
    rating: 4.8,
    totalReviews: 200,
    isView: true,
    isNew: false,
    wishlist: true,
  },
  {
    image: "/images/wishlist/keyboard.png",
    title: "AK-900 Wired Keyboard",
    price: 199.99,
    originalPrice: 299.99,
    discount: 20,
    rating: 4,
    totalReviews: 150,
    isView: true,
    isNew: false,
    wishlist: true,
  },
];

export default page;
