import { useState } from "react";
import Image from "next/image";
import { getBookingDetails } from "../../../../utils/getBookingDetails";
import { Button, Card, Col, Row, Modal } from "react-bootstrap";

import { X } from "react-bootstrap-icons";

const BookingDisplay = ({ bookings }) => {
  //   const handleClose = () => setShow(false);

  const [show, setShow] = useState(false);
  const [modalContent, setModalContent] = useState({});

  const handleClose = () => setShow(false);
  const handleShow = (booking) => {
    setModalContent(booking);
    // console.log("booking:", booking);
    // console.log("modalContent:", modalContent);
    setShow(true);
  };

  return (
    <>
      <Card>
        <Card.Header className="d-none d-md-block">
          <Row>
            <Col md={1}></Col>
            <Col md={3}>Resort</Col>
            <Col md={2}>Guest</Col>
            <Col md={2}>Check in</Col>
            <Col md={2}>Check out</Col>
          </Row>
        </Card.Header>
        <Card.Body>
          {bookings.length
            ? bookings.map((booking, i) => {
                // console.log(booking);
                const bookingDetails = getBookingDetails(booking);
                return (
                  <Row
                    key={i}
                    className="justify-content-between align-items-center"
                  >
                    <Col xs={2} md={1} className="pe-0">
                      {/* <Col> */}
                      <Image
                        // className="position-relative"
                        src={bookingDetails.image}
                        alt={bookingDetails.imageAlt}
                        // layout="fill"
                        width="80"
                        height="80"
                      />
                    </Col>
                    <Col xs={7} className="d-flex d-md-none flex-column">
                      <Col>{bookingDetails.resort}</Col>
                      <Col>
                        {bookingDetails.check_in}-{bookingDetails.check_out}
                      </Col>
                    </Col>
                    <Col className="d-none d-md-block" md={3}>
                      {bookingDetails.resort}
                    </Col>
                    <Col className="d-none d-md-block" md={2}>
                      {bookingDetails.guest}
                    </Col>
                    <Col className="d-none d-md-block" md={2}>
                      {bookingDetails.check_in}
                    </Col>
                    <Col className="d-none d-md-block" md={2}>
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
            : "No resorts"}
        </Card.Body>
      </Card>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>{modalContent.resort}</Modal.Title>
          <div className="close" onClick={handleClose}>
            <X />
          </div>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col xs={6}>
              <div className="h6">Guest name</div>
              <p>{modalContent.guest}</p>
            </Col>
            <Col xs={6}>
              <div className="h6">Number of guests</div>
              <p>{modalContent.guests}</p>
            </Col>
            <Col xs={12}>
              <div className="h6">Email address</div>
              <p>{modalContent.email}</p>
            </Col>
            <Col xs={6}>
              <div className="h6">Check in</div>
              <p>{modalContent.check_in}</p>
            </Col>
            <Col xs={6}>
              <div className="h6">Check out</div>
              <p>{modalContent.check_out}</p>
            </Col>
            {modalContent.additional_requests ? (
              <Col xs={12}>
                <div className="h6">Additional requests</div>
                <p>{modalContent.additional_requests}</p>
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