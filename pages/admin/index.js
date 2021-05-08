import axios from "axios";
import Image from "next/image";
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
        <Button variant="outline-primary">
          Add new <span className="d-none d-md-inline">resort</span>
        </Button>
      </div>

      <Card>
        <Card.Header className="d-none d-md-block">
          <Row>
            <Col md={1}></Col>
            <Col md={4}>Resort</Col>
            <Col md={4}>Location</Col>
            <Col md={2}></Col>
          </Row>
        </Card.Header>
        <Card.Body>
          {resorts.length
            ? resorts.map((resort) => {
                console.log(resort);
                const resortDetails = getResortDetails(resort);
                return (
                  <Row>
                    <Col md={1}>
                      <Image
                        // className="position-relative"
                        src={resortDetails.image}
                        alt={resortDetails.imageAlt}
                        // layout="fill"
                        width="80"
                        height="80"
                      />
                    </Col>
                    <Col md={4}>{resortDetails.title}</Col>
                    <Col md={4}>{resortDetails.destination}</Col>
                    <Col>
                      <Button variant="primary">Edit</Button>
                    </Col>
                    <Col>
                      <Button variant="danger">Delete</Button>
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
