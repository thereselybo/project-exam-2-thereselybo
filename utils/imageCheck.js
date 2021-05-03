import { BASE_URL } from "../constants/api";

// TODO: change from resort to some more generic variable name if reusing

export const imageCheck = (resort, imgPlaceholder, altPlaceholder) => {
  // console.log(resort);
  const imgUrl = resort.image_url;
  const imgObject = resort.image;
  let fallbackImage;
  let resortImg = imgPlaceholder;
  let resortImgAlt = altPlaceholder;

  // if (imgObject.length) {
  //   fallbackImage = `${BASE_URL}${resort.image[0].formats.medium.url}`;
  // }

  if (imgUrl) {
    resortImg = imgUrl;
    resortImgAlt = `Resort image of ${resort.title}`;
  } else if (imgObject.length) {
    // if (fallbackImage) {
      resortImg = `${BASE_URL}${resort.image[0].formats.medium.url}`;
      resortImgAlt = `Resort image of ${resort.title}`;
    // }
  }

  return { resortImg, resortImgAlt };
};
