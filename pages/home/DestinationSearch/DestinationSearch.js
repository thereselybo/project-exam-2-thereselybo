import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { validateDestination } from "../../../utils/validateDestination";
import { destinationSearchSchema } from "../../../schema/destinationSearchSchema";

import { Form, Row, Col, Button } from "react-bootstrap";
import { Typeahead } from "react-bootstrap-typeahead";

const DestinationSearch = ({ destinations }) => {
  const [singleSelections, setSingleSelections] = useState([]);
  const [invalidDestination, setInvalidDestination] = useState(false);

  const router = useRouter();

  const {
    register,
    handleSubmit,
    // formState: { errors },
    // } = useForm(destinationSearchSchema);
  } = useForm();

  const onDestinationChange = (destination) => {
    console.log(destination);
    setSingleSelections(destination);
    // const validatedDestination = validateDestinationField(
    const validatedDestination = validateDestination(destination, destinations);
    console.log(validatedDestination);
    // const destination = singleSelections[0];

    // const validatedDestination = validateDestination(
    //   destinations,
    //   destination
    // );

    if (!validatedDestination) {
      setInvalidDestination(true);
      // console.log("invalid destination");
      // console.log(invalidDestination);
    } else {
      setInvalidDestination(false);
      // console.log("valid destination, proceed to next field blabla");
    }

    setInvalidDestination(validatedDestination);
  };

  const onSubmit = (formData) => {
    // console.log(data);
    setInvalidDestination(false);
    // console.log(validatedDestinationField);
    // data.destination = validatedDestinationField;
    const destination = singleSelections[0];
    const validatedDestination = validateDestination(destinations, destination);

    // setInvalidDestination(!validatedDestinationField);

    console.log("validatedDestination", validatedDestination);
    formData.destination = validatedDestination;
    // data.destination = singleSelections[0];
    console.log(formData);

    // if (!validatedDestinationField) {
    //   setInvalidDestination(true);
    //   console.log(invalidDestination);
    // } else {
    //   console.log("yay");
    //   router.push(`/explore/${validatedDestination.slug}`);
    // }

    if (!validatedDestination) {
      setInvalidDestination(true);
      console.log("invalid destination");
      console.log(invalidDestination);
    } else {
      setInvalidDestination(false);
      console.log("valid destination, reroute blabla");
      router.push(`/explore/${validatedDestination.slug}`);
    }

    // setInvalidDestination(!validatedDestination);

    // console.log("invalidDestination", invalidDestination);

    // if (invalidDestination) {
    // } else {
    //   setInvalidDestination(false);
    // }
  };

  return (
    <Form noValidate onSubmit={handleSubmit(onSubmit)}>
      <Row>
        <Form.Group as={Col} md={8}>
          <Form.Label>Destination</Form.Label>
          {/* <Form.Control /> */}
          <Typeahead
            id="destination-search"
            labelKey="title"
            onChange={onDestinationChange}
            options={destinations}
            placeholder="Find a destination..."
            selected={singleSelections}
            // minLength={3}
            minLength={1}
            value={this}
            // {...register("destination")}
          />
          {/* {errors.destination && ( */}
          {/* {invalidDestination && (
            <div className={styles.invalid}>Please select a destination ✈️</div>
          )} */}
          {invalidDestination && (
            // <div className={styles.invalid}>Please select a destination ✈️</div>
            <span className="text-danger fs-6 ms-1">
              Please select a destination
            </span>
          )}

          {/* {invalidDestination && (
            <Form.Control.Feedback type="invalid">
              "Please choose a destination"
            </Form.Control.Feedback>
          )} */}
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
