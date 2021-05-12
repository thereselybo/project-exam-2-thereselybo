import { Form, Row, Col, Button } from "react-bootstrap";

const AddResortForm = ({ facilities, destinations }) => {
  return (
    <Form>
      <Row className="my-3">
        <Form.Group as={Col} xs={12} md={6}>
          <Form.Label>Resort name</Form.Label>
          <Form.Control />
        </Form.Group>

        <Form.Group as={Col} xs={12} md={6}>
          <Form.Label>Location</Form.Label>
          <Form.Control as="select" defaultValue="">
            <option disabled value="">
              Choose location
            </option>
            {destinations.map((destination, i) => {
              return <option key={i}>{destination.title}</option>;
            })}
            {/* <option>...</option> */}
          </Form.Control>
        </Form.Group>

        <Form.Group as={Col} xs={12}>
          <Form.Label>Introduction</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>

        <Form.Group as={Col} xs={12}>
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>

        <Form.Group as={Col} xs={12}>
          <Form.Label>Image URL</Form.Label>
          <Form.Control />
        </Form.Group>

        <Form.Group as={Col} xs={12}>
          <Form.Label>Facilities</Form.Label>
          <Row>
            {facilities.map((facility, i) => {
              return (
                <Col key={i} xs={12} md={6} lg={4}>
                  <Form.Check type="checkbox" label={facility.title} />
                </Col>
              );
            })}
          </Row>
        </Form.Group>

        <Form.Group as={Col} xs={6}>
          <Form.Label>Price per night</Form.Label>
          <Form.Control />
        </Form.Group>

        <Form.Group as={Col} xs={6}>
          <Form.Label>Featured</Form.Label>
          {/* <Form.Check
              type="switch"
              id="custom-switch"
              className="form-check-input"
              // label="Check this switch"
            /> */}
          <Form.Switch id="featured" className="custom-control-input" />
        </Form.Group>

        {/* <div class="form-check form-switch">
            <input
              class="form-check-input"
              type="checkbox"
              id="flexSwitchCheckDefault"
            />
            <label class="form-check-label" for="flexSwitchCheckDefault">
              Default switch checkbox input
            </label>
          </div> */}
      </Row>

      <Button variant="primary" size="lg" type="submit">
        Create resort
      </Button>
    </Form>
  );
};

export default AddResortForm;
