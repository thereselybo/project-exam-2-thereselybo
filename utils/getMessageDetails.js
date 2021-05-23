import {
  userImgAltPlaceholder,
  userImgPlaceholder,
} from "../constants/placeholders";

export const getMessageDetails = (message) => {
  const shortMessage =
    message.message.length > 30
      ? `${message.message.substring(0, 30)}...`
      : message.message;

  const messageDetails = {
    guest: message.first_name,
    email: message.email,
    image: userImgPlaceholder,
    imageAlt: userImgAltPlaceholder,
    message: message.message,
    shortMessage: shortMessage,
    topic: message.message_topic.title,
  };
  return messageDetails;
};
