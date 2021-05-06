import Head from "../Head";
import Navigation from "../Navigation/Navigation";

import { Container } from "react-bootstrap";

import styles from "./PublicLayout.module.scss";

const Layout = ({ title, children }) => {
  return (
    <>
      <Head title={title} />
      <div className="min-vh-100">
        <Navigation />
        <div className={styles.contentWrapper}>
        {children}
        </div>
      </div>
    </>
  );
};

export default Layout;
