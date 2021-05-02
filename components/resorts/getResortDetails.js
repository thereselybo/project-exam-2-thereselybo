import {
  resortImgAltPlaceholder,
  resortImgPlaceholder,
} from "../../constants/placeholders";
import { imageCheck } from "../../utils/imageCheck";

export const getResortDetails = (resort) => {
  const description = resort.description_rich
    ? resort.description_rich
    : resort.description;

  const image = imageCheck(
    resort,
    resortImgPlaceholder,
    resortImgAltPlaceholder
  );

  console.log(image);

  const resortDetails = {
    title: resort.title,
    introduction: resort.introduction,
    description,
    image: image.resortImg,
    imageAlt: image.resortImgAlt,
    location: resort.location,
    price: resort.price,
    featured: resort.featured,
    rating: resort.rating,
    id: resort.id,
  };
  return resortDetails;
};
