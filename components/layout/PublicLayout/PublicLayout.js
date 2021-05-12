import { AuthProvider } from "../../../context/AuthContext";
import Head from "../Head";
import Navigation from "../Navigation/Navigation";

import { Container } from "react-bootstrap";

import styles from "./PublicLayout.module.scss";

const Layout = ({ title, children }) => {
  return (
    <AuthProvider>
      <Head title={title} />
      <div className="min-vh-100">
        <Navigation />
        <div className={styles.contentWrapper}>{children}</div>
      </div>
    </AuthProvider>
  );
};

export default Layout;
