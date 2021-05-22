import { useContext } from "react";
import AuthContext from "../../../../context/AuthContext";
import Link from "next/link";
import { useRouter } from "next/router";

import { Nav, Navbar, Container, Col } from "react-bootstrap";
import {
  Calendar2Week,
  Envelope,
  Person,
  Building,
  ArrowLeftShort,
} from "react-bootstrap-icons";

const DesktopAdminNav = () => {
  const [, setAuth] = useContext(AuthContext);
  const router = useRouter();
  // const path = router.pathname;

  const handleLogout = () => {
    setAuth(null);
    router.push("/");
  };

  return (
    <Navbar className="d-none d-md-block min-vh-100 admin-desktop-nav position-fixed">
      <Container className="h-100 position-fixed nav-container">
        <Nav className="flex-column align-items-left h-100">
          <Nav.Item className="mb-auto mt-2">
            <Link href="/" passHref>
              <Nav.Link className="d-flex align-items-center">
                <ArrowLeftShort className="me-3 nav-icon fs-2" />
                Main
              </Nav.Link>
            </Link>
          </Nav.Item>

          <div className="d-flex flex-column">
            <Nav.Item>
              <Link href="/admin" passHref>
                <Nav.Link className="d-flex align-items-center">
                  <Building className="me-4 nav-icon" />
                  Resorts
                </Nav.Link>
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link href="/admin/bookings" passHref>
                <Nav.Link className="d-flex align-items-center">
                  <Calendar2Week className="me-4 nav-icon" />
                  Bookings
                </Nav.Link>
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link href="/admin/messages" passHref>
                <Nav.Link className="d-flex align-items-center">
                  <Envelope className="me-4 nav-icon" />
                  Messages
                </Nav.Link>
              </Link>
            </Nav.Item>
          </div>

          <Nav.Item className="mt-auto mb-2">
            <Nav.Link
              className="d-flex align-items-center mb-3"
              onClick={handleLogout}
            >
              <Person className="me-3 nav-icon fs-3" />
              Logout
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default DesktopAdminNav;
