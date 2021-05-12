import { Form, Row, Col, Button } from "react-bootstrap";

const LoginForm = () => {
  return (
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
  );
};

export default LoginForm;
