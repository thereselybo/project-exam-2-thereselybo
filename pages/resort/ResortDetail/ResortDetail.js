import Image from "next/image";
import { Col, Row, Container, Card, Form, Button } from "react-bootstrap";
import SuperEllipse from "react-superellipse";
import { SwiperSlide } from "swiper/react";
import HorizontalLayout from "../../../components/layout/HorizontalLayout/HorizontalLayout";
import Carousel from "../../../components/Carousel/Carousel";
import { BASE_URL } from "../../../constants/api";
import { getResortDetails } from "../../../utils/getResortDetails";
import { getReviewDetails } from "../../../utils/getReviewDetails";

import styles from "./ResortDetail.module.scss";

const ResortDetail = ({ resort, reviews }) => {
  const resortDetails = getResortDetails(resort);
  console.log(reviews);

  return (
    <>
      <header className={`d-md-none ${styles.resortImage}`}>
        <Image
          src={resortDetails.image}
          alt={resortDetails.imageAlt}
          layout="fill"
          objectFit="cover"
        />
      </header>
      {/* <HorizontalLayout
        image={resortDetails.image}
        imageAlt={resortDetails.imageAlt}
      > */}
      <Row className="d-flex flex-md-row justify-content-between">
        {/* left hand content */}
        <Col md={6}>
          <Container>
            <h1>{resortDetails.title}</h1>
            <Card>
              <Card.Body>{resortDetails.description}</Card.Body>
            </Card>

            {resortDetails.facilities ? (
              <>
                <h2>Facilities</h2>
                <Row className="d-flex flex-row flex-nowrap overflow-auto">
                  {resortDetails.facilities.map((facility, i) => {
                    console.log(facility);
                    return (
                      <SuperEllipse
                        className="p-5 ratio ratio-1x1"
                        r1={0.03}
                        r2={0.4}
                        style={{
                          width: "45px",
                          height: "45px",
                          background: "white",
                        }}
                      >
                        <Card key={i}>
                          <Card.Img
                            src={`${BASE_URL}${facility.icon.url}`}
                            className="h-50"
                          />
                          <Card.Body>
                            <Card.Text className="text-center">
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

            <h2>Location</h2>
            <div className={styles.resortMap}>
              <Image
                src="https://image.freepik.com/free-vector/colored-city-map-with-park-streets_23-2148318249.jpg"
                alt={`Map with location of ${resortDetails.title}`}
                layout="fill"
                objectFit="cover"
              />
            </div>

            {reviews ? (
              <>
                <h2>Reviews</h2>

                <Carousel slides={1}>
                  {reviews.map((review, i) => {
                    const reviewDetails = getReviewDetails(review);
                    return (
                      <SwiperSlide key={i}>
                        <Card>
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

            <Col className="d-md-none">
              <h2>
                {resortDetails.price} NOK
                <span className="fw-light">/night</span>
              </h2>
              <Button variant="primary" size="lg" block>
                Book
              </Button>
            </Col>
          </Container>
        </Col>

        {/* right hand content */}
        <Col
          md={6}
          className="d-none d-md-flex h-100 position-fixed end-0 top-0"
        >
          <Image
            src={resortDetails.image}
            alt={resortDetails.imageAlt}
            layout="fill"
            objectFit="cover"
          />
          {/* <Col md={6} className="h-100 d-flex align-items-center ms-auto"> */}
          <Col className="h-100 d-flex align-items-center ms-auto">
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
              <Form>
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
                  >
                    Book
                  </Button>
                </Col>
              </Form>
            </SuperEllipse>
          </Col>
        </Col>
      </Row>

      {/* </HorizontalLayout> */}
    </>
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
