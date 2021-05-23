import axios from "axios";
import { useState, useContext } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../schema/loginSchema";
import AuthContext from "../../context/AuthContext";
import { BASE_URL, AUTH_ENDPOINT } from "../../constants/api";

import FormError from "../misc/FormError";
import Message from "../misc/Message";
import { Form, Row, Col, Button } from "react-bootstrap";

const LoginForm = () => {
  const [submitting, setSubmitting] = useState(false);
  const [loginError, setLoginError] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const [auth, setAuth] = useContext(AuthContext);

  const url = `${BASE_URL}${AUTH_ENDPOINT}`;
  const router = useRouter();

  const onSubmit = async (data) => {
    setSubmitting(true);
    setLoginError(null);

    try {
      const res = await axios.post(url, data);
      if (res.status === 200) {
        setAuth(res.data);
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

        <Form.Group as={Col} xs={12} className="mb-3">
          <Form.Label>Username/email</Form.Label>
          <Form.Control
            name="identifier"
            placeholder="Enter username/email"
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

        <Form.Group as={Col} xs={12} className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Enter password"
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
        className="mx-auto mt-3 px-4"
        type="submit"
        disabled={submitting}
      >
        {submitting ? "Logging in.." : "Login"}
      </Button>
    </Form>
  );
};

export default LoginForm;
