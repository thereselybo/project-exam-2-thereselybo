import * as yup from "yup";

export const contactSchema = yup.object().shape({
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
  message_topic: yup.string().required("Please choose a topic"),
  message: yup
    .string()
    .required("Please enter your message")
    .min(10, "Your message must be minimum 10 characters long"),
});
