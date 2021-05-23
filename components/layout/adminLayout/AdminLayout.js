import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import AuthContext from "../../../context/AuthContext";

import Head from "../Head";
import AdminNav from "./adminNav/AdminNav";
import LoadingSpinner from "../../misc/LoadingSpinner";
import { Container, Row, Col } from "react-bootstrap";

const Layout = ({ title, children }) => {
  const [auth] = useContext(AuthContext);
  const [loggedIn, setLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (auth) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
      router.push("/login");
    }
  }, []);

  return (
    <>
      <Head title={title} />
      <Row className="admin-wrapper">
        {loggedIn ? (
          <>
            <div className="admin-side-nav">
              <AdminNav />
            </div>
            <Col>
              <Container className="admin-content-wrapper">
                {children}
              </Container>
            </Col>
          </>
        ) : (
          <Col>
            <LoadingSpinner />
          </Col>
        )}
      </Row>
    </>
  );
};

export default Layout;
