import {
  userImgAltPlaceholder,
  userImgPlaceholder,
} from "../constants/placeholders";
import { imageCheck } from "./imageCheck";

export const getReviewDetails = (review) => {
  const image = imageCheck(review, userImgPlaceholder, userImgAltPlaceholder);

  //   console.log(image);

  const reviewDetails = {
    visitor: review.visitor,
    review: review.review,
    image: image.resortImg,
    imageAlt: image.resortImgAlt,
    rating: review.rating,
  };
  return reviewDetails;
};
