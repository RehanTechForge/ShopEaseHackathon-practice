"use client";

import React from "react";
import Breadcrumb from "@/components/BreadCrumb/BreadCrumb";
import { ShoppingBag } from "lucide-react";

const ShopPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb />

        <div className="flex flex-col justify-center items-center h-[calc(100vh-8rem)] text-center">
          <ShoppingBag className="w-24 h-24 text-blue-500 mb-8" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Our Shop is Coming Soon!
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl">
            We're working hard to bring you an amazing shopping experience.
            Please check back soon for our grand opening!
          </p>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Want to be notified when we launch?
            </h2>
            <p className="text-gray-600 mb-4">
              Sign up for our newsletter to get updates and exclusive offers:
            </p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Email for newsletter"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300"
              >
                Notify Me
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
