import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

import styles from "./Navigation.module.scss";

const Navigation = () => {
  return (
    <>
      <DesktopNav />
      <MobileNav />
    </>
  );
};

export default Navigation;
