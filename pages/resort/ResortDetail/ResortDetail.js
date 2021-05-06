import Image from "next/image";
import { Col, Row, Container, Card } from "react-bootstrap";
import SuperEllipse from "react-superellipse";
import HorizontalLayout from "../../../components/layout/HorizontalLayout/HorizontalLayout";
import { BASE_URL } from "../../../constants/api";
import { getResortDetails } from "../../../utils/getResortDetails";
import { getReviewDetails } from "../../../utils/getReviewDetails";

import styles from "./ResortDetail.module.scss";

// TODO:
// create review carousel
// booking section on mobile and desktop

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
      <HorizontalLayout
        image={resortDetails.image}
        imageAlt={resortDetails.imageAlt}
      >
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
            <Row className="d-flex flex-row flex-nowrap overflow-auto">
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
            </Row>
          </>
        ) : (
          ""
        )}
      </HorizontalLayout>
    </>
  );
};

export default ResortDetail;

const Detailz = () => {
  return (
    <Row className="d-flex flex-md-row justify-content-between">
      <Col md={6}>
        <Container>
          <h1>{resortDetails.title}</h1>
          <Card>
            <Card.Body>{resortDetails.description}</Card.Body>
          </Card>
          {resortDetails.facilities ? (
            <>
              <h2>Facilities</h2>
              <Row className="d-flex flex-row">
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
        </Container>
      </Col>
      <Col
        md={6}
        // lg={5}
        // className="d-none d-md-flex h-80 min-vh-100 position-relative align-middle my-5"
        // className="d-none d-md-flex h-100 position-fixed top-50 end-0 translate-middle"
        // className="d-none d-md-flex h-100 position-fixed py-5 end-0"
        className="d-none d-md-flex h-100 position-fixed end-0 col-lg-5 col-md-6 top-0"
      >
        <Image
          src={resortDetails.image}
          alt={resortDetails.imageAlt}
          layout="fill"
          objectFit="cover"
          // className=" py-5"
          // className="position-fixed top-10 bottom-10 end-0 translate-middle"
        />
      </Col>
    </Row>
  );
};
