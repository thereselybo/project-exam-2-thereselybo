import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { validateDestination } from "../../utils/validateDestination";

import { Form, Col, Button, InputGroup } from "react-bootstrap";
import { Typeahead } from "react-bootstrap-typeahead";
import { Search } from "react-bootstrap-icons";

const DestinationSearchMobile = ({ destinations }) => {
  const [singleSelections, setSingleSelections] = useState([]);
  const [invalidDestination, setInvalidDestination] = useState(false);

  const router = useRouter();

  const { handleSubmit } = useForm();

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
    <Form
      noValidate
      onSubmit={handleSubmit(onSubmit)}
      className="mobile-destination-search"
    >
      <InputGroup className="mb-3 d-flex d-md-none w-100">
        <Typeahead
          className="destination-search-input destination-typeahead d-block"
          id="destination-search"
          labelKey="title"
          onChange={onDestinationChange}
          options={destinations}
          placeholder="Where are you going?"
          selected={singleSelections}
          minLength={1}
          value={this}
        />
        <InputGroup.Append>
          <Button variant="primary" type="submit">
            <Search />
          </Button>
        </InputGroup.Append>
        <Col xs={12}>
          {invalidDestination && (
            <p className="text-danger fs-6 m-1">Please select a destination</p>
          )}
        </Col>
      </InputGroup>
    </Form>
  );
};

export default DestinationSearchMobile;
