import Image from "next/image";
import DestinationSearch from "./DestinationSearch";
import SuperEllipse from "react-superellipse";
import { Container, Col } from "react-bootstrap";
import DestinationSearchMobile from "./DestinationSearchMobile";

const Header = ({ destinations }) => {
  return (
    <header className="header home-header">
      <Image
        src="/images/hero.svg"
        alt="Illustration of tropical scenery"
        layout="fill"
        objectFit="cover"
        className="hero-image"
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
            <DestinationSearch destinations={destinations} />
          </SuperEllipse>
        </Col>
        <Col>
          <DestinationSearchMobile destinations={destinations} />
        </Col>
      </Container>
    </header>
  );
};

export default Header;
