import Link from "next/link";
import { getResortDetails } from "../../utils/getResortDetails";

import DeleteButton from "./DeleteButton";
import { Button, Card, Col, Row } from "react-bootstrap";
import SuperEllipse from "react-superellipse";

const ResortsDisplay = ({ resorts }) => {
  return (
    <Card className="mb-5 admin-layout-card">
      <Card.Header className="d-none d-lg-block">
        <Row>
          <Col lg={1}></Col>
          <Col lg={4} className="ms-3">
            Resort
          </Col>
          <Col lg={4}>Location</Col>
        </Row>
      </Card.Header>
      <Card.Body>
        {resorts.length
          ? resorts.map((resort, i) => {
              const resortDetails = getResortDetails(resort);
              return (
                <Row
                  key={i}
                  className="justify-content-between align-items-center mb-3"
                >
                  <Col xs={2} lg={1} className="pe-0">
                    <div
                      className="admin-layout-card-image"
                      style={{
                        backgroundImage: `url(${resortDetails.image})`,
                      }}
                    ></div>
                  </Col>
                  <Col xs={7} lg={4} className="ms-3">
                    {resortDetails.title}
                  </Col>
                  <Col lg={3} className="d-none d-lg-block">
                    {resortDetails.destination}
                  </Col>
                  <Col className="d-flex align-items-end">
                    <Link
                      href={`/admin/edit-resort/${resortDetails.slug}`}
                      passHref
                    >
                      <Button className="ms-auto" variant="primary">
                        Edit
                      </Button>
                    </Link>
                    <div className="ms-3 d-none d-lg-block">
                      <DeleteButton
                        id={resortDetails.id}
                        title={resortDetails.title}
                        content="Delete"
                      />
                    </div>
                  </Col>
                </Row>
              );
            })
          : "No resorts"}
      </Card.Body>
    </Card>
  );
};

export default ResortsDisplay;
