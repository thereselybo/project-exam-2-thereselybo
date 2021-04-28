import DesktopAdminNav from "./DesktopAdminNav/DesktopAdminNav";
import MobileAdminNav from "./MobileAdminNav/MobileAdminNav";

import styles from "./AdminNav.module.scss";

const Navigation = () => {
  return (
    <>
      <DesktopAdminNav />
      <MobileAdminNav />
    </>
  );
};

export default Navigation;
