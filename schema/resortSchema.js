import * as yup from "yup";

export const resortSchema = yup.object().shape({
  title: yup.string().required("Please enter a name for the resort"),
  destination: yup.string().required("Please choose a location"),
  introduction: yup
    .string()
    .required("Please enter an introduction")
    .max(100, "Your introduction must be 100 characters or less"),
  description: yup.string().required("Please enter a description"),
  image_url: yup.string().required("Please enter an image URL"),
  price: yup
    .number()
    .typeError("Price must be a number, greater than 0")
    .positive("Price must be greater than 0")
    .required("Please enter a price"),
});
