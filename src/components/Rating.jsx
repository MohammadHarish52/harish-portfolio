import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";

// StarRating Component
const Rating = ({ rating, outOf = 5 }) => {
  const stars = [];

  for (let i = 1; i <= outOf; i++) {
    if (i <= rating) {
      stars.push(<FaStar key={i} color={"#868788"} size={24} />);
    } else {
      stars.push(<FaRegStar key={i} size={24} color={"#868788"} />);
    }
  }

  return <div className="flex">{stars}</div>;
};

export default Rating;
