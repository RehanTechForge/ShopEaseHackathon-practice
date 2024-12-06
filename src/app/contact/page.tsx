"use client";

import React from "react";
import Breadcrumb from "@/components/BreadCrumb/BreadCrumb";
import { Construction } from "lucide-react";
import Link from "next/link";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb />

        <div className="flex flex-col justify-center items-center h-[calc(100vh-8rem)] text-center">
          <Construction className="w-24 h-24 text-yellow-500 mb-8" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Contact Page Under Construction
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl">
            We're working hard to bring you an amazing contact experience.
            Please check back soon for updates!
          </p>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Need immediate assistance?
            </h2>
            <p className="text-gray-600 mb-4">
              While we're building our contact page, you can still reach us at:
            </p>
            <Link
              href="mailto:muhammadrehan125768@gmail.com"
              className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
            >
              muhammadrehan125768@gmail.com
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
