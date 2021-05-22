import Link from "next/link";
import { Card, Col, Row } from "react-bootstrap";
import { SwiperSlide } from "swiper/react";
import { getResortDetails } from "../../../utils/getResortDetails";
import Carousel from "../../carousel/Carousel";

import { BASE_URL } from "../../../constants/api";
import FeaturedResortCard from "./FeaturedResortCard";

// TODO:
// solve problem with img src not matching

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
              //   console.log(resortDetails);
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
          {/* </div> */}
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
