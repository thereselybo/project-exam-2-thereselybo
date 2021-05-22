import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import {
  Col,
  Row,
  Container,
  Card,
  Form,
  Button,
  Modal,
} from "react-bootstrap";
import SuperEllipse from "react-superellipse";
import { SwiperSlide } from "swiper/react";
import Carousel from "../../carousel/Carousel";
import { BASE_URL } from "../../../constants/api";
import { getResortDetails } from "../../../utils/getResortDetails";
import { getReviewDetails } from "../../../utils/getReviewDetails";

import { ArrowLeftCircleFill, StarFill, X } from "react-bootstrap-icons";
import ResortBooking from "../resortBooking/ResortBooking";

const ResortDetail = ({ resort, reviews, facilities }) => {
  const resortDetails = getResortDetails(resort);
  // console.log(reviews);

  // const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  // const handleShow = (e, data) => {
  //   console.dir(e.target);
  //   e.preventDefault();
  //   console.log(data);
  //   setShow(true);
  // };

  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(true);
  };
  const handleClose = () => setShow(false);

  const router = useRouter();

  const goBack = () => {
    router.back();
  };

  return (
    <div className="resort-detail">
      <header
        className="d-md-none resort-image-header resort-image position-relative"
        style={{ backgroundImage: `url(${resortDetails.image})` }}
      >
        {resortDetails.rating && (
          <div className="resort-rating position-absolute py-1 px-3 d-flex align-items-center">
            <span className="align-middle rating-star">
              <StarFill />
            </span>
            <span className="ps-2 pt-1">{resortDetails.rating}</span>
          </div>
        )}

        <ArrowLeftCircleFill
          className="position-fixed back-button"
          role="button"
          onClick={goBack}
        />
      </header>
      <Row className="d-flex flex-md-row justify-content-between horizontal-layout">
        {/* left side content */}
        <Col md={6}>
          <Container className="mb-5 left-content">
            <h1 className="mt-4 mb-3">{resortDetails.title}</h1>
            <Card className="p-2 fw-light mb-3">
              <Card.Body>{resortDetails.description}</Card.Body>
            </Card>

            {facilities.length ? (
              <>
                <h2 className="mt-4 mb-3">Facilities</h2>
                <Row className="d-flex flex-row flex-nowrap facilities">
                  {facilities.map((facility, i) => {
                    return (
                      <SuperEllipse
                        className="ratio ratio-1x1 facility-card mx-2"
                        r1={0.03}
                        r2={0.4}
                        style={{
                          width: "64px",
                          height: "64px",
                          background: "white",
                        }}
                        key={i}
                      >
                        <Card className="px-1 py-2 my-1">
                          <Card.Img
                            src={`${facility.icon_url}`}
                            className="facility-icon"
                          />
                          <Card.Body className="p-0 mt-1">
                            <Card.Text className="text-center facility-text">
                              {facility.title}
                            </Card.Text>
                          </Card.Body>
                        </Card>
                      </SuperEllipse>
                    );
                  })}
                </Row>
              </>
            ) : (
              ""
            )}

            <h2 className="mt-4 mb-3">Location</h2>
            <div className="resort-map"></div>

            {reviews.length ? (
              <>
                <h2 className="mt-4 mb-3">Reviews</h2>

                <Carousel slides={1}>
                  {reviews.map((review, i) => {
                    const reviewDetails = getReviewDetails(review);
                    return (
                      <SwiperSlide key={i} className="h-100">
                        <Card className="review-card h-100">
                          <Col className="d-flex flex-row">
                            <div
                              className="review-visitor-image m-3"
                              style={{
                                backgroundImage: `url(${reviewDetails.image})`,
                              }}
                            ></div>
                            <div className="align-self-center">
                              {reviewDetails.visitor}
                            </div>
                            {/* <div>{reviewDetails.rating}</div> */}
                            <div className="resort-rating py-1 px-3 d-flex align-items-center ms-auto">
                              <span className="align-middle rating-star">
                                <StarFill />
                              </span>
                              <span className="ps-2 pt-1">
                                {reviewDetails.rating}
                              </span>
                            </div>
                          </Col>
                          <Card.Body className="pt-0">
                            {/* <Card.Title>{reviewDetails.visitor}</Card.Title> */}
                            <Card.Text className="fw-light ">
                              {reviewDetails.review}
                            </Card.Text>
                          </Card.Body>
                        </Card>
                      </SwiperSlide>
                    );
                  })}
                </Carousel>
              </>
            ) : (
              ""
            )}

            <Col className="d-md-none my-5">
              <h2>
                {resortDetails.price} NOK
                <span className="fw-light">/night</span>
              </h2>
              <Button
                className="w-100 py-3 mt-2"
                variant="primary"
                size="lg"
                block
                onClick={handleShow}
              >
                Book
              </Button>
            </Col>
          </Container>
        </Col>

        {/* right side content */}
        <Col
          md={6}
          className="d-none d-md-flex h-100 position-fixed end-0 top-0 resort-image"
          style={{ backgroundImage: `url(${resortDetails.image})` }}
        >
          <ResortBooking
            show={show}
            handleShow={handleShow}
            handleClose={handleClose}
            resortDetails={resortDetails}
          />
        </Col>
      </Row>
    </div>
  );
};

export default ResortDetail;
