import Image from "next/image";
import Link from "next/link";
import { Card, Col, Row } from "react-bootstrap";
import SuperEllipse from "react-superellipse";
import { SwiperSlide } from "swiper/react";
import { getDestinationDetails } from "../../../utils/getDestinationDetails";
import Carousel from "../../carousel/Carousel";
import TravelGuideCard from "./TravelGuideCard";

// TODO:
// solve problem with img src not matching - only a problem in develop?
// set a featured flag to certain destinations?

const TravelGuides = ({ destinations, heading }) => {
  if (destinations.length > 3) {
    return (
      <section>
        {heading}
        <Carousel>
          {destinations ? (
            destinations.map((destination, i) => {
              const destinationDetails = getDestinationDetails(destination);
              return (
                <SwiperSlide key={i}>
                  <TravelGuideCard destinationDetails={destinationDetails} />
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

  if (destinations.length <= 3) {
    return destinations.length ? (
      <section>
        {heading}
        <Row className="gx-5">
          {destinations.map((destination, i) => {
            const destinationDetails = getDestinationDetails(destination);
            return (
              <Col key={i} xs={12} md={4} className="p-5">
                <TravelGuideCard destinationDetails={destinationDetails} />
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

export default TravelGuides;
