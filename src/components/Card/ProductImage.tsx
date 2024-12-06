import Image from "next/image";
import Link from "next/link";

interface ProductImageProps {
  image: string;
  title: string;
  badge?: string;
  icons?: JSX.Element[];
  slug?: string;
}

const ProductImage = ({
  image,
  title,
  badge,
  icons,
  slug,
}: ProductImageProps) => {
  return (
    <div className="relative w-full h-[270px] flex items-center justify-center bg-secondary">
      <Link href={`/shop/${slug}`}>
        <Image
          src={image}
          alt={`${title} Image`}
          width={190}
          height={180}
          className="rounded-lg mx-auto my-8 duration-500 cursor-pointer"
        />
      </Link>
      {badge && (
        <div
          className={`absolute top-2 left-2 ${
            badge === "New" ? "bg-button1" : "bg-secondary2"
          }  text-white px-3 py-1 rounded text-xs font-poppins`}
        >
          {badge}
        </div>
      )}
      {icons && icons.map((icon, index) => <div key={index}>{icon}</div>)}
      <Link
        href={"/cart"}
        className="flex gap-2 bg-black text-white w-full justify-center py-2 absolute bottom-0 left-0 rounded-b font-poppins text-xs"
      >
        <Image
          src="/images/wishlist/Cart.png"
          alt="Cart Icon"
          height={24}
          width={24}
        />
        Add To Cart
      </Link>
    </div>
  );
};

export default ProductImage;
