import * as yup from "yup";

export const destinationSearchSchema = yup.object().shape({
  destination: yup
    .string()
    .required("Please choose a destination"),
  guests: yup.number().typeError("Guests must be a number, greater than 0"),
  check_in: yup
    .string(),
  check_out: yup
    .string(),
});
