import Image from "next/image";
import Link from "next/link";
import { getResortDetails } from "../../../utils/getResortDetails";

import DeleteButton from "../../../components/resorts/DeleteButton/DeleteButton";
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
          {/* <Col md={2}></Col> */}
        </Row>
      </Card.Header>
      <Card.Body>
        {resorts.length
          ? resorts.map((resort, i) => {
              console.log(resort);
              const resortDetails = getResortDetails(resort);
              return (
                // <Row key={i}>
                <Row
                  key={i}
                  className="justify-content-between align-items-center mb-3"
                >
                  <Col xs={2} lg={1} className="pe-0">
                    {/* <Col> */}
                    {/* <Image
                      // className="position-relative"
                      src={resortDetails.image}
                      alt={resortDetails.imageAlt}
                      // layout="fill"
                      width="80"
                      height="80"
                    /> */}
                    {/* <SuperEllipse
                      className="ratio ratio-1x1 facility-card mx-2"
                      r1={0.03}
                      r2={0.4}
                      style={{
                        width: "64px",
                        height: "64px",
                        background: { url: `${resortDetails.image}` },
                      }}
                    ></SuperEllipse> */}
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
                  </Col>
                  <Col className="d-none d-lg-block d-flex align-items-end">
                    <DeleteButton
                      id={resortDetails.id}
                      title={resortDetails.title}
                      // size=""
                      content="Delete"
                      className="ms-auto"
                    />
                    {/* <Button className="ms-auto" variant="danger">
                      Delete
                    </Button> */}
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
