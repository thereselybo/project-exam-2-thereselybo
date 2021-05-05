import { Card, Col, Row } from "react-bootstrap";
import { getResortDetails } from "../../../utils/getResortDetails";
import { ArrowRightCircleFill } from "react-bootstrap-icons";

import styles from "./Resorts.module.scss";

const Resorts = ({ resorts, heading }) => {
  return resorts.length ? (
    <section>
      {heading}
      <Row>
        {resorts.map((resort, i) => {
          const resortDetails = getResortDetails(resort);
          return (
            <Col key={i} xs={12} md={6} className="mb-5">
              <Card className="h-100">
                <Row className="h-100">
                  <Col xs={4} className="pr-0">
                    <Card.Img
                      src={resortDetails.image}
                      alt={resortDetails.imageAlt}
                      className="h-100"
                    />
                  </Col>
                  <Col xs={6} className="pr-0">
                    <Card.Body>
                      <Card.Title>{resortDetails.title}</Card.Title>
                      <Card.Text>{resortDetails.introduction}</Card.Text>
                      <Card.Subtitle>
                        <span className="h4">{resortDetails.price} NOK</span>
                        <span>/night</span>
                      </Card.Subtitle>
                    </Card.Body>
                  </Col>
                  <Col xs={2} className="d-flex align-items-center">
                    <ArrowRightCircleFill />
                  </Col>
                </Row>
              </Card>
              {/* <Card>
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
                </Card> */}
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
