import {
  userImgAltPlaceholder,
  userImgPlaceholder,
} from "../constants/placeholders";
import { imageCheck } from "./imageCheck";

export const getReviewDetails = (review) => {
  const image = imageCheck(review, userImgPlaceholder, userImgAltPlaceholder);

  const reviewDetails = {
    visitor: review.visitor,
    review: review.review,
    image: image.image,
    imageAlt: image.imageAlt,
    rating: review.rating,
  };
  return reviewDetails;
};
