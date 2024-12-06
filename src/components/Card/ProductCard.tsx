import ProductImage from "./ProductImage";
import ProductInfo from "./ProductInfo";
import StarRating from "./StarRating";
import RenderColors from "./RenderColor";
import Image from "next/image";

export interface IProductShape {
  title: string;
  image: string;
  price?: number;
  originalPrice: number;
  discount?: number | null;
  rating?: number;
  totalReviews?: number;
  deleteBtn?: boolean;
  isNew?: boolean;
  isView?: boolean;
  wishlist?: boolean;
  colors?: { colorName: string; colorCode: string }[];
  key: number;
  slug?: string;
}

const ProductCard = ({
  image,
  title,
  price,
  originalPrice,
  discount,
  rating,
  totalReviews,
  deleteBtn,
  isNew,
  isView,
  wishlist,
  colors = [],
  slug,
}: IProductShape) => {
  const renderBadge = () => {
    if (discount) return `-${discount}%`;
    if (isNew) return "New";
    return undefined;
  };

  const renderIcons = () => {
    const icons = [];
    if (wishlist) {
      icons.push(
        <div
          key="wishlist"
          className="absolute top-2 right-2 bg-white px-2 py-2 rounded-full cursor-pointer"
        >
          <Image
            src="/images/wishlist/heart.png"
            alt="Wishlist Icon"
            width={18}
            height={18}
          />
        </div>
      );
    }
    if (isView) {
      icons.push(
        <div
          key="view"
          className={`absolute ${
            wishlist ? "top-12" : "top-2"
          } right-2 bg-white px-2 py-2 rounded-full cursor-pointer`}
        >
          <Image
            src="/images/wishlist/view.png"
            alt="View Icon"
            width={18}
            height={18}
          />
        </div>
      );
    }
    if (deleteBtn) {
      icons.push(
        <div
          key="delete"
          className="absolute top-2 right-2 bg-white px-2 py-2 rounded-full cursor-pointer"
        >
          <Image
            src="/images/wishlist/delete.png"
            alt="Delete Icon"
            width={18}
            height={18}
          />
        </div>
      );
    }
    return icons;
  };

  return (
    <div className="flex flex-col flex-wrap relative gap-0 mx-auto w-full max-w-[340px] sm:max-w-[280px] md:max-w-[300px] lg:max-w-[320px]">
      <ProductImage
        image={image}
        title={title}
        badge={renderBadge()}
        icons={renderIcons()}
        slug={slug}
      />
      <ProductInfo title={title} price={price} originalPrice={originalPrice} />
      <StarRating rating={rating} totalReviews={totalReviews} />
      <RenderColors colors={colors} />
    </div>
  );
};

export default ProductCard;
