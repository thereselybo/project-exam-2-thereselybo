import {
  resortImgAltPlaceholder,
  resortImgPlaceholder,
} from "../constants/placeholders";
import { imageCheck } from "./imageCheck";

export const getResortDetails = (resort) => {
  const description = resort.description_rich
    ? resort.description_rich
    : resort.description;

  const image = imageCheck(
    resort,
    resortImgPlaceholder,
    resortImgAltPlaceholder
  );

  //   console.log(image);

  const resortDetails = {
    title: resort.title,
    introduction: resort.introduction,
    description,
    image: image.resortImg,
    imageAlt: image.resortImgAlt,
    destination: resort.destination.title,
    price: resort.price,
    featured: resort.featured,
    rating: resort.rating,
    // facilities: resort.facilities,
    id: resort.id,
    slug: resort.slug,
  };
  return resortDetails;
};
