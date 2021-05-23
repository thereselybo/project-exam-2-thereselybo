import { useState } from "react";
import { getBookingDetails } from "../../utils/getBookingDetails";

import Image from "next/image";
import { Button, Card, Col, Row, Modal } from "react-bootstrap";
import { X } from "react-bootstrap-icons";

const BookingDisplay = ({ bookings }) => {

  const [show, setShow] = useState(false);
  const [modalContent, setModalContent] = useState({});

  const handleClose = () => setShow(false);
  const handleShow = (booking) => {
    setModalContent(booking);
    setShow(true);
  };

  return (
    <>
      <Card className="mb-5 admin-layout-card">
        <Card.Header className="d-none d-lg-block">
          <Row>
            <Col lg={1}></Col>
            <Col lg={3} className="ms-3">
              Resort
            </Col>
            <Col lg={2}>Guest</Col>
            <Col lg={2}>Check in</Col>
            <Col lg={2}>Check out</Col>
          </Row>
        </Card.Header>
        <Card.Body className="d-flex flex-column-reverse">
          {bookings.length
            ? bookings.map((booking, i) => {
                const bookingDetails = getBookingDetails(booking);
                return (
                  <Row
                    key={i}
                    className="justify-content-between align-items-center mb-3"
                  >
                    <Col xs={2} lg={1} className="pe-0">
                      <div
                        className="admin-layout-card-image"
                        style={{
                          backgroundImage: `url(${bookingDetails.image})`,
                        }}
                      ></div>
                    </Col>
                    <Col xs={7} className="d-flex d-lg-none flex-column">
                      <Col>{bookingDetails.resort}</Col>
                      <Col>
                        {bookingDetails.check_in}-{bookingDetails.check_out}
                      </Col>
                    </Col>
                    <Col className="d-none d-lg-block ms-3" lg={3}>
                      {bookingDetails.resort}
                    </Col>
                    <Col className="d-none d-lg-block" lg={2}>
                      {bookingDetails.guest}
                    </Col>
                    <Col className="d-none d-lg-block fw-light">
                      {bookingDetails.check_in}
                    </Col>
                    <Col className="d-none d-lg-block fw-light">
                      {bookingDetails.check_out}
                    </Col>
                    <Col className="d-flex align-items-end">
                      <Button
                        className="ms-auto"
                        variant="primary"
                        onClick={() => {
                          handleShow(bookingDetails);
                        }}
                      >
                        Details
                      </Button>
                    </Col>
                  </Row>
                );
              })
            : "No bookings"}
        </Card.Body>
      </Card>

      <Modal show={show} onHide={handleClose} className="booking-display">
        <Modal.Header>
          <Modal.Title className="fs-3">{modalContent.resort}</Modal.Title>
          <div className="close fs-1 mt-n1" onClick={handleClose}>
            <X />
          </div>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col xs={6}>
              <div className="h6">Guest name</div>
              <p className="fw-light">{modalContent.guest}</p>
            </Col>
            <Col xs={6}>
              <div className="h6">Number of guests</div>
              <p className="fw-light">{modalContent.guests}</p>
            </Col>
            <Col xs={12}>
              <div className="h6">Email address</div>
              <p className="fw-light">{modalContent.email}</p>
            </Col>
            <Col xs={6}>
              <div className="h6">Check in</div>
              <p className="fw-light">{modalContent.check_in}</p>
            </Col>
            <Col xs={6}>
              <div className="h6">Check out</div>
              <p className="fw-light">{modalContent.check_out}</p>
            </Col>
            {modalContent.additional_requests ? (
              <Col xs={12}>
                <div className="h6">Additional requests</div>
                <p className="fw-light">{modalContent.additional_requests}</p>
              </Col>
            ) : (
              ""
            )}
          </Row>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default BookingDisplay;
