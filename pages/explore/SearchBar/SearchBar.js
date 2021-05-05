import { Card, Form, Row, Col, Button } from "react-bootstrap";
import { Search } from "react-bootstrap-icons";

const SearchBar = () => {
  return (
    <Card>
      <Card.Body>
        <Form>
          <Row>
            <Form.Group as={Col} xs={8} lg={4}>
              <Form.Label>Destination</Form.Label>
              <Form.Control />
            </Form.Group>

            <Form.Group as={Col} xs={4} lg={2}>
              <Form.Label>Guests</Form.Label>
              <Form.Control type="number" />
            </Form.Group>
            {/* </Row>

      <Row className="my-3"> */}
            <Form.Group as={Col} xs={5} lg={2}>
              <Form.Label>Check in</Form.Label>
              <Form.Control type="date" />
            </Form.Group>

            <Form.Group as={Col} xs={5} lg={2}>
              <Form.Label>Check out</Form.Label>
              <Form.Control type="date" />
            </Form.Group>
            {/* </Row> */}

            <Col xs={2} lg={2}>
              <Button
                variant="primary"
                size="lg"
                className="mx-auto mt-3"
                type="submit"
              >
                <span className="d-none d-lg-inline me-2">Search</span>
                <Search />
              </Button>
            </Col>
          </Row>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default SearchBar;
