"use client";
import Breadcrumb from "@/components/BreadCrumb/BreadCrumb";
import { MainButton, OutlineButton } from "@/components/Buttons/Buttons";
import Image from "next/image";
import React, { useState } from "react";

const CartPage = () => {
  const [quantities, setQuantities] = useState([2, 1, 3]);
  const products = [
    {
      id: 1,
      image: "/images/cart/led.png",
      name: "LCD Monitor",
      price: 650,
      quantity: 2,
    },
    {
      id: 2,
      image: "/images/cart/gamepad.png",
      name: "H1 Gamepad",
      price: 200,
      quantity: 1,
    },
  ];

  // Handle increment and decrement
  const incrementQuantity = (index: number) => {
    const updatedQuantities = [...quantities];
    updatedQuantities[index]++;
    setQuantities(updatedQuantities);
  };

  const decrementQuantity = (index: number) => {
    const updatedQuantities = [...quantities];
    if (updatedQuantities[index] > 1) {
      updatedQuantities[index]--;
      setQuantities(updatedQuantities);
    }
  };

  return (
    <>
      <Breadcrumb />
      <section className="px-4 sm:px-10 lg:px-20 pb-20 flex flex-col gap-y-10">
        {/* Header Row */}
        <div className="flex justify-between items-center shadow-[0px_4px_10px_rgba(0,0,0,0.25)] py-5 rounded px-4 sm:px-10">
          <div className="w-1/3 text-left">
            <span className="text-sm sm:text-base font-poppins font-semibold">
              Product
            </span>
          </div>
          <div className="w-1/6 text-center">
            <span className="text-sm sm:text-base font-poppins font-semibold">
              Price
            </span>
          </div>
          <div className="w-1/6 text-center">
            <span className="text-sm sm:text-base font-poppins font-semibold">
              Quantity
            </span>
          </div>
          <div className="w-1/6 text-center">
            <span className="text-sm sm:text-base font-poppins font-semibold">
              Subtotal
            </span>
          </div>
        </div>

        {/* Product Rows */}
        {products.map((product, index) => (
          <div
            key={product.id}
            className="flex flex-wrap sm:flex-nowrap justify-between items-center shadow-[0px_4px_10px_rgba(0,0,0,0.25)] py-4 rounded px-4 sm:px-10"
          >
            {/* Product Column */}
            <div className="w-full sm:w-1/3 flex items-center gap-4 text-left relative">
              <span className="absolute z-[99] top-[-6px] -left-[10px] bg-secondary2 rounded-full w-[18px] h-[18px] flex justify-center items-center cursor-pointer">
                <Image
                  src={"/images/cart/cross.png"}
                  alt="cross image"
                  height={6}
                  width={6}
                />
              </span>
              <Image
                src={product.image}
                alt={`${product.name} Image`}
                height={40}
                width={50}
                loading="lazy"
                className="w-12 sm:w-auto"
              />
              <span className="font-poppins text-sm sm:text-base">
                {product.name}
              </span>
            </div>

            {/* Price Column */}
            <div className="w-1/2 sm:w-1/6 text-center mt-4 sm:mt-0">
              <span className="text-sm sm:text-base font-poppins">
                ${product.price}
              </span>
            </div>

            {/* Quantity Column */}
            <div className="w-1/2 sm:w-1/6 flex justify-center text-center mt-4 sm:mt-0">
              <div className="w-[60px] sm:w-[80px] border-2 border-button border-opacity-50 flex items-center justify-center py-2 px-2 sm:px-4 rounded gap-2 sm:gap-4">
                <div className="text-sm sm:text-base font-poppins">
                  {quantities[index]}
                </div>
                <div className="flex flex-col items-center">
                  <button
                    onClick={() => incrementQuantity(index)}
                    className="flex items-center justify-center mb-1"
                  >
                    <Image
                      src={"/images/cart/down.png"}
                      alt="Increase Quantity"
                      width={10}
                      height={10}
                      className="rotate-180"
                    />
                  </button>
                  <button
                    onClick={() => decrementQuantity(index)}
                    className="flex items-center justify-center mt-1"
                  >
                    <Image
                      src={"/images/cart/down.png"}
                      alt="Decrease Quantity"
                      width={10}
                      height={10}
                    />
                  </button>
                </div>
              </div>
            </div>

            {/* Subtotal Column */}
            <div className="w-full sm:w-1/6 text-center mt-4 sm:mt-0">
              <span className="text-sm sm:text-base font-poppins">
                ${product.price * quantities[index]}
              </span>
            </div>
          </div>
        ))}

        <div className="flex flex-wrap gap-4 justify-between items-center mb-4">
          <OutlineButton text="Return To Shop" href="/shop" />
          <OutlineButton text="Update Cart" href="/cart" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 pb-10 gap-4">
          <div className="col-span-1 lg:col-span-7 flex gap-4 items-start">
            <input
              type="text"
              placeholder="Coupon Code"
              className="border border-text2 px-4 py-3 rounded focus:ring-2 focus:outline-none focus:ring-gray-400 focus:border-gray-400 w-full lg:w-[50%]"
            />
            <MainButton text="apply coupon" href="/" />
          </div>
          <div className="col-span-1 lg:col-span-5 border-2 border-black rounded p-6">
            <h4 className="text-base sm:text-lg font-poppins font-semibold mb-6">
              Cart Total
            </h4>

            {/* Subtotal */}
            <div className="flex justify-between items-center py-4 border-b">
              <span className="text-sm sm:text-base font-poppins">
                Subtotal:
              </span>
              <span className="text-sm sm:text-base font-poppins text-right">
                ${1000}
              </span>
            </div>

            {/* Shipping */}
            <div className="flex justify-between items-center py-4 border-b">
              <span className="text-sm sm:text-base font-poppins">
                Shipping:
              </span>
              <span className="text-sm sm:text-base font-poppins text-right">
                Free
              </span>
            </div>

            {/* Total */}
            <div className="flex justify-between items-center py-4">
              <span className="text-sm sm:text-base font-poppins font-semibold">
                Total:
              </span>
              <span className="text-sm sm:text-base font-poppins text-right font-semibold">
                ${1750}
              </span>
            </div>

            {/* Checkout Button */}
            <div className="mt-6 flex justify-center">
              <MainButton text="Process to Checkout" href="/checkout" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CartPage;
