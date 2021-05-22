// import AuthContext, { AuthProvider } from "../../../context/AuthContext";
import AuthContext from "../../../context/AuthContext";
import { AuthProvider } from "../../../context/AuthContext";
import { useContext, useEffect, useState } from "react";
// import AuthContext from "../../../context/AuthContext";
import { useRouter } from "next/router";

import Head from "../Head";
import AdminNav from "./adminNav/AdminNav";
import LoadingSpinner from "../../misc/LoadingSpinner";

import { Container, Row, Col } from "react-bootstrap";

const Layout = ({ title, children }) => {
  const [auth] = useContext(AuthContext);
  const [loggedIn, setLoggedIn] = useState(false);
  const router = useRouter();
  console.log(auth);

  useEffect(() => {
    console.log("authorized", auth);
    if (auth) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
      router.push("/");
    }
    // if (!auth) {
    //   console.log("not authorized", auth);
    //   router.push("/");
    // }
  }, []);

  return (
    // <AuthProvider>
    <>
      <Head title={title} />
      <Row className="admin-wrapper">
        {/* <Col xs={12} md={1}> */}
        {/* <div className={styles.sideNav}> */}
        <div className="admin-side-nav">{loggedIn && <AdminNav />}</div>
        {/* <Col xs={12} md={11}> */}
        <Col>
          {loggedIn ? (
            <Container className="admin-content-wrapper">{children}</Container>
          ) : (
            <LoadingSpinner />
          )}
        </Col>
      </Row>
    </>
    // </AuthProvider>
  );
};

export default Layout;
