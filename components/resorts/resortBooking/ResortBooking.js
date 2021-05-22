import { useState } from "react";
import { useForm } from "react-hook-form";
import SuperEllipse from "react-superellipse";

import { Col, Row, Form, Button, Modal } from "react-bootstrap";
import { X, StarFill } from "react-bootstrap-icons";
import BookingForm from "./BookingForm";

const ResortBooking = ({ show, handleShow, handleClose, resortDetails }) => {
  const [bookingDetails, setBookingDetails] = useState({});
  const { register, handleSubmit } = useForm();

  const updateModal = (data) => {
    // e.preventDefault();
    console.log(data);
    setBookingDetails(data);
    handleShow();
  };

  return (
    <>
      <Col className="h-100 d-flex align-items-center ms-auto resort-booking">
        <SuperEllipse
          className="my-auto d-none d-md-block p-4 position-absolute "
          r1={0.03}
          r2={0.4}
          style={{
            width: "80%",
            // height: "55%",
            height: "260px",
            background: "hsla(1, 100%, 100%, 0.8)",
            transform: "translateX(10%)",
            // bottom: "40px",
            bottom: "10%",
          }}
        >
          <div className="position-relative">
            <h2>
              {resortDetails.price} NOK
              <span className="fw-light">/night</span>
            </h2>
            <Form
              //   onSubmit={handleShow}
              onSubmit={handleSubmit(updateModal)}
            >
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
                  // onClick={handleShow}
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
        //   data={data}
      />

      {/* <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>{resortDetails.title}</Modal.Title>
          <div className="close" onClick={handleClose}>
            <X />
          </div>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Row className="my-3">
              <Form.Group as={Col} xs={6}>
                <Form.Label>First name</Form.Label>
                <Form.Control />
              </Form.Group>

              <Form.Group as={Col} xs={6}>
                <Form.Label>Last name</Form.Label>
                <Form.Control />
              </Form.Group>

              <Form.Group as={Col} xs={12}>
                <Form.Label>Email address</Form.Label>
                <Form.Control />
              </Form.Group>

              <Form.Group as={Col} xs={6}>
                <Form.Label>Check in</Form.Label>
                <Form.Control type="date" />
              </Form.Group>

              <Form.Group as={Col} xs={6}>
                <Form.Label>Check out</Form.Label>
                <Form.Control type="date" />
              </Form.Group>

              <Form.Group as={Col} xs={12}>
                <Form.Label>Guests</Form.Label>
                <Form.Control type="number" />
              </Form.Group>

              <Form.Group as={Col} xs={12}>
                <Form.Label>Additional requests</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
            </Row>

            <Col className="d-flex justify-content-center">
              <Button
                variant="primary"
                size="lg"
                className="mx-auto mt-3 w-100"
                onClick={handleClose}
              >
                Book
              </Button>
            </Col>
          </Form>
        </Modal.Body>
      </Modal> */}
    </>
  );
};

export default ResortBooking;
