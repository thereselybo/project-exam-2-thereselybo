import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { validateDestination } from "../../utils/validateDestination";

import { Form, Row, Col, Button } from "react-bootstrap";
import { Typeahead } from "react-bootstrap-typeahead";

const DestinationSearch = ({ destinations }) => {
  const [singleSelections, setSingleSelections] = useState([]);
  const [invalidDestination, setInvalidDestination] = useState(false);

  const router = useRouter();

  const { register, handleSubmit } = useForm();

  const onDestinationChange = (destination) => {
    setSingleSelections(destination);
    const validatedDestination = validateDestination(destination, destinations);

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

    formData.destination = validatedDestination;

    if (!validatedDestination) {
      setInvalidDestination(true);
    } else {
      setInvalidDestination(false);
      router.push(`/explore/${validatedDestination.slug}`);
    }
  };

  return (
    <Form noValidate onSubmit={handleSubmit(onSubmit)}>
      <Row>
        <Form.Group as={Col} md={8}>
          <Form.Label>Destination</Form.Label>
          <Typeahead
            id="destination-search"
            className="destination-search-input"
            labelKey="title"
            onChange={onDestinationChange}
            options={destinations}
            placeholder="Find a destination..."
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

        <Form.Group as={Col} md={4}>
          <Form.Label>Guests</Form.Label>
          <Form.Control type="number" {...register("guests")} />
        </Form.Group>
      </Row>

      <Row className="my-3">
        <Form.Group as={Col} md={6}>
          <Form.Label>Check in</Form.Label>
          <Form.Control type="date" {...register("check_in")} />
        </Form.Group>

        <Form.Group as={Col} md={6}>
          <Form.Label>Check out</Form.Label>
          <Form.Control type="date" {...register("check_out")} />
        </Form.Group>
      </Row>

      <Col className="d-flex justify-content-center">
        <Button
          variant="primary"
          size="lg"
          className="mx-auto mt-3"
          type="submit"
        >
          Search
        </Button>
      </Col>
    </Form>
  );
};

export default DestinationSearch;
