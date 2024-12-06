import React from "react";

interface SupportSectionProps {
  title: string;
  items: { text: string; link?: string }[];
}

const SupportSection: React.FC<SupportSectionProps> = ({ title, items }) => {
  return (
    <div>
      <h3 className="text-xl font-poppins mb-4">{title}</h3>
      <ul className="flex flex-col gap-2">
        {items.map((item, index) => (
          <li key={index} className="font-poppins text-base">
            {item.link ? (
              <a
                href={item.link}
                className="text-blue-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.text}
              </a>
            ) : (
              item.text
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SupportSection;
