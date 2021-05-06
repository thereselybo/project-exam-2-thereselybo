import Link from "next/link";
import { Card, Col, Row } from "react-bootstrap";
import { SwiperSlide } from "swiper/react";
import { getResortDetails } from "../../../utils/getResortDetails";
import Carousel from "../../Carousel/Carousel";
import SuperEllipse from "react-superellipse";

import styles from "./FeaturedResorts.module.scss";

// TODO:
// solve unique key prop problem
// solve problem with img src not matching

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
          {featuredResorts ? (
            featuredResorts.map((resort, i) => {
              const resortDetails = getResortDetails(resort);
              //   console.log(resortDetails);
              return (
                <SwiperSlide key={i}>
                  <Col className="p-3">
                    <SuperEllipse
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
                          <Card.ImgOverlay>
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
                    </SuperEllipse>
                  </Col>
                </SwiperSlide>
              );
            })
          ) : (
            <h3>Loading.....</h3>
          )}
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
              <Col key={i} xs={12} md={4}>
                <Card>
                  <Card.Img
                    src={resortDetails.image}
                    alt={resortDetails.imageAlt}
                  />
                  <Card.ImgOverlay>
                    <Card.Body>
                      <Card.Title>{resortDetails.title}</Card.Title>
                      <Card.Text>{resortDetails.destination}</Card.Text>
                      <Card.Subtitle>
                        <span className="h4">{resortDetails.price} NOK</span>
                        <span>/night</span>
                      </Card.Subtitle>
                    </Card.Body>
                  </Card.ImgOverlay>
                </Card>
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
