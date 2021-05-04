import Image from "next/image";
import { Card, Col, Row } from "react-bootstrap";
import SuperEllipse from "react-superellipse";
import { getDestinationDetails } from "../../../utils/getDestinationDetails";

import styles from "./PopularDestinations.module.scss";

const PopularDestinations = ({ destinations, heading }) => {
  console.log(destinations);

  return destinations.length ? (
    <section>
      {heading}
      <Row className="gx-5">
        {destinations.map((destination, i) => {
          const destinationDetails = getDestinationDetails(destination);
          return (
            <Col key={i} xs={6} md={3} className="p-5">
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
              <h4>{destinationDetails.title}</h4>
            </Col>
          );
        })}
      </Row>
    </section>
  ) : (
    ""
  );
};

export default PopularDestinations;
