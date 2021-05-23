import { useContext } from "react";
import AuthContext from "../../../context/AuthContext";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

import { Navbar, Nav, Container, Button } from "react-bootstrap";

const DesktopNav = () => {
  const router = useRouter();
  const path = router.pathname;

  const [auth] = useContext(AuthContext);

  return (
    <div className={`position-fixed start-0 end-0 top-0 nav-wrapper`}>
      <Navbar className="d-none d-md-flex align-items-center px-4 bg-white public-desktop-nav">
        <Link href="/" passHref>
          <Navbar.Brand className="pb-0">
            <Image src="/images/holidaze-logo.svg" height="60" width="112" />
          </Navbar.Brand>
        </Link>
        <Navbar.Collapse>
          <Nav activeKey={path} className="mx-auto">
            <Nav.Item>
              <Link href="/" passHref>
                <Nav.Link>Home</Nav.Link>
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link href="/explore" passHref>
                <Nav.Link>Explore</Nav.Link>
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link href="/contact" passHref>
                <Nav.Link>Contact</Nav.Link>
              </Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
        <Nav.Item className="ms-5">
          {auth ? (
            <Link href="/admin" passHref>
              <Button variant="outline-primary">Admin</Button>
            </Link>
          ) : (
            <Link href="/login" passHref>
              <Button variant="outline-primary">Login</Button>
            </Link>
          )}
        </Nav.Item>
      </Navbar>
    </div>
  );
};

export default DesktopNav;
