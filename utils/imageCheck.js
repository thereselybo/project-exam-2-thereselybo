import { BASE_URL } from "../constants/api";

export const imageCheck = (element, imgPlaceholder, altPlaceholder) => {
  const imgUrl = element.image_url;
  const imgObject = element.image;

  let elementImg = imgPlaceholder;
  let elementImgAlt = altPlaceholder;

  if (imgUrl) {
    elementImg = imgUrl;
    elementImgAlt = `Image of ${element.title}`;
  } else if (imgObject.length) {
    elementImg = `${BASE_URL}${element.image[0].formats.medium.url}`;
    elementImgAlt = `Image of ${element.title}`;
  }

  return { elementImg, elementImgAlt };
};
