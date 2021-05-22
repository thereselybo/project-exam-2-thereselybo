import { useState } from "react";
import Image from "next/image";
import { getMessageDetails } from "../../utils/getMessageDetails";
import { Button, Card, Col, Row, Modal } from "react-bootstrap";
import { X } from "react-bootstrap-icons";

const MessageDisplay = ({ messages }) => {
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
    <>
      <Card className="mb-5 admin-layout-card">
        <Card.Header className="d-none d-lg-block">
          <Row>
            <Col lg={1}></Col>
            <Col lg={2} className="ms-3">
              Guest
            </Col>
            <Col lg={3}>Topic</Col>
            <Col>Message</Col>
          </Row>
        </Card.Header>
        <Card.Body className="d-flex flex-column-reverse">
          {messages.length
            ? messages.map((message, i) => {
                // console.log(console.log(message));
                const messageDetails = getMessageDetails(message);
                return (
                  <Row
                    key={i}
                    className="justify-content-between align-items-center mb-3"
                  >
                    <Col xs={2} lg={1} className="pe-0">
                      {/* <Col> */}
                      {/* <Image
                        // className="position-relative"
                        src={messageDetails.image}
                        alt={messageDetails.imageAlt}
                        // layout="fill"
                        width="80"
                        height="80"
                      /> */}
                      <div
                        className="admin-layout-card-image"
                        style={{
                          // backgroundImage: `url(${messageDetails.image})`,
                          backgroundImage:
                            "url(https://image.freepik.com/free-photo/thoughtful-beautiful-teenage-girl-holds-mobile-phone-sends-text-messages-thinks-what-answer-give-reads-comments-her-post-social-networks-dressed-winter-clothes-isolated-blue-wall_273609-43784.jpg)",
                        }}
                      ></div>
                    </Col>
                    <Col xs={7} className="d-flex d-lg-none flex-column">
                      <Col>{messageDetails.guest}</Col>
                      <Col>{messageDetails.topic}</Col>
                    </Col>
                    <Col className="d-none d-lg-block ms-3" lg={2}>
                      {messageDetails.guest}
                    </Col>
                    <Col className="d-none d-lg-block" lg={3}>
                      {messageDetails.topic}
                    </Col>
                    <Col className="d-none d-lg-block">
                      {messageDetails.shortMessage}
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
            : "No messages"}
        </Card.Body>
      </Card>

      <Modal show={show} onHide={handleClose} className="message-display">
        <Modal.Header>
          <Modal.Title className="fs-3">{modalContent.topic}</Modal.Title>
          <div className="close fs-1 mt-n1" onClick={handleClose}>
            <X />
          </div>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col xs={12}>
              <div className="h6">Guest name</div>
              <p className="fw-light">{modalContent.guest}</p>
            </Col>
            <Col xs={12}>
              <div className="h6">Email address</div>
              <p className="fw-light">{modalContent.email}</p>
            </Col>
            <Col xs={12}>
              <div className="h6">Message</div>
              <p className="fw-light">{modalContent.message}</p>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default MessageDisplay;
