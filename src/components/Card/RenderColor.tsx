"use client";
import { useState } from "react";

// Define the types for the props
interface ColorProps {
  colors: { colorName: string; colorCode: string }[]; // Array of color variants
}

const RenderColors = ({ colors }: ColorProps) => {
  const [selectedColor, setSelectedColor] = useState<string | null>(null);

  if (!colors.length) return null;

  return (
    <div className="flex gap-2">
      {colors.map(({ colorName, colorCode }, index) => (
        <div
          key={index}
          className={`w-4 h-4 rounded-full cursor-pointer border-2 p-2 ${
            selectedColor === colorCode
              ? "border-black bg-white"
              : "border-gray-300"
          } hover:border-black`}
          style={{ backgroundColor: colorCode }}
          title={colorName}
          onClick={() => setSelectedColor(colorCode)}
        ></div>
      ))}
    </div>
  );
};

export default RenderColors;
