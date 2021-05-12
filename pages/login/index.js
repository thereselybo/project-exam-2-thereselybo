import Image from "next/image";
import Layout from "../../components/layout/PublicLayout/PublicLayout";

import { Row, Col, Container, Form, Button } from "react-bootstrap";
import LoginForm from "./LoginForm/LoginForm";

// TODO:
// center align form vertically

const Login = () => {
  return (
    <Layout title="Login">
      <Row className="d-flex flex-md-row justify-content-between">
        {/* left side content */}
        <Col md={6}>
          <Container>
            <h1>Login</h1>
            <LoginForm />
          </Container>
        </Col>

        {/* right side content */}
        <Col
          md={6}
          className="d-none d-md-flex h-100 position-fixed end-0 top-0"
        >
          <Image
            src="/images/login.svg"
            alt="Illustration of bungalow"
            layout="fill"
            objectFit="cover"
          />
        </Col>
      </Row>
    </Layout>
  );
};

export default Login;
