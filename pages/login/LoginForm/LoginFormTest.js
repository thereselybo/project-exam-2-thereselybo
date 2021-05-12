import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import FormError from "../../../components/misc/FormError";
import Message from "../../../components/misc/Message";

import { Form, Row, Col, Button } from "react-bootstrap";

// const schema = yup.object().shape({
//   name: yup.string().required("Please enter your name"),
//   email: yup
//     .string()
//     .required("Please enter an email address")
//     .email("Please enter a valid email address"),
//   message: yup
//     .string()
//     .required("Please enter your message")
//     .min(10, "The message must be at least 10 characters"),
// });

const loginSchema = yup.object().shape({
  identifier: yup.string().required("Please enter your username/email"),
  password: yup.string().required("Please enter your password"),
});

const LoginFormTest = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    // errors,
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  function onSubmit(data) {
    console.log(data);
  }

  console.log(errors);

  return (
    // <form onSubmit={handleSubmit(onSubmit)}>
    //   <input {...register("name")} />
    //   {errors.name && <span>{errors.name.message}</span>}

    //   <input {...register("email")} />
    //   {errors.email && <span>{errors.email.message}</span>}

    //   <textarea {...register("message")} />
    //   {errors.message && <span>{errors.message.message}</span>}

    //   <button>Send</button>
    // </form>

    <Form noValidate onSubmit={handleSubmit(onSubmit)}>
      <Row className="my-3">
        {/* {loginError && <FormError>{loginError}</FormError>} */}

        <Form.Group as={Col} xs={12}>
          <Form.Label>Username/email</Form.Label>
          <Form.Control
            name="identifier"
            placeholder="Enter username/email"
            ref={register}
            // {...register("identifier")}
            // disabled={submitting}
          />
          {errors.identifier && (
            <Message
              className="my-2 p-2"
              message={errors.identifier.message}
              variant="danger"
            />
          )}
        </Form.Group>

        <Form.Group as={Col} xs={12}>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Enter password"
            // ref={register}
            {...register("identifier")}
            // disabled={submitting}
          />
          {errors.password && (
            <Message
              className="my-2 p-2"
              message={errors.password.message}
              variant="danger"
            />
          )}
        </Form.Group>
      </Row>

      <Col className="d-flex justify-content-center">
        <Button
          variant="primary"
          size="lg"
          className="mx-auto mt-3"
          type="submit"
          // disabled={submitting}
        >
          {/* {submitting ? "Logging in.." : "Login"} */}
          Login
        </Button>
      </Col>
    </Form>
  );
};

export default LoginFormTest;
