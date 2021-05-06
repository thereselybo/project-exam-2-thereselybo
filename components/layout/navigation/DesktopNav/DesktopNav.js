import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

import { Navbar, Nav, Container, Button } from "react-bootstrap";

import styles from "./DesktopNav.module.scss";

const DesktopNav = () => {
  const router = useRouter();
  const path = router.pathname;

  return (
    // <Navbar className="d-none d-md-block">
    <div className={`position-fixed start-0 end-0 top-0 ${styles.navWrapper}`}>
      <Navbar className="d-none d-md-flex align-items-center px-4 bg-white">
        {/* <Container> */}
        <Link href="/" passHref>
          <Navbar.Brand>
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
        <Nav.Item>
          <Link href="/login" passHref>
            <Button variant="outline-primary">Login</Button>
          </Link>
        </Nav.Item>
        {/* </Container> */}
      </Navbar>
    </div>
  );
};

export default DesktopNav;
