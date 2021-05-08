import Layout from "../../components/layout/PublicLayout/PublicLayout";
import Image from "next/image";

import { Row, Col, Container, Form, Button } from "react-bootstrap";

const Contact = () => {
  return (
    <Layout title="Contact">
      <Row className="d-flex flex-md-row justify-content-between">
        {/* left side content */}
        <Col md={6}>
          <Container>
            <h1>Contact</h1>
            <Form>
              <Row className="my-3">
                <Form.Group as={Col} xs={6}>
                  <Form.Label>First name</Form.Label>
                  <Form.Control />
                </Form.Group>

                <Form.Group as={Col} xs={6}>
                  <Form.Label>Last name</Form.Label>
                  <Form.Control />
                </Form.Group>

                <Form.Group as={Col} xs={12}>
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" />
                </Form.Group>

                <Form.Group as={Col} xs={12}>
                  <Form.Label>Topic</Form.Label>
                  <Form.Control as="select" defaultValue="Choose...">
                    <option>Choose...</option>
                    <option>...</option>
                  </Form.Control>
                </Form.Group>

                <Form.Group as={Col} xs={12}>
                  <Form.Label>Message</Form.Label>
                  <Form.Control as="textarea" rows={3} />
                </Form.Group>
              </Row>

              <Col className="d-flex justify-content-center">
                <Button variant="primary" size="lg" className="mx-auto mt-3">
                  Send message
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
            src="/images/contact.svg"
            alt="Illustration of a laptop in front of tropical scenery"
            layout="fill"
            objectFit="cover"
          />
        </Col>
      </Row>
    </Layout>
  );
};

export default Contact;
