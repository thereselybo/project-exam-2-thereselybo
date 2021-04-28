import Link from "next/Link";
import { useRouter } from "next/router";

import { Nav, Navbar, Container, Col } from "react-bootstrap";
import {
  Calendar2Week,
  Envelope,
  Person,
  Building,
  ArrowLeftShort,
} from "react-bootstrap-icons";

import styles from "./DesktopAdminNav.module.scss";

const DesktopAdminNav = () => {
  const router = useRouter();
  const path = router.pathname;

  return (
    <Navbar className="d-none d-md-block min-vh-100">
      <Container className="h-100 position-fixed">
        <Nav className="flex-column align-items-left">
          <Nav.Item>
            <Link href="/" passHref>
              <Nav.Link className="d-flex align-items-center">
                <ArrowLeftShort className="me-3" />
                Main
              </Nav.Link>
            </Link>
          </Nav.Item>

          <div className="d-flex flex-column">
            <Nav.Item>
              <Link href="/admin" passHref>
                <Nav.Link className="d-flex align-items-center">
                  <Building className="me-3" />
                  Resorts
                </Nav.Link>
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link href="/admin/bookings" passHref>
                <Nav.Link className="d-flex align-items-center">
                  <Calendar2Week className="me-3" />
                  Bookings
                </Nav.Link>
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link href="/admin/messages" passHref>
                <Nav.Link className="d-flex align-items-center">
                  <Envelope className="me-3" />
                  Messages
                </Nav.Link>
              </Link>
            </Nav.Item>
          </div>

          <Nav.Item>
            <Nav.Link className="d-flex align-items-center">
              <Person className="me-3" />
              Logout
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default DesktopAdminNav;
