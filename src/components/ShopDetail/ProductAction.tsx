import React, { useState } from "react";
import { AiOutlineHeart } from "react-icons/ai"; // React Icons for the heart icon

const ProductActions = () => {
  const [quantity, setQuantity] = useState(1);

  const increment = () => setQuantity((prev) => prev + 1);
  const decrement = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <div className="flex items-center gap-4 justify-between mt-5 mb-10">
      {/* Quantity Selector */}
      <div className="flex items-center border rounded">
        <button
          onClick={decrement}
          className="px-6 py-2 bg-white text-black border-r"
        >
          -
        </button>
        <div className="px-10 py-2 bg-white text-black">{quantity}</div>
        <button
          onClick={increment}
          className="px-6 py-2 bg-red-600 text-white border-l rounded-r"
        >
          +
        </button>
      </div>

      {/* Buy Now Button */}
      <button className="px-10 py-2 bg-red-600 text-white rounded font-medium">
        Buy Now
      </button>

      {/* Favorite Icon */}
      <button className="px-4 py-2 border rounded">
        <AiOutlineHeart size={20} />
      </button>
    </div>
  );
};

export default ProductActions;
