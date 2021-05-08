import Image from "next/image";
import Layout from "../../components/layout/PublicLayout/PublicLayout";

import { Row, Col, Container, Form, Button } from "react-bootstrap";

const Login = () => {
  return (
    <Layout title="Login">
      <Row className="d-flex flex-md-row justify-content-between">
        {/* left side content */}
        <Col md={6}>
          <Container>
            <h1>Login</h1>
            <Form>
              <Row className="my-3">
                <Form.Group as={Col} xs={12}>
                  <Form.Label>Username/email</Form.Label>
                  <Form.Control />
                </Form.Group>

                <Form.Group as={Col} xs={12}>
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" />
                </Form.Group>
              </Row>

              <Col className="d-flex justify-content-center">
                <Button variant="primary" size="lg" className="mx-auto mt-3">
                  Login
                </Button>
              </Col>
            </Form>
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
