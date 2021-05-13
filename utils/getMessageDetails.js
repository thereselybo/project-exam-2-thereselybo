import {
  userImgAltPlaceholder,
  userImgPlaceholder,
} from "../constants/placeholders";
import { imageCheck } from "./imageCheck";

export const getMessageDetails = (message) => {
  // const image = imageCheck(message, userImgPlaceholder, userImgAltPlaceholder);

  //   console.log(image);

  // const topic = message.message_topic
  //   ? message.message_topic
  //   : message.message_topic.title;

  let topic;
  // let topic = "No topic";

  if (message.message_topic) {
    if (message.message_topic.length) {
      // topic = message.message_topic.title;
      console.log(message.message_topic.title);
      topic = "message.message_topic.title;";
    } else {
      console.log(message.message_topic);
      // topic = message.message_topic;
      topic = "message.message_topic";
    }
  } else {
    topic = "No topic";
  }

  const messageDetails = {
    guest: message.first_name,
    email: message.email,
    // image: image.resortImg,
    // imageAlt: image.resortImgAlt,
    image: userImgPlaceholder,
    imageAlt: userImgAltPlaceholder,
    message: message.message,
    topic: topic,
  };
  return messageDetails;
};
