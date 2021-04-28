import Head from "../Head";
import Navigation from "../Navigation/Navigation";

import { Container } from "react-bootstrap";

import styles from "./PublicLayout.module.scss";

const Layout = ({ title, children }) => {
  return (
    <>
      <Head title={title} />
      <Navigation />
      {children}
    </>
  );
};

export default Layout;
