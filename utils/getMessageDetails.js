import {
  userImgAltPlaceholder,
  userImgPlaceholder,
} from "../constants/placeholders";
import { imageCheck } from "./imageCheck";

export const getMessageDetails = (message) => {
  // const image = imageCheck(message, userImgPlaceholder, userImgAltPlaceholder);

  //   console.log(image);

  const messageDetails = {
    guest: message.first_name,
    email: message.email,
    // image: image.resortImg,
    // imageAlt: image.resortImgAlt,
    image: userImgPlaceholder,
    imageAlt: userImgAltPlaceholder,
    message: message.message,
    topic: message.message_topic.title,
  };
  return messageDetails;
};
