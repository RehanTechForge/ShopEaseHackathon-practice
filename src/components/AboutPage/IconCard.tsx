import React from "react";
import Image from "next/image";

interface IconCardProps {
  icon: string; // Path or URL of the icon image
  id: number; // Used to determine the conditional styles
  invert?: boolean; //
}

const IconCard: React.FC<IconCardProps> = ({ icon, id, invert }) => {
  return (
    <div className="bg-[#c0c0c0] p-3 flex justify-center items-center rounded-full">
      <div className="text-4xl bg-button group-hover:bg-text group-hover:text-white p-3 rounded-full">
        <Image
          src={icon}
          alt="Icon"
          height={30}
          width={30}
          className={`${
            id === 2 && invert
              ? "invert group-hover:invert-0"
              : "invert-0 group-hover:invert"
          }`}
        />
      </div>
    </div>
  );
};

export default IconCard;
