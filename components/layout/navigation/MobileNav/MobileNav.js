import { useContext } from "react";
import AuthContext from "../../../../context/AuthContext";
import Link from "next/link";
import Image from "next/image";

import { Nav, Navbar, Container, Col } from "react-bootstrap";
import { House, Search, Envelope, Person } from "react-bootstrap-icons";

import styles from "./MobileNav.module.scss";

const MobileNav = () => {
  const [auth] = useContext(AuthContext);
  console.log("auth", auth);

  return (
    <Navbar fixed="bottom" className="d-md-none public-mobile-nav">
      <Container>
        {/* <Nav fill className="mx-auto"> */}
        <Nav justify className="mx-auto w-100">
          <Nav.Item>
            <Link href="/" passHref>
              <Nav.Link className="text-center">
                <Col className="nav-icon">
                  <House />
                </Col>
                <Col className="nav-text">Home</Col>
              </Nav.Link>
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link href="/explore" passHref>
              <Nav.Link className="text-center">
                <Col className="nav-icon">
                  <Search />
                </Col>
                <Col className="nav-text">Explore</Col>
              </Nav.Link>
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link href="/contact" passHref>
              <Nav.Link className="text-center">
                <Col className="nav-icon">
                  <Envelope />
                </Col>
                <Col className="nav-text">Contact</Col>
              </Nav.Link>
            </Link>
          </Nav.Item>
          <Nav.Item>
            {auth ? (
              <Link href="/admin" passHref>
                <Nav.Link className="text-center">
                  <Col className="nav-icon">
                    <Person />
                  </Col>
                  <Col className="nav-text">Admin</Col>
                </Nav.Link>
              </Link>
            ) : (
              <Link href="/login" passHref>
                <Nav.Link className="text-center">
                  <Col>
                    <Person />
                  </Col>
                  <Col>Login</Col>
                </Nav.Link>
              </Link>
            )}

            {/* <Link href="/login" passHref>
              <Nav.Link className="text-center">
                <Col>
                  <Person />
                </Col>
                <Col>{auth ? "Admin" : "Login"}</Col>
              </Nav.Link>
            </Link> */}
          </Nav.Item>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default MobileNav;
