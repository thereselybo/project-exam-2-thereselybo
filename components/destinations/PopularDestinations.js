import Image from "next/image";
import Link from "next/link";
import { Card, Col, Row } from "react-bootstrap";
import SuperEllipse from "react-superellipse";
import { getDestinationDetails } from "../../utils/getDestinationDetails";

const PopularDestinations = ({ destinations, heading }) => {
  console.log(destinations);

  return destinations.length ? (
    <section>
      {heading}
      <Row className="gx-5">
        {destinations.map((destination, i) => {
          const destinationDetails = getDestinationDetails(destination);
          return (
            <Col key={i} xs={6} md={3} className="px-5">
              <SuperEllipse
                className="m-auto p-5 ratio ratio-1x1"
                r1={0.03}
                r2={0.4}
                style={{
                  background: "hsla(26, 59%, 90%, 0.8)",
                }}
              >
                <Link href={`/explore/${destinationDetails.slug}`} passHref>
                  <div>
                    <Image
                      src={destinationDetails.image}
                      alt={destinationDetails.imageAlt}
                      layout="fill"
                      objectFit="cover"
                      role="button"
                    />
                  </div>
                </Link>
              </SuperEllipse>
              <Link href={`/explore/${destinationDetails.slug}`} passHref>
                <h4 className="my-3 ms-2" role="button">
                  {destinationDetails.title}
                </h4>
              </Link>
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
