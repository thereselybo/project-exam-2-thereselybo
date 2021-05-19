import { Card, Form, Row, Col, Button } from "react-bootstrap";
import { Search } from "react-bootstrap-icons";

const SearchBar = () => {
  return (
    <Card className="search-bar">
      <Card.Body>
        <Form>
          <Row>
            <Form.Group as={Col} xs={8} lg={4}>
              <Form.Label className="d-md-none">Destination</Form.Label>
              <Form.Control placeholder="Where are you going?" />
            </Form.Group>

            <Form.Group as={Col} xs={4} lg={2}>
              <Form.Label className="d-md-none">Guests</Form.Label>
              <Form.Control type="number" placeholder="Guests" />
            </Form.Group>
            {/* </Row>

      <Row className="my-3"> */}
            <Form.Group as={Col} xs={5} lg={2}>
              <Form.Label className="d-md-none">Check in</Form.Label>
              <Form.Control type="date" />
            </Form.Group>

            <Form.Group as={Col} xs={5} lg={2}>
              <Form.Label className="d-md-none">Check out</Form.Label>
              <Form.Control type="date" />
            </Form.Group>
            {/* </Row> */}

            {/* <Col xs={2} lg={2} className="align-self-end"> */}
            <Col xs={2} lg={2} className="align-self-end">
              <Button variant="primary" className="w-100" type="submit">
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
