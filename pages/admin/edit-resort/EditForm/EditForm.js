import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { resortSchema } from "../../../../schema/resortSchema";
import { BASE_URL, RESORTS_ENDPOINT } from "../../../../constants/api";
import { updateResort } from "../../../../utils/updateResort";
import { getResortDetails } from "../../../../utils/getResortDetails";

import FormError from "../../../../components/misc/FormError";
import Message from "../../../../components/misc/Message";

import { Form, Row, Col, Button } from "react-bootstrap";

const EditForm = ({ resort, destinations, facilities }) => {
  const [editing, setEditing] = useState(false);
  const [editError, setEditError] = useState(null);
  const [edited, setEdited] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    // control,
  } = useForm({
    resolver: yupResolver(resortSchema),
  });

  const resortDetails = getResortDetails(resort);
  const featured = resortDetails.featured;
  const url = `${BASE_URL}${RESORTS_ENDPOINT}/${resortDetails.id}`;
  // console.log(resortDetails);

  const onSubmit = async (data) => {
    setEditing(true);
    setEditError(null);
    // console.log("data", data);
    const updatedResort = updateResort(data, destinations, featured);
    // console.log(updatedResort);

    try {
      const res = await axios.put(url, updatedResort);
      console.log(res);
      if (res.status === 200) {
        setEdited(true);
      }
    } catch (err) {
      setEditError(err.toString());
    } finally {
      setEditing(false);
    }
  };

  return (
    <Form noValidate onSubmit={handleSubmit(onSubmit)}>
      <Row className="my-3">
        {editError && <FormError>{editError}</FormError>}
        {edited && (
          <Message
            className="my-2 p-2"
            message="Successfully updated resort"
            variant="success"
          />
        )}

        <Form.Group as={Col} xs={12} md={6}>
          <Form.Label>Resort name</Form.Label>
          <Form.Control
            placeholder="Enter a name for the resort"
            defaultValue={resortDetails.title ? resortDetails.title : ""}
            placeholder="Enter a name for the resort"
            {...register("title")}
            disabled={editing}
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
            defaultValue={
              resortDetails.destination ? resortDetails.destination : ""
            }
            {...register("destination")}
            disabled={editing}
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
            defaultValue={
              resortDetails.introduction ? resortDetails.introduction : ""
            }
            placeholder="Enter a short introduction"
            {...register("introduction")}
            disabled={editing}
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
            defaultValue={
              resortDetails.description ? resortDetails.description : ""
            }
            placeholder="Enter a description"
            {...register("description")}
            disabled={editing}
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
            defaultValue={resortDetails.image ? resortDetails.image : ""}
            placeholder="Enter an image URL"
            {...register("image_url")}
            disabled={editing}
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
          <Form.Control
            defaultValue={resortDetails.price ? resortDetails.price : ""}
            {...register("price")}
            disabled={editing}
          />
        </Form.Group>

        <Form.Group as={Col} xs={6}>
          <Form.Label>Featured</Form.Label>
          {/* <Form.Check
              type="switch"
              id="custom-switch"
              className="form-check-input"
              // label="Check this switch"
            /> */}
          {/* <Form.Check
            type="switch"
            id="custom-switch"
            // label="Check this switch"
          /> */}
          {/* <FormCheck
              id="switchEnabled"
              type="switch"
              checked={true}
              onChange={() => {
                console.log("checking switch");
              }}
              label="Switch"
            /> */}
          <Form.Switch
            id="featured"
            className="custom-control-input"
            defaultChecked={featured}
            // checked={featured}
            // value={featured}
            // onChange={(e) => {
            //   // e.target.checked = !checked;
            //   // e.target.value = !checked;

            //   // console.log(
            //   //   "e.target.checked on click:",
            //   //   e.target.checked
            //   // );
            //   // console.log("checked before:", checked);
            //   console.log(featured);
            //   e.target.checked = !featured;
            //   featured = !featured;
            //   // console.log(
            //   //   "e.target.checked after:",
            //   //   e.target.checked
            //   // );
            //   // console.log("checked after:", checked);
            // }}
            {...register("featured")}
            disabled={editing}
          />
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

      <Col className="mt-3">
        <Button
          variant="primary"
          size="lg"
          className="me-3"
          type="submit"
          disabled={editing}
        >
          Update resort
        </Button>
        <Button variant="danger" size="lg" disabled={editing}>
          Delete resort
        </Button>
      </Col>
    </Form>
  );
};

export default EditForm;

{
  /* <Form.Group as={Col} xs={12}>
  <Form.Label>Facilities</Form.Label>
  <Row>
    {facilities.map((facility, i) => {
      // let checked = resortDetails.facilities.find(
      //   (checkedFacility) => {
      //     console.log(checkedFacility.title === facility.title);
      //     return checkedFacility.title === facility.title;
      //   }
      // );
      // let checked = resortDetails.facilities.forEach(
      //   (checkedFacility) => {
      //     console.log(
      //       "checkedFacility.title:",
      //       checkedFacility.title,
      //       "facility.title:",
      //       facility.title,
      //       checkedFacility.title === facility.title
      //     );
      //     return checkedFacility.title === facility.title;
      //   }
      // );
      let checked = resortDetails.facilities.some((checkedFacility) => {
        // console.log(
        //   "checkedFacility.title:",
        //   checkedFacility.title,
        //   "facility.title:",
        //   facility.title,
        //   checkedFacility.title === facility.title
        // );
        return checkedFacility.title === facility.title;
      });
      console.log(checked);
      return (
        <Col key={i} xs={12} md={6} lg={4}>
          <Form.Check
            type="checkbox"
            label={facility.title}
            defaultChecked={checked}
            // checked={checked}
            // defaultValue={checked}
            onChange={(e) => {
              // e.target.checked = !checked;
              // e.target.value = !checked;

              // console.log(
              //   "e.target.checked on click:",
              //   e.target.checked
              // );
              // console.log("checked before:", checked);
              e.target.checked = !checked;
              checked = !checked;
              // console.log(
              //   "e.target.checked after:",
              //   e.target.checked
              // );
              // console.log("checked after:", checked);
            }}
          />
        </Col>
      );
    })}
  </Row>
</Form.Group> */
}
