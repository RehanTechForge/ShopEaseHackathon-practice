import React from "react";

interface CategoryCardProps {
  icon: React.ReactNode; // Pass an SVG or icon component
  label: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ icon, label }) => {
  return (
    <div className="flex flex-col items-center justify-center w-48 h-48 border rounded-md shadow-sm hover:shadow-lg transition-shadow hover:bg-secondary2 group cursor-pointer">
      <div className="text-4xl mb-2 group-hover:text-white">{icon}</div>
      <p className="text-sm font-medium text-gray-700 group-hover:text-white">
        {label}
      </p>
    </div>
  );
};

export default CategoryCard;
