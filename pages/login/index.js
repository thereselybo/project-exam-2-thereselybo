import Image from "next/image";
import Layout from "../../components/layout/publicLayout/PublicLayout";

import { Row, Col, Container, Form, Button } from "react-bootstrap";
import LoginForm from "../../components/login/LoginForm";

// TODO:
// center align form vertically

const Login = () => {
  return (
    <Layout title="Login">
      <Row className="d-flex flex-md-row justify-content-between horizontal-layout">
        {/* left side content */}
        <Col md={6}>
          <Container className="left-content">
            <h1 className="mt-5">Login</h1>
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
