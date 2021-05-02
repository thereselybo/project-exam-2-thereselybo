import { BASE_URL } from "../constants/api";

// TODO: change from resort to some more generic variable name if reusing

export const imageCheck = (resort, imgPlaceholder, altPlaceholder) => {
  const imgUrl = resort.image_url;
  const imgObject = resort.image;
  let fallbackImage;
  let resortImg = imgPlaceholder;
  let resortImgAlt = altPlaceholder;

  if (imgObject) {
    console.log(`${BASE_URL}${resort.image[0].formats.medium.url}`);
    fallbackImage = `${BASE_URL}${resort.image[0].formats.medium.url}`;
  }

  if (imgUrl) {
    resortImg = imgUrl;
    resortImgAlt = `Resort image of ${resort.title}`;
  } else if (imgObject) {
    if (fallbackImage) {
      resortImg = fallbackImage;
      resortImgAlt = `Resort image of ${resort.title}`;
    }
  }

  return { resortImg, resortImgAlt };
};
