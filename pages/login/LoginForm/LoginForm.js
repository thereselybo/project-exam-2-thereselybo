import { useState, useContext } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import * as yup from "yup";
import { loginSchema } from "../../../schema/loginSchema";
// import AuthContext from "../../../context/AuthContext";
import FormError from "../../../components/misc/FormError";
import Message from "../../../components/misc/Message";
import { BASE_URL, AUTH_ENDPOINT } from "../../../constants/api";

import { Form, Row, Col, Button } from "react-bootstrap";

// const loginSchema = yup.object().shape({
//   identifier: yup.string().required("Please enter your username/email"),
//   password: yup.string().required("Please enter your password"),
// });

const LoginForm = () => {
  const [submitting, setSubmitting] = useState(false);
  const [loginError, setLoginError] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    // errors,
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  // const [, setAuth] = useContext(AuthContext);

  const url = `${BASE_URL}${AUTH_ENDPOINT}`;
  const router = useRouter();

  const onSubmit = async (data) => {
    setSubmitting(true);
    setLoginError(null);

    try {
      const res = await axios.post(url, data);
      if (res.status === 200) {
        // setAuth(res.data);
        console.log("logging in...");
        router.push("/admin");
      }
    } catch (err) {
      setLoginError(err.toString());
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Form noValidate onSubmit={handleSubmit(onSubmit)}>
      <Row className="my-3">
        {loginError && <FormError>{loginError}</FormError>}

        <Form.Group as={Col} xs={12}>
          <Form.Label>Username/email</Form.Label>
          <Form.Control
            name="identifier"
            placeholder="Enter username/email"
            // ref={register}
            {...register("identifier")}
            disabled={submitting}
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
            {...register("password")}
            disabled={submitting}
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
      <Button
        variant="primary"
        size="lg"
        className="mx-auto mt-3"
        type="submit"
        disabled={submitting}
      >
        {submitting ? "Logging in.." : "Login"}
      </Button>
    </Form>
  );
};

export default LoginForm;