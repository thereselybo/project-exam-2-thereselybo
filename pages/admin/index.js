import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { Button, Card, Col, Row } from "react-bootstrap";
import Layout from "../../components/layout/AdminLayout/AdminLayout";
import { BASE_URL, RESORTS_ENDPOINT } from "../../constants/api";
import { getResortDetails } from "../../utils/getResortDetails";

const Admin = ({ resorts }) => {
  console.log(resorts);
  return (
    <Layout title="Admin">
      <div className="d-flex justify-content-between">
        <h1>Resorts</h1>
        <Link href="/admin/add-resort" passHref>
          <Button variant="outline-primary">
            Add new <span className="d-none d-md-inline">resort</span>
          </Button>
        </Link>
      </div>

      <Card>
        <Card.Header className="d-none d-md-block">
          <Row>
            <Col md={1}></Col>
            <Col md={3} lg={4}>
              Resort
            </Col>
            <Col md={3} lg={4}>
              Location
            </Col>
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
                    className="justify-content-between align-items-center"
                  >
                    <Col xs={2} md={1} className="pe-0">
                      {/* <Col> */}
                      <Image
                        // className="position-relative"
                        src={resortDetails.image}
                        alt={resortDetails.imageAlt}
                        // layout="fill"
                        width="80"
                        height="80"
                      />
                    </Col>
                    <Col xs={7} md={3} lg={4}>
                      {resortDetails.title}
                    </Col>
                    <Col md={3} lg={4} className="d-none d-md-block">
                      {resortDetails.destination}
                    </Col>
                    <Col className="d-flex align-items-end">
                      <Button className="ms-auto" variant="primary">
                        Edit
                      </Button>
                    </Col>
                    <Col className="d-none d-md-block d-flex align-items-end">
                      <Button className="ms-auto" variant="danger">
                        Delete
                      </Button>
                    </Col>
                  </Row>
                );
              })
            : "No resorts"}
        </Card.Body>
      </Card>
    </Layout>
  );
};

export default Admin;

export const getStaticProps = async () => {
  let resorts = [];

  const url = `${BASE_URL}${RESORTS_ENDPOINT}`;

  try {
    const res = await axios.get(url);
    resorts = res.data;
  } catch (err) {
    console.log("resort fetch error:", err);
  }

  return {
    props: {
      resorts,
    },
  };
};
