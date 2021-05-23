import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { bookingSchema } from "../../../schema/bookingSchema";
import { BASE_URL, BOOKINGS_ENDPOINT } from "../../../constants/api";

import FormError from "../../misc/FormError";
import Message from "../../misc/Message";
import SuperEllipse from "react-superellipse";
import { Col, Row, Form, Button, Modal } from "react-bootstrap";
import { X } from "react-bootstrap-icons";

const BookingForm = ({ show, resortDetails, bookingDetails, handleClose }) => {
  const [booking, setBooking] = useState(false);
  const [bookingError, setBookingError] = useState(null);
  const [booked, setBooked] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(bookingSchema) });

  const url = `${BASE_URL}${BOOKINGS_ENDPOINT}`;

  const onSubmit = async (bookingData) => {
    setBooking(true);
    setBookingError(null);

    bookingData.resort = resortDetails;

    try {
      const res = await axios.post(url, bookingData);
      if (res.status === 200) {
        setBooked(true);
      }
    } catch (err) {
      setBookingError(err.toString());
    } finally {
      setBooking(false);
    }
  };

  return (
    <Modal show={show} onHide={handleClose} className="booking-form">
      <Modal.Header>
        <Modal.Title {...register("resort")} className="fs-3">
          {resortDetails.title}
        </Modal.Title>
        <div className="close fs-1 mt-n1" onClick={handleClose}>
          <X />
        </div>
      </Modal.Header>
      <Modal.Body>
        <Form noValidate onSubmit={handleSubmit(onSubmit)}>
          <Row>
            {bookingError && <FormError>{bookingError}</FormError>}
            {booked && (
              <Message
                className="my-2 p-2"
                message="Thank you for your enquiry"
                variant="success"
              />
            )}

            <Form.Group as={Col} xs={6} className="mb-3">
              <Form.Label>First name</Form.Label>
              <Form.Control
                placeholder="Enter your first name"
                {...register("first_name")}
                disabled={booking}
              />
              {errors.first_name && (
                <Message
                  className="my-2 p-2"
                  message={errors.first_name.message}
                  variant="danger"
                />
              )}
            </Form.Group>

            <Form.Group as={Col} xs={6} className="mb-3">
              <Form.Label>Last name</Form.Label>
              <Form.Control
                placeholder="Enter your last name"
                {...register("last_name")}
                disabled={booking}
              />
              {errors.last_name && (
                <Message
                  className="my-2 p-2"
                  message={errors.last_name.message}
                  variant="danger"
                />
              )}
            </Form.Group>

            <Form.Group as={Col} xs={12} className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email address"
                {...register("email")}
                disabled={booking}
              />
              {errors.email && (
                <Message
                  className="my-2 p-2"
                  message={errors.email.message}
                  variant="danger"
                />
              )}
            </Form.Group>

            <Form.Group as={Col} xs={6} className="mb-3">
              <Form.Label>Check in</Form.Label>
              <Form.Control
                type="date"
                defaultValue={bookingDetails.checkIn}
                {...register("check_in")}
                disabled={booking}
              />
              {errors.check_in && (
                <Message
                  className="my-2 p-2"
                  message={errors.check_in.message}
                  variant="danger"
                />
              )}
            </Form.Group>

            <Form.Group as={Col} xs={6} className="mb-3">
              <Form.Label>Check out</Form.Label>
              <Form.Control
                type="date"
                defaultValue={bookingDetails.checkOut}
                {...register("check_out")}
                disabled={booking}
              />
              {errors.check_out && (
                <Message
                  className="my-2 p-2"
                  message={errors.check_out.message}
                  variant="danger"
                />
              )}
            </Form.Group>

            <Form.Group as={Col} xs={6} className="mb-3">
              <Form.Label>Guests</Form.Label>
              <Form.Control
                type="number"
                defaultValue={bookingDetails.guests}
                {...register("guests")}
                disabled={booking}
              />
              {errors.guests && (
                <Message
                  className="my-2 p-2"
                  message={errors.guests.message}
                  variant="danger"
                />
              )}
            </Form.Group>

            <Form.Group as={Col} xs={12} className="mb-3">
              <Form.Label>Additional requests</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="E.g. no smoking floor"
                {...register("additional_requests")}
                disabled={booking}
              />
            </Form.Group>
          </Row>

          <Col className="d-flex justify-content-center">
            <Button
              variant="primary"
              size="lg"
              className="mx-auto mt-3 w-100"
              disabled={booking}
              onClick={handleSubmit(onSubmit)}
            >
              {booking ? "Booking.." : "Book now"}
            </Button>
          </Col>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default BookingForm;
