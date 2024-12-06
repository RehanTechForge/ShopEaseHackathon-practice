import Image from "next/image";
import React, { useState } from "react";

const ProductGallery = () => {
  const images = [
    "/images/detail-page/main.png", // Replace with actual image paths
    "/images/detail-page/one.png",
    "/images/detail-page/two.png",
    "/images/detail-page/three.png",
  ];

  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="flex gap-2">
      {/* Thumbnails */}
      <div className="flex flex-col gap-2">
        {images.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt={`Thumbnail ${index + 1}`}
            className={`w-[240px] h-[144px] object-cover cursor-pointer  bg-secondary p-4 rounded`}
            width={240}
            height={144}
            onClick={() => setSelectedImage(image)}
          />
        ))}
      </div>

      {/* Main Image */}
      <div className="flex items-center justify-center bg-secondary p-4 h-[600px] w-full rounded">
        <Image
          src={selectedImage}
          alt="Selected"
          height={600}
          width={500}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default ProductGallery;
