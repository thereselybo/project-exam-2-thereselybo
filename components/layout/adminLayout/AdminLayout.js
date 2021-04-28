import Head from "../Head";
import AdminNav from "./AdminNav/AdminNav";

import { Container, Row, Col } from "react-bootstrap";

import styles from "./AdminLayout.module.scss";

const Layout = ({ title, children }) => {
  return (
    <>
      <Head title={title} />
      <Row>
        <Col xs={12} md={1}>
          <AdminNav />
        </Col>
        <Col xs={12} md={11}>
          <Container>{children}</Container>
        </Col>
      </Row>
    </>
  );
};

export default Layout;
