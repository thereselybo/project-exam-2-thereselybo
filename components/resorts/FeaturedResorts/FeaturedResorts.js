import { Card, Col } from "react-bootstrap";
import { SwiperSlide } from "swiper/react";
import { getResortDetails } from "../getResortDetails";
import ResortCarousel from "../ResortCarousel/ResortCarousel";

import styles from "./FeaturedResorts.module.scss";

const FeaturedResorts = ({ resorts }) => {
  let featuredResorts = [];

  resorts.forEach((resort) => {
    if (resort.featured) {
      featuredResorts.push(resort);
    }
  });

  if (featuredResorts && featuredResorts.length > 3) {
  }

  console.log("featuredResorts:", featuredResorts);
  return (
    <ResortCarousel>
      {featuredResorts ? (
        featuredResorts.map((resort) => {
          const resortDetails = getResortDetails(resort);
          console.log(resortDetails);
          return (
            <SwiperSlide>
              <Col key={resortDetails.id}>
                <Card>
                  <Card.Img
                    src={resortDetails.image}
                    alt={resortDetails.imageAlt}
                  />
                  <Card.ImgOverlay>
                    <Card.Body>
                      <Card.Title>{resortDetails.title}</Card.Title>
                      <Card.Text>
                        {resort.location}
                        <p className="h4">{resortDetails.price} NOK/night</p>
                      </Card.Text>
                    </Card.Body>
                  </Card.ImgOverlay>
                </Card>
              </Col>
            </SwiperSlide>
          );
        })
      ) : (
        <h3>Loading.....</h3>
      )}
    </ResortCarousel>
  );
};

export default FeaturedResorts;
