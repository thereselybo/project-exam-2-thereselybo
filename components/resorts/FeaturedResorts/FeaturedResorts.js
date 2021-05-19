import Link from "next/link";
import { Card, Col, Row } from "react-bootstrap";
import { SwiperSlide } from "swiper/react";
import { getResortDetails } from "../../../utils/getResortDetails";
import Carousel from "../../Carousel/Carousel";
import SuperEllipse from "react-superellipse";

import styles from "./FeaturedResorts.module.scss";
import { BASE_URL } from "../../../constants/api";
import FeaturedResortCard from "./FeaturedResortCard";

// TODO:
// solve unique key prop problem
// solve problem with img src not matching - fixed?

const FeaturedResorts = ({ resorts, heading }) => {
  let featuredResorts = [];

  //   let key = 0;

  resorts.forEach((resort) => {
    if (resort.featured) {
      featuredResorts.push(resort);
    }
  });

  if (featuredResorts.length > 3) {
    return (
      <section>
        {heading}
        <Carousel>
          {/* <div className="swiper-slide-container"> */}
          {featuredResorts ? (
            featuredResorts.map((resort, i) => {
              const resortDetails = getResortDetails(resort);
              //   console.log(resortDetails);
              return (
                <SwiperSlide key={i}>
                  <Col className="featured-resort">
                    <FeaturedResortCard resortDetails={resortDetails} />
                    {/* <SuperEllipse
                      className="m-auto d-none d-md-block"
                      r1={0.03}
                      r2={0.4}
                      style={{
                        // width: "80%",
                        // height: "100%",
                        background: "hsla(26, 59%, 90%, 0.8)",
                      }}
                    >
                      <Link href={`/resort/${resortDetails.slug}`}>
                        <Card>
                          <Card.Img
                            src={resortDetails.image}
                            alt={resortDetails.imageAlt}
                          />
                          <Card.ImgOverlay className="d-flex align-items-end">
                            <Card.Body>
                              <Card.Title>{resortDetails.title}</Card.Title>
                              <Card.Text>{resortDetails.destination}</Card.Text>
                              <Card.Subtitle>
                                <span className="h4">
                                  {resortDetails.price} NOK
                                </span>
                                <span>/night</span>
                              </Card.Subtitle>
                            </Card.Body>
                          </Card.ImgOverlay>
                        </Card>
                      </Link>
                    </SuperEllipse> */}
                  </Col>
                </SwiperSlide>
              );
            })
          ) : (
            <h3>Loading.....</h3>
          )}
          {/* </div> */}
        </Carousel>
      </section>
    );
  }

  if (featuredResorts.length <= 3) {
    return featuredResorts.length ? (
      <section>
        {heading}
        <Row>
          {featuredResorts.map((resort, i) => {
            const resortDetails = getResortDetails(resort);
            return (
              <Col key={i} xs={12} md={4} className="featured-resort">
                <FeaturedResortCard resortDetails={resortDetails} />
                {/* <Link href={`/resort/${resortDetails.slug}`} passHref>
                  <SuperEllipse
                    className="m-auto super-ellipse"
                    r1={0.03}
                    r2={0.4}
                    style={
                      {
                        //   width: "80%",
                        //   height: "320px",
                        //   background: "hsla(26, 59%, 90%, 0.8)",
                        // backgroundImage: `url(${resortDetails.image})`,
                      }
                    }
                    role="button"
                  >
                    <Card
                      className="h-100 position-relative"
                      style={{ backgroundImage: `url(${resortDetails.image})` }}
                    >
                      <Card.ImgOverlay className="d-flex align-items-end p-0">
                        <Card.Body className="p-4">
                          <Card.Title className="fw-normal">
                            {resortDetails.title}
                          </Card.Title>
                          <Card.Text className="fw-light">
                            {resortDetails.destination}
                          </Card.Text>
                          <Card.Subtitle>
                            <span className="h4">
                              {resortDetails.price} NOK
                            </span>
                            <span className="fw-light">/night</span>
                          </Card.Subtitle>
                        </Card.Body>
                      </Card.ImgOverlay>
                      <div className="resort-rating position-absolute py-1 px-3 d-flex align-items-center">
                        <span className="align-middle rating-star">
                          <StarFill />
                        </span>
                        <span className="ps-2 pt-1">
                          {resortDetails.rating}
                        </span>
                      </div>
                    </Card>
                  </SuperEllipse>
                </Link> */}
              </Col>
            );
          })}
        </Row>
      </section>
    ) : (
      ""
    );
  }
};

export default FeaturedResorts;
