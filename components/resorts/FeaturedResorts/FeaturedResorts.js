import { Card, Col, Row } from "react-bootstrap";
import { SwiperSlide } from "swiper/react";
import { getResortDetails } from "../getResortDetails";
import ResortCarousel from "../ResortCarousel/ResortCarousel";

import styles from "./FeaturedResorts.module.scss";

const FeaturedResorts = ({ resorts, heading }) => {
  let featuredResorts = [];
  console.dir(heading);

  //   let key = 0;

  resorts.forEach((resort) => {
    if (resort.featured) {
      featuredResorts.push(resort);
    }
  });

  if (featuredResorts.length > 3) {
    return (
      <>
        {heading}
        <ResortCarousel>
          {featuredResorts ? (
            featuredResorts.map((resort, i) => {
              const resortDetails = getResortDetails(resort);
              //   console.log(resortDetails);
              return (
                // <Col key={key++}>
                <SwiperSlide key={i}>
                  <Card>
                    <Card.Img
                      src={resortDetails.image}
                      alt={resortDetails.imageAlt}
                    />
                    <Card.ImgOverlay>
                      <Card.Body>
                        <Card.Title>{resortDetails.title}</Card.Title>
                        <Card.Text>{resort.location.title}</Card.Text>
                        <Card.Subtitle>
                          <span className="h4">{resortDetails.price} NOK</span>
                          <span>/night</span>
                        </Card.Subtitle>
                      </Card.Body>
                    </Card.ImgOverlay>
                  </Card>
                </SwiperSlide>
                // </Col>
              );
            })
          ) : (
            <h3>Loading.....</h3>
          )}
        </ResortCarousel>
      </>
    );
  }

  if (featuredResorts.length <= 3) {
    return featuredResorts.length ? (
      <>
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
                      <Card.Text>{resort.location.title}</Card.Text>
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
      </>
    ) : (
      ""
    );
  }
};

export default FeaturedResorts;
