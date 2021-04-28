import Link from "next/Link";
import Image from "next/Image";

import { Nav, Navbar, Container, Col } from "react-bootstrap";
import { House, Search, Envelope, Person } from "react-bootstrap-icons";

import styles from "./MobileNav.module.scss";

const MobileNav = () => {
  return (
    <Navbar fixed="bottom" className="d-md-none">
      <Container>
        <Nav fill className="mx-auto">
          <Nav.Item>
            <Link href="/" passHref>
              <Nav.Link className="text-center">
                <Col>
                  <House />
                </Col>
                <Col>Home</Col>
              </Nav.Link>
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link href="/explore" passHref>
              <Nav.Link className="text-center">
                <Col>
                  <Search />
                </Col>
                <Col>Explore</Col>
              </Nav.Link>
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link href="/contact" passHref>
              <Nav.Link className="text-center">
                <Col>
                  <Envelope />
                </Col>
                <Col>Contact</Col>
              </Nav.Link>
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link href="/login" passHref>
              <Nav.Link className="text-center">
                <Col>
                  <Person />
                </Col>
                <Col>Login</Col>
              </Nav.Link>
            </Link>
          </Nav.Item>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default MobileNav;
