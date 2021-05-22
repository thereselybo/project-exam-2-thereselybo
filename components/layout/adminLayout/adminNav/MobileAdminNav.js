import { useContext } from "react";
import AuthContext from "../../../../context/AuthContext";
import { useRouter } from "next/router";
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

const MobileAdminNav = () => {
  const [, setAuth] = useContext(AuthContext);
  const router = useRouter();
  // const path = router.pathname;

  const handleLogout = () => {
    setAuth(null);
    router.push("/");
  };
  return (
    <>
      {/* TOP NAV */}
      <Navbar fixed="top" className="d-md-none admin-mobile-nav top-nav">
        <Container>
          <Nav className="mx-auto w-100 justify-content-between nav-bar pb-3">
            <Nav.Item className="mr-auto p-0">
              <Link href="/" passHref>
                <Nav.Link className="text-center p-0">
                  <Col className="nav-icon">
                    <ArrowLeftShort />
                  </Col>
                  <Col className="nav-text">Main</Col>
                </Nav.Link>
              </Link>
            </Nav.Item>
            <Nav.Item className="ml-auto nav-link p-0" onClick={handleLogout}>
              <Col className="nav-icon text-center">
                <Person />
              </Col>
              <Col className="nav-text">Logout</Col>
            </Nav.Item>
          </Nav>
        </Container>
      </Navbar>

      {/* BOTTOM NAV */}
      <Navbar fixed="bottom" className="d-md-none admin-mobile-nav bottom-nav">
        <Container>
          <Nav justify className="mx-auto w-100">
            <Nav.Item>
              <Link href="/admin" passHref>
                <Nav.Link className="text-center">
                  <Col className="nav-icon">
                    <Building />
                  </Col>
                  <Col className="nav-text">Resorts</Col>
                </Nav.Link>
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link href="/admin/bookings" passHref>
                <Nav.Link className="text-center">
                  <Col className="nav-icon">
                    <Calendar2Week />
                  </Col>
                  <Col className="nav-text">Bookings</Col>
                </Nav.Link>
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link href="/admin/messages" passHref>
                <Nav.Link className="text-center">
                  <Col className="nav-icon">
                    <Envelope />
                  </Col>
                  <Col className="nav-text">Messages</Col>
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
