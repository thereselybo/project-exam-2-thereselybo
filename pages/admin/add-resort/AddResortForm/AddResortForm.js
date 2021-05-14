import axios from "axios";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { resortSchema } from "../../../../schema/resortSchema";
import { BASE_URL, RESORTS_ENDPOINT } from "../../../../constants/api";
import { updateResort } from "../../../../utils/updateResort";

import FormError from "../../../../components/misc/FormError";
import Message from "../../../../components/misc/Message";

import { Form, Row, Col, Button } from "react-bootstrap";

const AddResortForm = ({ facilities, destinations }) => {
  const [adding, setAdding] = useState(false);
  const [addError, setAddError] = useState(null);
  const [added, setAdded] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    // control,
  } = useForm({
    resolver: yupResolver(resortSchema),
  });

  const url = `${BASE_URL}${RESORTS_ENDPOINT}`;

  const onSubmit = async (data) => {
    setAdding(true);
    setAddError(null);
    // console.log("data", data);
    const updatedResort = updateResort(data, destinations);
    // console.log(updatedResort);

    try {
      // console.log(updatedResort);
      const res = await axios.post(url, updatedResort);
      if (res.status === 200) {
        // console.log(res);
        setAdded(true);
      }
    } catch (err) {
      setAddError(err.toString());
    } finally {
      setAdding(false);
    }
  };

  return (
    <Form noValidate onSubmit={handleSubmit(onSubmit)}>
      <Row className="my-3">
        {addError && <FormError>{addError}</FormError>}
        {added && (
          <Message
            className="my-2 p-2"
            message="Successfully created new resort"
            variant="success"
          />
        )}

        <Form.Group as={Col} xs={6}>
          <Form.Label>Resort name</Form.Label>
          <Form.Control
            placeholder="Enter a name for the resort"
            {...register("title")}
            disabled={adding}
          />
          {errors.title && (
            <Message
              className="my-2 p-2"
              message={errors.title.message}
              variant="danger"
            />
          )}
        </Form.Group>

        <Form.Group as={Col} xs={12} md={6}>
          <Form.Label>Location</Form.Label>
          <Form.Control
            as="select"
            defaultValue=""
            {...register("destination")}
            disabled={adding}
          >
            <option disabled value="">
              Choose location
            </option>
            {destinations.map((destination, i) => {
              return <option key={i}>{destination.title}</option>;
            })}
          </Form.Control>
          {errors.destination && (
            <Message
              className="my-2 p-2"
              message={errors.destination.message}
              variant="danger"
            />
          )}
        </Form.Group>

        <Form.Group as={Col} xs={12}>
          <Form.Label>Introduction</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter a short introduction"
            {...register("introduction")}
            disabled={adding}
          />
          {errors.introduction && (
            <Message
              className="my-2 p-2"
              message={errors.introduction.message}
              variant="danger"
            />
          )}
        </Form.Group>

        <Form.Group as={Col} xs={12}>
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter a description"
            {...register("description")}
            disabled={adding}
          />
          {errors.description && (
            <Message
              className="my-2 p-2"
              message={errors.description.message}
              variant="danger"
            />
          )}
        </Form.Group>

        <Form.Group as={Col} xs={12}>
          <Form.Label>Image URL</Form.Label>
          <Form.Control
            placeholder="Enter an image URL"
            {...register("image_url")}
            disabled={adding}
          />
          {errors.image_url && (
            <Message
              className="my-2 p-2"
              message={errors.image_url.message}
              variant="danger"
            />
          )}
        </Form.Group>

        <Form.Group as={Col} xs={6}>
          <Form.Label>Price per night</Form.Label>
          <Form.Control {...register("price")} disabled={adding} />
          {errors.price && (
            <Message
              className="my-2 p-2"
              message={errors.price.message}
              variant="danger"
            />
          )}
        </Form.Group>

        <Form.Group as={Col} xs={6}>
          <Form.Label>Featured</Form.Label>
          {/* <Form.Check
            type="switch"
            id="custom-switch"
            className="form-check-input"
            // label="Check this switch"
            // {...register("featured")} disabled={adding}
          /> */}
          <Form.Switch
            id="featured"
            className="custom-control-input"
            {...register("featured")}
            disabled={adding}
          />
        </Form.Group>

        {/* <div class="form-check form-switch">
          <input
            class="form-check-input"
            type="checkbox"
            id="flexSwitchCheckDefault"
            {...register("featured")} disabled={adding}
          />
          <label class="form-check-label" for="flexSwitchCheckDefault">
            Default switch checkbox input
          </label>
        </div> */}
      </Row>

      <Button variant="primary" size="lg" disabled={adding} type="submit">
        {adding ? "Creating resort.." : "Create resort"}
      </Button>
    </Form>
  );
};

export default AddResortForm;

// <Form.Group as={Col} xs={12}>
//   <Form.Label>Facilities</Form.Label>
//   <Row>
//     {facilities.map((facility, i) => {
//       return (
//         <Col key={i} xs={12} md={6} lg={4}>
//           {/* <Form.Check
//             type="checkbox"
//             label={facility.title}
//             value={facility.title}
//             {...register("facilities")}
//             disabled={adding}
//           /> */}
//           <Controller
//             name="facilities"
//             {...register("facilities")}
//             control={control}
//             // defaultValue={false}
//             // rules={{ required: true }}
//             onChange={(e) => {
//               e.target.checked ? e.target.value : "";
//             }}
//             render={({ field }) => (
//               <Form.Check
//                 {...field}
//                 label={facility.title}
//                 value={facility.title}
//               />
//             )}
//           />
//         </Col>
//       );
//     })}
//   </Row>
// </Form.Group>
