import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { validateDestination } from "../../utils/validateDestination";

import { Card, Form, Row, Col, Button } from "react-bootstrap";
import { Search } from "react-bootstrap-icons";
import { Typeahead } from "react-bootstrap-typeahead";

import "react-bootstrap-typeahead/css/Typeahead.css";

const SearchBar = ({ destinations }) => {
  const [singleSelections, setSingleSelections] = useState([]);
  const [invalidDestination, setInvalidDestination] = useState(false);

  const { register, handleSubmit } = useForm();

  const onDestinationChange = (destination) => {
    // console.log(destination);
    setSingleSelections(destination);
    const validatedDestination = validateDestination(destination, destinations);
    // console.log(validatedDestination);

    if (!validatedDestination) {
      setInvalidDestination(true);
    } else {
      setInvalidDestination(false);
    }

    setInvalidDestination(validatedDestination);
  };

  const onSubmit = (formData) => {
    setInvalidDestination(false);

    const destination = singleSelections[0];
    const validatedDestination = validateDestination(destinations, destination);

    // console.log("validatedDestination", validatedDestination);
    formData.destination = validatedDestination;
    // console.log(formData);

    if (!validatedDestination) {
      setInvalidDestination(true);
      // console.log("invalid destination");
      // console.log(invalidDestination);
    } else {
      setInvalidDestination(false);
      // console.log("valid destination, reroute blabla");
      router.push(`/explore/${validatedDestination.slug}`);
    }
  };

  return (
    <Card className="search-bar">
      <Card.Body>
        <Form noValidate onSubmit={handleSubmit(onSubmit)}>
          <Row>
            <Form.Group as={Col} xs={8} lg={4}>
              <Form.Label className="d-md-none">Destination</Form.Label>
              {/* <Form.Control placeholder="Where are you going?" /> */}
              <Typeahead
                id="destination-search"
                labelKey="title"
                onChange={onDestinationChange}
                options={destinations}
                placeholder="Where are you going?"
                selected={singleSelections}
                minLength={1}
                value={this}
              />
              {invalidDestination && (
                <span className="text-danger fs-6 ms-1">
                  Please select a destination
                </span>
              )}
            </Form.Group>

            <Form.Group as={Col} xs={4} lg={2}>
              <Form.Label className="d-md-none">Guests</Form.Label>
              <Form.Control type="number" placeholder="Guests" />
            </Form.Group>

            <Form.Group as={Col} xs={5} lg={2}>
              <Form.Label className="d-md-none">Check in</Form.Label>
              <Form.Control type="date" />
            </Form.Group>

            <Form.Group as={Col} xs={5} lg={2}>
              <Form.Label className="d-md-none">Check out</Form.Label>
              <Form.Control type="date" />
            </Form.Group>

            <Col xs={2} lg={2} id="search-bar-submit">
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
