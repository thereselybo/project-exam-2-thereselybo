import Image from "next/image";
import { Col, Row, Container, Card } from "react-bootstrap";
import SuperEllipse from "react-superellipse";
import { BASE_URL } from "../../../constants/api";
import { getResortDetails } from "../../../utils/getResortDetails";

import styles from "./HorizontalLayout.module.scss";

const HorizontalLayout = ({ children, image, imageAlt }) => {
  return (
    <Row className="d-flex flex-md-row justify-content-between">
      <Col md={6}>
        <Container>{children}</Container>
      </Col>
      <Col md={6} className="d-none d-md-flex h-100 position-fixed end-0 top-0">
        <Image src={image} alt={imageAlt} layout="fill" objectFit="cover" />
      </Col>
    </Row>
  );
};

export default HorizontalLayout;
