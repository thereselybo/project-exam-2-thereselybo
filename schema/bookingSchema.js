import * as yup from "yup";

export const bookingSchema = yup.object().shape({
  first_name: yup
    .string()
    .required("Please enter your first name")
    .min(3, "First name must be minimum 3 characters long"),
  last_name: yup
    .string()
    .required("Please enter your last name")
    .min(4, "Last name must be minimum 4 characters long"),
  email: yup
    .string()
    .email("Please enter a valid email address")
    .required("Please enter your email"),
  guests: yup
    .number()
    .typeError("Guests must be a number, greater than 0")
    .positive("Guests must be greater than 0")
    .required("Please enter the number of guests"),
  check_in: yup
    .string()
    .typeError("Please choose a date for check in")
    .required(),
  check_out: yup
    .string()
    .typeError("Please choose a date for check out")
    .required(),
});
