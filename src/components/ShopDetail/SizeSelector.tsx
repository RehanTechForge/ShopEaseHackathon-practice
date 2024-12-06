import React, { useState } from "react";

interface SizeSelectorProps {
  sizes: string[]; // Array of size options
}

const SizeSelector: React.FC<SizeSelectorProps> = ({ sizes }) => {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  const handleSizeClick = (size: string = "M") => {
    setSelectedSize(size);
  };

  return (
    <div className="flex gap-4">
      {sizes.map((size) => (
        <button
          key={size}
          onClick={() => handleSizeClick(size)}
          className={`w-10 h-10 border rounded flex items-center justify-center text-sm font-medium ${
            selectedSize === size
              ? "bg-red-600 text-white border-red-600"
              : "bg-white text-black border-gray-400"
          }`}
        >
          {size}
        </button>
      ))}
    </div>
  );
};

export default SizeSelector;
