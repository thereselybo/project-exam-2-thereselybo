import { useState } from "react";
import axios from "axios";
import Image from "next/image";
import Layout from "../../../components/layout/AdminLayout/AdminLayout";
import { BASE_URL, MESSAGES_ENDPOINT } from "../../../constants/api";
import { getMessageDetails } from "../../../utils/getMessageDetails";
import { Button, Card, Col, Row, Modal } from "react-bootstrap";

import { X } from "react-bootstrap-icons";

// const Bookings = ({ bookings }) => {
const Messages = ({ messages }) => {
  // console.log(bookings);

  const [show, setShow] = useState(false);
  const [modalContent, setModalContent] = useState({});

  const handleClose = () => setShow(false);
  const handleShow = (message) => {
    setModalContent(message);
    // console.log("booking:", booking);
    // console.log("modalContent:", modalContent);
    setShow(true);
  };

  return (
    <Layout title="Messages">
      <div className="d-flex justify-content-between">
        <h1>Messages</h1>
      </div>

      <Card>
        <Card.Header className="d-none d-md-block">
          <Row>
            <Col md={1}></Col>
            <Col md={2}>Guest</Col>
            <Col md={3}>Topic</Col>
            <Col>Message</Col>
          </Row>
        </Card.Header>
        <Card.Body>
          {messages.length
            ? messages.map((message, i) => {
                console.log(console.log(message));
                const messageDetails = getMessageDetails(message);
                return (
                  <Row
                    key={i}
                    className="justify-content-between align-items-center"
                  >
                    <Col xs={2} md={1} className="pe-0">
                      {/* <Col> */}
                      <Image
                        // className="position-relative"
                        src={messageDetails.image}
                        alt={messageDetails.imageAlt}
                        // layout="fill"
                        width="80"
                        height="80"
                      />
                    </Col>
                    <Col xs={7} className="d-flex d-md-none flex-column">
                      <Col>{messageDetails.guest}</Col>
                      <Col>{messageDetails.topic}</Col>
                    </Col>
                    <Col className="d-none d-md-block" md={2}>
                      {messageDetails.guest}
                    </Col>
                    <Col className="d-none d-md-block" md={3}>
                      {messageDetails.topic}
                    </Col>
                    <Col className="d-none d-md-block" md={4}>
                      {messageDetails.message}
                    </Col>
                    <Col className="d-flex align-items-end">
                      <Button
                        className="ms-auto"
                        variant="primary"
                        onClick={() => {
                          handleShow(messageDetails);
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
          <Modal.Title>{modalContent.topic}</Modal.Title>
          <div className="close" onClick={handleClose}>
            <X />
          </div>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col xs={12}>
              <div className="h6">Guest name</div>
              <p>{modalContent.guest}</p>
            </Col>
            <Col xs={12}>
              <div className="h6">Email address</div>
              <p>{modalContent.email}</p>
            </Col>
            <Col xs={12}>
              <div className="h6">Message</div>
              <p>{modalContent.message}</p>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </Layout>
  );
};

export default Messages;

export const getStaticProps = async () => {
  let messages = [];

  const url = `${BASE_URL}${MESSAGES_ENDPOINT}`;

  try {
    const res = await axios.get(url);
    messages = res.data;
  } catch (err) {
    console.log("messages fetch error:", err);
  }

  return {
    props: {
      messages,
    },
  };
};

const something = () => {
  const bookingDetails = getBookingDetails(booking);
  return (
    <Row key={i} className="justify-content-between align-items-center">
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
};
