import { Form, Row, Col, Button } from "react-bootstrap";

const ContactForm = ({ messageTopics }) => {
  return (
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
          <Form.Control as="select" defaultValue="">
            <option disabled value="">
              Choose topic
            </option>
            {messageTopics.map((topic, i) => {
              return <option key={i}>{topic.title}</option>;
            })}
            {/* <option>Choose...</option>
            <option>...</option> */}
          </Form.Control>
        </Form.Group>

        <Form.Group as={Col} xs={12}>
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
      </Row>

      <Button variant="primary" size="lg" className="mx-auto mt-3">
        Send message
      </Button>
    </Form>
  );
};

export default ContactForm;
