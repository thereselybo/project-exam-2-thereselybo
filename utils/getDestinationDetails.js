import {
  destinationImgAltPlaceholder,
  destinationImgPlaceholder,
} from "../constants/placeholders";
import { imageCheck } from "./imageCheck";

// TODO:
// change placeholder names

export const getDestinationDetails = (destination) => {
  // const description = resort.description_rich
  //   ? resort.description_rich
  //   : resort.description;

  const image = imageCheck(
    destination,
    destinationImgPlaceholder,
    destinationImgAltPlaceholder
  );

  //   console.log(image);

  const destinationDetails = {
    title: destination.title,
    image: image.resortImg,
    imageAlt: image.resortImgAlt,
    id: destination.id,
  };
  return destinationDetails;
};
