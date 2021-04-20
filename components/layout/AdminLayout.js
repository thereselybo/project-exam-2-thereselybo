import Head from "./Head";

import { Container } from "react-bootstrap";

const Layout = ({ title, children }) => {
  return (
    <>
      <Head title={title} />
      {/* <AdminNav /> */}
      <Container>{children}</Container>
    </>
  );
};

export default Layout;
