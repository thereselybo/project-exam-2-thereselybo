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
import DeleteButton from "../../../../components/resorts/DeleteButton/DeleteButton";
import SuperEllipse from "react-superellipse";
// import BootstrapSwitchButton from "bootstrap-switch-button-react";
import Switch from "../../../../components/misc/Switch";

const EditForm = ({ resort, destinations, facilities }) => {
  const [editing, setEditing] = useState(false);
  const [editError, setEditError] = useState(null);
  const [edited, setEdited] = useState(false);
  const [featured, setFeatured] = useState(resortDetails.featured);

  const {
    register,
    handleSubmit,
    formState: { errors },
    // control,
  } = useForm({
    resolver: yupResolver(resortSchema),
  });

  const resortDetails = getResortDetails(resort);
  // const featured = resortDetails.featured;
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
    <Form
      noValidate
      onSubmit={handleSubmit(onSubmit)}
      className="admin-form mb-4"
    >
      <Row className="my-3">
        {editError && <FormError>{editError}</FormError>}
        {edited && (
          <Message
            className="my-2 p-2"
            message="Successfully updated resort"
            variant="success"
          />
        )}

        <Form.Group as={Col} xs={12} md={6} className="mb-3">
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

        <Form.Group as={Col} xs={12} md={6} className="mb-3">
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

        <Form.Group as={Col} xs={12} className="mb-3">
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

        <Form.Group as={Col} xs={12} className="mb-3">
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

        <Form.Group as={Col} xs={12} className="mb-3">
          <Form.Label>Image URL</Form.Label>
          <SuperEllipse
            className="mx-0 mb-3 super-ellipse resort-image-wrapper"
            r1={0.03}
            r2={0.4}
            style={{
              height: "180px",
              width: "320px",
              background: "white",
            }}
          >
            <div
              className="resort-image"
              style={{
                backgroundImage: `url(${
                  resortDetails.image
                    ? resortDetails.image
                    : "https://image.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg"
                })`,
              }}
            ></div>
          </SuperEllipse>
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

        <Form.Group as={Col} xs={6} className="mb-3">
          <Form.Label>Price per night</Form.Label>
          <Form.Control
            defaultValue={resortDetails.price ? resortDetails.price : ""}
            {...register("price")}
            disabled={editing}
          />
        </Form.Group>

        <Form.Group as={Col} xs={6} className="mb-3">
          <Form.Label>Featured</Form.Label>
          <div>
            <Switch
              checked={featured}
              onChange={() => {
                setFeatured(!featured);
              }}
            />
          </div>
        </Form.Group>
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
        <DeleteButton
          id={resortDetails.id}
          title={resortDetails.title}
          size="lg"
          content="Delete resort"
          editing={editing}
        />
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
