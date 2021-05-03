import Link from "next/link";
import Image from "next/image";

import { Nav, Navbar, Container, Col } from "react-bootstrap";
import {
  Calendar2Week,
  Envelope,
  Person,
  Building,
  ArrowLeftShort,
} from "react-bootstrap-icons";

import styles from "./MobileAdminNav.module.scss";

const MobileAdminNav = () => {
  return (
    <>
      {/* TOP NAV */}
      <Navbar fixed="top" className="d-md-none">
        <Container>
          <Nav className="mx-auto w-100 justify-content-between">
            <Nav.Item className="mr-auto">
              <Link href="/" passHref>
                {/* <Navbar.Brand className="text-center"> */}
                <Nav.Link className="text-center">
                  <Col>
                    <ArrowLeftShort />
                  </Col>
                  <Col>Main</Col>
                </Nav.Link>
                {/* </Navbar.Brand> */}
              </Link>
            </Nav.Item>
            <Nav.Item className="ml-auto nav-link">
              <Col>
                <Person />
              </Col>
              <Col>Logout</Col>
            </Nav.Item>
          </Nav>
        </Container>
      </Navbar>

      {/* BOTTOM NAV */}
      <Navbar fixed="bottom" className="d-md-none">
        <Container>
          <Nav className="mx-auto">
            <Nav.Item>
              <Link href="/admin" passHref>
                <Nav.Link className="text-center">
                  <Col>
                    <Building />
                  </Col>
                  <Col>Resorts</Col>
                </Nav.Link>
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link href="/admin/bookings" passHref>
                <Nav.Link className="text-center">
                  <Col>
                    <Calendar2Week />
                  </Col>
                  <Col>Bookings</Col>
                </Nav.Link>
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link href="/admin/messages" passHref>
                <Nav.Link className="text-center">
                  <Col>
                    <Envelope />
                  </Col>
                  <Col>Messages</Col>
                </Nav.Link>
              </Link>
            </Nav.Item>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default MobileAdminNav;
