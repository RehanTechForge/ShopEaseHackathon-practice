import Image from "next/image";
import Link from "next/link";
import React from "react";

const PromoSection = () => {
  return (
    <>
      <h3 className="text-xl font-poppins mb-4">Download App</h3>
      <p className="text-xs font-poppins text-text opacity-50">
        Save $3 with App New User Only
      </p>
      <div className="grid grid-cols-2 grid-rows-2 gap-4 mt-4">
        {storeImages.map((image, index) => (
          <div
            key={index}
            className={`flex justify-center items-center ${
              index === 0 ? "row-span-2" : ""
            }`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              height={image.height}
              width={image.width}
              style={{ objectFit: "contain" }}
              className="cursor-pointer"
            />
          </div>
        ))}
      </div>
      <ul className="mt-5 flex gap-4">
        {socialMediaLinks.map((link, index) => (
          <Link
            href={link.href}
            key={index}
            className="flex justify-center items-center"
          >
            <Image
              src={link.src}
              alt={link.alt}
              height={link.height}
              width={link.width}
            />
          </Link>
        ))}
      </ul>
    </>
  );
};
const storeImages = [
  {
    src: "/images/footer/qr-code.png",
    alt: "QR Code",
    height: 80,
    width: 80,
  },
  {
    src: "/images/footer/play-store.png",
    alt: "Play Store",
    height: 40,
    width: 100,
  },
  {
    src: "/images/footer/app-store.png",
    alt: "App Store",
    height: 40,
    width: 100,
  },
];
const socialMediaLinks = [
  {
    src: "/images/footer/facebook.png",
    alt: "Facebook",
    height: 24,
    width: 24,
    href: "http://www.facebook.com",
  },
  {
    src: "/images/footer/twitter.png",
    alt: "Twitter",
    height: 24,
    width: 24,
    href: "http://www.twitter.com",
  },
  {
    src: "/images/footer/instagram.png",
    alt: "Instagram",
    height: 24,
    width: 24,
    href: "http://www.instagram.com",
  },
  {
    src: "/images/footer/linkedin.png",
    alt: "LinkedIn",
    height: 24,
    width: 24,
    href: "http://www.linkedin.com/in/rehantechforge",
  },
];
export default PromoSection;
