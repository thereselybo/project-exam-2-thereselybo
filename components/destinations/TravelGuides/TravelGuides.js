import Image from "next/image";
import Link from "next/link";
import { Card, Col, Row } from "react-bootstrap";
import SuperEllipse from "react-superellipse";
import { SwiperSlide } from "swiper/react";
import { getDestinationDetails } from "../../../utils/getDestinationDetails";
import Carousel from "../../carousel/Carousel";
import TravelGuideCard from "./TravelGuideCard";

// TODO:
// solve problem with img src not matching
// set a featured flag to certain destinations?

const TravelGuides = ({ destinations, heading }) => {
  // console.log("travel guide destinations: ", destinations);
  // let featuredDestinations = [];
  //   destinations.forEach((destination) => {
  //     if (destination.featured) {
  //       featuredDestinations.push(resort);
  //     }
  //   });

  //   if (featuredDestinations.length > 3) {
  if (destinations.length > 3) {
    return (
      <section>
        {heading}
        <Carousel>
          {destinations ? (
            destinations.map((destination, i) => {
              const destinationDetails = getDestinationDetails(destination);
              //   console.log(resortDetails);
              return (
                // <Col key={key++}>
                // <div key={i}>
                <SwiperSlide key={i}>
                  {/* <SwiperSlide> */}
                  <TravelGuideCard destinationDetails={destinationDetails} />
                  {/* <SuperEllipse
                    className="m-auto p-5 ratio ratio-1x1"
                    r1={0.03}
                    r2={0.4}
                    style={{
                      // width: "80%",
                      // height: "100%",
                      background: "hsla(26, 59%, 90%, 0.8)",
                    }}
                  >
                    <Link href={`/explore/${destinationDetails.slug}`}>
                      <Image
                        src={destinationDetails.image}
                        alt={destinationDetails.imageAlt}
                        layout="fill"
                        objectFit="cover"
                        role="button"
                      />
                    </Link>
                  </SuperEllipse>
                  <Link href={`/explore/${destinationDetails.slug}`}>
                    <h4 className="my-3 ms-2" role="button">
                      {destinationDetails.title}
                    </h4>
                  </Link> */}
                </SwiperSlide>
                // </div>
                // </Col>
              );
            })
          ) : (
            <h3>Loading.....</h3>
          )}
        </Carousel>
      </section>
    );
  }

  //   if (featuredDestinations.length <= 3) {
  if (destinations.length <= 3) {
    return destinations.length ? (
      <section>
        {heading}
        <Row className="gx-5">
          {destinations.map((destination, i) => {
            const destinationDetails = getDestinationDetails(destination);
            return (
              <Col key={i} xs={12} md={4} className="p-5">
                {/* <Link href={`/explore/${destinationDetails.slug}`}>
                  <SuperEllipse
                    className="m-auto d-none d-md-block p-5 ratio ratio-1x1"
                    r1={0.03}
                    r2={0.4}
                    style={{
                      // width: "80%",
                      // height: "100%",
                      background: "hsla(26, 59%, 90%, 0.8)",
                    }}
                  >
                    <Image
                      src={destinationDetails.image}
                      alt={destinationDetails.imageAlt}
                      layout="fill"
                      objectFit="cover"
                    />
                  </SuperEllipse>
                  <h4 className="my-3">{destinationDetails.title}</h4>
                </Link> */}
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
