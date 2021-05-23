import Head from "../Head";
import Navigation from "../navigation/Navigation";

const Layout = ({ title, children }) => {
  return (
    <>
      <Head title={title} />
      <div className="public-layout">
        <Navigation />
        <div className="public-content-wrapper">{children}</div>
      </div>
    </>
  );
};

export default Layout;
