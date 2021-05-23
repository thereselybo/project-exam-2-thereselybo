import { BASE_URL } from "../constants/api";

export const imageCheck = (element, imgPlaceholder, altPlaceholder) => {
  const imgUrl = element.image_url;
  const imgObject = element.image;

  let image = imgPlaceholder;
  let imageAlt = altPlaceholder;

  if (imgUrl) {
    image = imgUrl;
    imageAlt = `Image of ${element.title}`;
  } else if (imgObject.length) {
    image = `${BASE_URL}${element.image[0].formats.medium.url}`;
    imageAlt = `Image of ${element.title}`;
  }

  return { image, imageAlt };
};
