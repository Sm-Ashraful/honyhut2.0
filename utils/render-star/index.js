import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { FiStar } from "react-icons/fi";

export function renderStars(numberOfStar) {
  const stars = [];

  // Add full stars
  for (let i = 0; i < Math.floor(numberOfStar); i++) {
    stars.push(<FaStar key={i} />);
  }

  // Add half star if necessary
  if (numberOfStar % 1 !== 0) {
    stars.push(<FaStarHalfAlt key={stars.length} />);
  }

  // Add empty stars
  for (let i = stars.length; i < 5; i++) {
    stars.push(<FiStar key={i} />);
  }

  return stars;
}
