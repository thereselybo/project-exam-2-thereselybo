import { Card, Col, Row } from "react-bootstrap";
import Link from "next/link";
import { getResortDetails } from "../../../utils/getResortDetails";
import { ArrowRightCircleFill } from "react-bootstrap-icons";
import { StarFill } from "react-bootstrap-icons";

import styles from "./Resorts.module.scss";

const Resorts = ({ resorts, heading }) => {
  return resorts.length ? (
    <section>
      {heading}
      <Row className="gx-5">
        {resorts.map((resort, i) => {
          const resortDetails = getResortDetails(resort);
          return (
            <Col key={i} xs={12} lg={6} className="mb-5">
              <Link href={`/resort/${resortDetails.slug}`}>
                {/* <Card className="h-100"> */}
                <Card className="h-100 d-flex flex-row resort-card">
                  {/* <Row className="h-100"> */}
                  <Col
                    xs={4}
                    className="pr-0 resort-image position-relative"
                    style={{ backgroundImage: `url(${resortDetails.image})` }}
                  >
                    <div className="resort-rating position-absolute py-1 px-3 d-flex align-items-center">
                      <span className="align-middle rating-star">
                        <StarFill />
                      </span>
                      <span className="ps-2 pt-1">{resortDetails.rating}</span>
                    </div>
                    {/* <Card.Img
                      src={resortDetails.image}
                      alt={resortDetails.imageAlt}
                      className="h-100"
                    /> */}
                  </Col>
                  {/* <Col xs={6} className="pr-0"> */}
                  <Col className="pr-0 resort-content">
                    <Card.Body>
                      <Card.Title className="fw-normal">
                        {resortDetails.title}
                      </Card.Title>
                      <Card.Text className="fw-light">
                        {resortDetails.introduction}
                      </Card.Text>
                      <Card.Subtitle>
                        <span className="h4">{resortDetails.price} NOK</span>
                        <span className="fw-light">/night</span>
                      </Card.Subtitle>
                    </Card.Body>
                  </Col>
                  {/* <Col xs={2} className="d-flex align-items-center"> */}
                  <Col className="d-flex align-items-center resort-arrow pe-4 fs-1">
                    <ArrowRightCircleFill />
                  </Col>
                  {/* </Row> */}
                </Card>
                {/* <Card>
                  <Card.Img
                    src={resortDetails.image}
                    alt={resortDetails.imageAlt}
                  />
                  <Card.ImgOverlay>
                    <Card.Body>
                      <Card.Title>{resortDetails.title}</Card.Title>
                      <Card.Text>{resort.destination.title}</Card.Text>
                      <Card.Subtitle>
                        <span className="h4">{resortDetails.price} NOK</span>
                        <span>/night</span>
                      </Card.Subtitle>
                    </Card.Body>
                  </Card.ImgOverlay>
                </Card> */}
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

export default Resorts;
