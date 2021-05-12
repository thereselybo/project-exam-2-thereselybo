// import AuthContext, { AuthProvider } from "../../../context/AuthContext";
import AuthContext from "../../../context/AuthContext";
import { AuthProvider } from "../../../context/AuthContext";
// import { useContext, useEffect } from "react";
// import AuthContext from "../../../context/AuthContext";
import { useRouter } from "next/router";

import Head from "../Head";
import AdminNav from "./AdminNav/AdminNav";
import LoadingSpinner from "../../misc/LoadingSpinner";

import { Container, Row, Col } from "react-bootstrap";

import styles from "./AdminLayout.module.scss";

const Layout = ({ title, children }) => {
  // const [auth] = useContext(AuthContext);
  // // const router = useRouter();
  // console.log(auth);

  // // useEffect(() => {
  // //   console.log(auth);
  // //   if (!auth) {
  // //     // router.push("/");
  // //   }
  // // }, []);

  return (
    <AuthProvider>
      <Head title={title} />
      <Row>
        {/* <Col xs={12} md={1}> */}
        <div className={styles.sideNav}>
          <AdminNav />
        </div>
        {/* <Col xs={12} md={11}> */}
        <Col>
          <Container>{children}</Container>
        </Col>
      </Row>
    </AuthProvider>
  );
};

export default Layout;
