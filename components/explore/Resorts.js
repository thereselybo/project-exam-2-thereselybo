import Link from "next/link";
import { getResortDetails } from "../../utils/getResortDetails";

import { Card, Col, Row } from "react-bootstrap";
import { ArrowRightCircleFill } from "react-bootstrap-icons";
import { StarFill } from "react-bootstrap-icons";

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
                <Card
                  className="h-100 d-flex flex-row resort-card"
                  role="button"
                >
                  <Col
                    xs={4}
                    className="pr-0 resort-image position-relative"
                    style={{ backgroundImage: `url(${resortDetails.image})` }}
                  >
                    {resortDetails.rating && (
                      <div className="resort-rating position-absolute py-1 px-3 d-flex align-items-center">
                        <span className="align-middle rating-star">
                          <StarFill />
                        </span>
                        <span className="ps-2 pt-1">
                          {resortDetails.rating}
                        </span>
                      </div>
                    )}
                  </Col>
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
                  <Col className="d-flex align-items-center resort-arrow pe-4 fs-1">
                    <ArrowRightCircleFill />
                  </Col>
                </Card>
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
