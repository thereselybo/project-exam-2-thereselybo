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
      {/* <header className={`d-md-none ${styles.resortImage}`}> */}
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
        {/* <Image
          src={resortDetails.image}
          alt={resortDetails.imageAlt}
          layout="fill"
          objectFit="cover"
        /> */}
      </header>
      {/* <HorizontalLayout
        image={resortDetails.image}
        imageAlt={resortDetails.imageAlt}
      > */}
      <Row className="d-flex flex-md-row justify-content-between horizontal-layout">
        {/* left hand content */}
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
                    console.log(facility);
                    return (
                      // <Col xs={2}>
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
                            // src={`${BASE_URL}${facility.icon.url}`}
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
                      // </Col>
                    );
                  })}
                </Row>
              </>
            ) : (
              ""
            )}

            <h2 className="mt-4 mb-3">Location</h2>
            {/* <div className={styles.resortMap}> */}
            <div className="resort-map">
              {/* <Image
                src="https://image.freepik.com/free-vector/colored-city-map-with-park-streets_23-2148318249.jpg"
                alt={`Map with location of ${resortDetails.title}`}
                layout="fill"
                objectFit="cover"
              /> */}
            </div>

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
                          {/* <Card.Img
                            src={reviewDetails.image}
                            alt={reviewDetails.imageAlt}
                            // className="h-50"
                          /> */}
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

                {/* <Row className="d-flex flex-row flex-nowrap overflow-auto">
                  {reviews.map((review, i) => {
                    console.log(review);
                    const reviewDetails = getReviewDetails(review);
                    return (
                      <Card key={i}>
                        <Card.Img
                          src={reviewDetails.image}
                          alt={reviewDetails.imageAlt}
                          // className="h-50"
                        />
                        <Card.Body>
                          <Card.Title>{reviewDetails.visitor}</Card.Title>
                          <Card.Text>{reviewDetails.review}</Card.Text>
                        </Card.Body>
                      </Card>
                    );
                  })}
                </Row> */}
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

        {/* right hand content */}
        <Col
          md={6}
          className="d-none d-md-flex h-100 position-fixed end-0 top-0 resort-image"
          style={{ backgroundImage: `url(${resortDetails.image})` }}
        >
          {/* <Image
            src={resortDetails.image}
            alt={resortDetails.imageAlt}
            layout="fill"
            objectFit="cover"
          /> */}
          <ResortBooking
            show={show}
            handleShow={handleShow}
            handleClose={handleClose}
            resortDetails={resortDetails}
          />
          {/* <Col md={6} className="h-100 d-flex align-items-center ms-auto"> */}
          {/* <Col className="h-100 d-flex align-items-center ms-auto">
            <SuperEllipse
              className="my-auto d-none d-md-block p-4 position-absolute "
              r1={0.03}
              r2={0.4}
              style={{
                width: "80%",
                // height: "55%",
                height: "240px",
                background: "hsla(1, 100%, 100%, 0.8)",
                transform: "translateX(10%)",
                // bottom: "40px",
                bottom: "10%",
              }}
            >
              <h2>
                {resortDetails.price} NOK
                <span className="fw-light">/night</span>
              </h2>
              <Form onSubmit={handleShow}>
                <Row className="my-3">
                  <Form.Group as={Col} md={4}>
                    <Form.Label>Check in</Form.Label>
                    <Form.Control type="date" />
                  </Form.Group>

                  <Form.Group as={Col} md={4}>
                    <Form.Label>Check out</Form.Label>
                    <Form.Control type="date" />
                  </Form.Group>

                  <Form.Group as={Col} md={4}>
                    <Form.Label>Guests</Form.Label>
                    <Form.Control type="number" />
                  </Form.Group>
                </Row>

                <Col className="d-flex justify-content-center">
                  <Button
                    variant="primary"
                    size="lg"
                    className="mx-auto mt-3"
                    type="submit"
                    onClick={handleShow}
                  >
                    Book
                  </Button>
                </Col>
              </Form>
            </SuperEllipse>
          </Col> */}
        </Col>
      </Row>

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
      {/* </HorizontalLayout> */}
    </div>
  );
};
// const ResortDetail = ({ resort, reviews }) => {
//   const resortDetails = getResortDetails(resort);
//   console.log(reviews);

//   return (
//     <>
//       <header className={`d-md-none ${styles.resortImage}`}>
//         <Image
//           src={resortDetails.image}
//           alt={resortDetails.imageAlt}
//           layout="fill"
//           objectFit="cover"
//         />
//       </header>
//       <HorizontalLayout
//         image={resortDetails.image}
//         imageAlt={resortDetails.imageAlt}
//       >
//         <h1>{resortDetails.title}</h1>
//         <Card>
//           <Card.Body>{resortDetails.description}</Card.Body>
//         </Card>

//         {resortDetails.facilities ? (
//           <>
//             <h2>Facilities</h2>
//             <Row className="d-flex flex-row flex-nowrap overflow-auto">
//               {resortDetails.facilities.map((facility, i) => {
//                 console.log(facility);
//                 return (
//                   <SuperEllipse
//                     className="p-5 ratio ratio-1x1"
//                     r1={0.03}
//                     r2={0.4}
//                     style={{
//                       width: "45px",
//                       height: "45px",
//                       background: "white",
//                     }}
//                   >
//                     <Card key={i}>
//                       <Card.Img
//                         src={`${BASE_URL}${facility.icon.url}`}
//                         className="h-50"
//                       />
//                       <Card.Body>
//                         <Card.Text className="text-center">
//                           {facility.title}
//                         </Card.Text>
//                       </Card.Body>
//                     </Card>
//                   </SuperEllipse>
//                 );
//               })}
//             </Row>
//           </>
//         ) : (
//           ""
//         )}

//         <h2>Location</h2>
//         <div className={styles.resortMap}>
//           <Image
//             src="https://image.freepik.com/free-vector/colored-city-map-with-park-streets_23-2148318249.jpg"
//             alt={`Map with location of ${resortDetails.title}`}
//             layout="fill"
//             objectFit="cover"
//           />
//         </div>

//         {reviews ? (
//           <>
//             <h2>Reviews</h2>
//             <Row className="d-flex flex-row flex-nowrap overflow-auto">
//               {reviews.map((review, i) => {
//                 console.log(review);
//                 const reviewDetails = getReviewDetails(review);
//                 return (
//                   <Card key={i}>
//                     <Card.Img
//                       src={reviewDetails.image}
//                       alt={reviewDetails.imageAlt}
//                       // className="h-50"
//                     />
//                     <Card.Body>
//                       <Card.Title>{reviewDetails.visitor}</Card.Title>
//                       <Card.Text>{reviewDetails.review}</Card.Text>
//                     </Card.Body>
//                   </Card>
//                 );
//               })}
//             </Row>
//           </>
//         ) : (
//           ""
//         )}
//       </HorizontalLayout>
//     </>
//   );
// };

export default ResortDetail;
