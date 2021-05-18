import * as yup from "yup";

export const destinationSearchSchema = yup.object().shape({
  destination: yup
    .string()
    // .test("test-name", "Please choose a destination", function () {})
    .required("Please choose a destination"),
  guests: yup.number().typeError("Guests must be a number, greater than 0"),
  // .positive("Guests must be greater than 0")
  // .required("Please enter the number of guests"),
  check_in: yup
    // .date()
    .string(),
  // .typeError("Please choose a date for check in")
  // .required(),
  check_out: yup
    // .date()
    .string(),
  // .typeError("Please choose a date for check out")
  // .required(),
});
