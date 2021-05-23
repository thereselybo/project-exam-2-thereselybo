import { useState } from "react";
import { useForm } from "react-hook-form";

import BookingForm from "./BookingForm";
import SuperEllipse from "react-superellipse";
import { Col, Row, Form, Button } from "react-bootstrap";
import { StarFill } from "react-bootstrap-icons";

const ResortBooking = ({ show, handleShow, handleClose, resortDetails }) => {
  const [bookingDetails, setBookingDetails] = useState({});
  const { register, handleSubmit } = useForm();

  const updateModal = (data) => {
    setBookingDetails(data);
    handleShow();
  };

  return (
    <>
      <Col className="h-100 d-flex align-items-center ms-auto resort-booking position-relative">
        <SuperEllipse
          className="my-auto d-none d-md-block p-4 position-absolute start-50 translate-middle"
          r1={0.03}
          r2={0.4}
          style={{
            width: "80%",
            maxWidth: "700px",
            height: "260px",
            background: "hsla(1, 100%, 100%, 0.8)",
            top: "75%",
          }}
        >
          <div className="position-relative">
            <h2>
              {resortDetails.price} NOK
              <span className="fw-light">/night</span>
            </h2>
            <Form onSubmit={handleSubmit(updateModal)}>
              <Row className="my-3">
                <Form.Group as={Col} md={4}>
                  <Form.Label>Check in</Form.Label>
                  <Form.Control type="date" {...register("checkIn")} />
                </Form.Group>

                <Form.Group as={Col} md={4}>
                  <Form.Label>Check out</Form.Label>
                  <Form.Control type="date" {...register("checkOut")} />
                </Form.Group>

                <Form.Group as={Col} md={4}>
                  <Form.Label>Guests</Form.Label>
                  <Form.Control type="number" {...register("guests")} />
                </Form.Group>
              </Row>

              <Col className="d-flex justify-content-center">
                <Button
                  variant="primary"
                  size="lg"
                  className="mx-auto mt-3 px-5"
                  type="submit"
                  onClick={handleSubmit(updateModal)}
                >
                  Book
                </Button>
              </Col>
            </Form>
            {resortDetails.rating && (
              <div className="resort-rating position-absolute py-1 px-3 d-flex align-items-center">
                <span className="align-middle rating-star">
                  <StarFill />
                </span>
                <span className="ps-2 pt-1">{resortDetails.rating}</span>
              </div>
            )}
          </div>
        </SuperEllipse>
      </Col>

      <BookingForm
        show={show}
        resortDetails={resortDetails}
        bookingDetails={bookingDetails}
        handleClose={handleClose}
      />
    </>
  );
};

export default ResortBooking;
