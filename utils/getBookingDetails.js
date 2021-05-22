import {
  resortImgAltPlaceholder,
  resortImgPlaceholder,
} from "../constants/placeholders";
import { imageCheck } from "./imageCheck";

export const getBookingDetails = (booking) => {
  // console.log(booking);
  const image = imageCheck(
    booking.resort,
    resortImgAltPlaceholder,
    resortImgPlaceholder
  );

  //   console.log(image);

  const bookingDetails = {
    guest: booking.first_name,
    email: booking.email,
    resort: booking.resort.title,
    image: image.resortImg,
    imageAlt: image.resortImgAlt,
    check_in: booking.check_in,
    check_out: booking.check_out,
    additional_requests: booking.additional_requests,
    guests: booking.guests,
  };
  return bookingDetails;
};
