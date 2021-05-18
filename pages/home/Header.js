import Image from "next/image";
import SuperEllipse from "react-superellipse";

import {
  Container,
  Col,
  Form,
  Row,
  Button,
  InputGroup,
  FormControl,
} from "react-bootstrap";

import styles from "./index.module.scss";
import { Search } from "react-bootstrap-icons";

const Header = () => {
  return (
    // <header className={styles.heroImage}>
    <header className="header home-header">
      <Image
        src="/images/hero.svg"
        alt="Illustration of tropical scenery"
        layout="fill"
        objectFit="cover"
        className="hero-image"
        // layout="responsive"
        // height="700"
        // width="1200"
      />
      <Container className="h-100 hero-content">
        <Col md={6} className="h-100 d-flex align-items-center ms-auto">
          <SuperEllipse
            className="super-ellipse my-auto d-none d-md-block p-5"
            r1={0.03}
            r2={0.4}
            style={{
              width: "100%",
              height: "55%",
              background: "hsla(26, 59%, 90%, 0.8)",
            }}
          >
            <h1>Where are you going?</h1>
            <Form>
              <Row>
                <Form.Group as={Col} md={8}>
                  <Form.Label>Destination</Form.Label>
                  <Form.Control />
                </Form.Group>

                <Form.Group as={Col} md={4}>
                  <Form.Label>Guests</Form.Label>
                  <Form.Control type="number" />
                </Form.Group>
              </Row>

              <Row className="my-3">
                <Form.Group as={Col} md={6}>
                  <Form.Label>Check in</Form.Label>
                  <Form.Control type="date" />
                </Form.Group>

                <Form.Group as={Col} md={6}>
                  <Form.Label>Check out</Form.Label>
                  <Form.Control type="date" />
                </Form.Group>
              </Row>

              <Col className="d-flex justify-content-center">
                <Button
                  variant="primary"
                  size="lg"
                  className="mx-auto mt-3"
                  type="submit"
                >
                  Search
                </Button>
              </Col>
            </Form>
          </SuperEllipse>
        </Col>
        <Col>
          <Form className="mobile-destination-search">
            <InputGroup className="mb-3 d-flex d-md-none">
              <FormControl
                placeholder="Where are you going?"
                aria-label="Destination"
              />
              <InputGroup.Append>
                <Button variant="primary">
                  <Search />
                </Button>
              </InputGroup.Append>
            </InputGroup>
          </Form>
        </Col>
      </Container>
    </header>
  );
};

export default Header;
