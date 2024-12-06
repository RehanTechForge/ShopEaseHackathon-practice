import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";

interface StarRatingProps {
  rating?: number;
  totalReviews?: number;
  details?: boolean;
}

const StarRating = ({ rating, totalReviews, details }: StarRatingProps) => {
  const MAX_STARS = 5;

  if (!rating) return null;

  const filledStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  return (
    <div className="flex items-center gap-2 text-lg">
      {Array.from({ length: MAX_STARS }).map((_, index) => {
        if (index < filledStars)
          return (
            <FaStar key={index} className="text-yellow-400 cursor-pointer" />
          );
        if (index === filledStars && hasHalfStar)
          return (
            <FaStarHalfAlt
              key={index}
              className="text-yellow-400 cursor-pointer"
            />
          );
        return (
          <FaRegStar key={index} className="text-gray-300 cursor-pointer" />
        );
      })}
      <span className="ml-2 text-sm text-secondary2 font-poppins">
        {totalReviews && details ? (
          <>
            <span className="text-text2 text-opacity-50">
              ({totalReviews} Reviews) |{" "}
              <span className="text-button1 font-poppins text-sm">
                In Stock
              </span>
            </span>
          </>
        ) : (
          <>({totalReviews})</>
        )}
      </span>
    </div>
  );
};

export default StarRating;
