import React from "react";

const DeliveryInfo = () => {
  return (
    <div className="max-w-md mx-auto border rounded-md overflow-hidden">
      {/* Free Delivery Section */}
      <div className="flex items-center p-4 border-b">
        <div className="flex-shrink-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 12h16.5m-14.25 3H21m-6 3h3m-9-6H3m6 6h3m-1.5-15v15"
            />
          </svg>
        </div>
        <div className="ml-4">
          <h3 className="text-lg font-medium">Free Delivery</h3>
          <p className="text-sm text-gray-600">
            Enter your postal code for Delivery Availability
          </p>
        </div>
      </div>

      {/* Return Delivery Section */}
      <div className="flex items-center p-4">
        <div className="flex-shrink-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 9V3.75a.75.75 0 00-1.5 0V9m1.5 0a6.75 6.75 0 11-13.5 0m1.5 0V3.75a.75.75 0 00-1.5 0V9"
            />
          </svg>
        </div>
        <div className="ml-4">
          <h3 className="text-lg font-medium">Return Delivery</h3>
          <p className="text-sm text-gray-600">
            Free 30 Days Delivery Returns.{" "}
            <a href="#" className="text-blue-600">
              Details
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default DeliveryInfo;
