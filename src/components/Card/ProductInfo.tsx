interface ProductInfoProps {
  title: string;
  price?: number;
  originalPrice: number;
}

const ProductInfo = ({ title, price, originalPrice }: ProductInfoProps) => {
  return (
    <div>
      <h2 className="font-poppins text-base my-2">{title}</h2>
      <p className="font-poppins text-base text-secondary2 flex gap-2">
        {price && <span>${price}</span>}
        {originalPrice && (
          <span
            className={
              price
                ? `text-button line-through text-opacity-50`
                : `text-secondary2`
            }
          >
            ${originalPrice}
          </span>
        )}
      </p>
    </div>
  );
};

export default ProductInfo;
