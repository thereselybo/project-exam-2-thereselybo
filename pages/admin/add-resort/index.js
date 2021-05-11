import axios from "axios";
import Layout from "../../../components/layout/AdminLayout/AdminLayout";
import {
  BASE_URL,
  DESTINATIONS_ENDPOINT,
  FACILITIES_ENDPOINT,
} from "../../../constants/api";
import { Form, Row, Col, Button } from "react-bootstrap";

const AddResort = ({ facilities, destinations }) => {
  console.log(destinations);
  return (
    <Layout title="Add resort">
      <h1>Add resort</h1>
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

        <Col className="d-flex justify-content-center">
          <Button variant="primary" size="lg" className="mx-auto mt-3">
            Send message
          </Button>
        </Col>
      </Form>
    </Layout>
  );
};

export default AddResort;

export const getStaticProps = async () => {
  let facilities = [];
  let destinations = [];

  const facilitiesUrl = `${BASE_URL}${FACILITIES_ENDPOINT}`;
  const destinationsUrl = `${BASE_URL}${DESTINATIONS_ENDPOINT}`;

  try {
    const facilitiesRes = await axios.get(facilitiesUrl);
    const destinationsRes = await axios.get(destinationsUrl);
    facilities = facilitiesRes.data;
    destinations = destinationsRes.data;
  } catch (err) {
    console.log("fetch error:", err);
  }

  return {
    props: {
      facilities,
      destinations,
    },
  };
};
