import {
  destinationImgAltPlaceholder,
  destinationImgPlaceholder,
} from "../constants/placeholders";
import { imageCheck } from "./imageCheck";

export const getDestinationDetails = (destination) => {
  const image = imageCheck(
    destination,
    destinationImgPlaceholder,
    destinationImgAltPlaceholder
  );

  const destinationDetails = {
    title: destination.title,
    image: image.image,
    imageAlt: image.imageAlt,
    id: destination.id,
    slug: destination.slug,
  };
  return destinationDetails;
};
