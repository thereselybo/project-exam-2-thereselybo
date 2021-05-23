import { getResortDetails } from "../../../utils/getResortDetails";

import FeaturedResortCard from "./FeaturedResortCard";
import Carousel from "../../carousel/Carousel";
import { Col, Row } from "react-bootstrap";
import { SwiperSlide } from "swiper/react";

// TODO:
// solve problem with img src not matching - only a problem in develop?

const FeaturedResorts = ({ resorts, heading }) => {
  let featuredResorts = [];

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
              return (
                <SwiperSlide key={i}>
                  <Col className="featured-resort">
                    <FeaturedResortCard resortDetails={resortDetails} />
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
        <Row className="g-5">
          {featuredResorts.map((resort, i) => {
            const resortDetails = getResortDetails(resort);
            return (
              <Col key={i} xs={12} lg={4} className="featured-resort px-5">
                <FeaturedResortCard resortDetails={resortDetails} />
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
