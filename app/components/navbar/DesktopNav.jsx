import styles from "@/app/styles/navbar.module.scss";

import Logo from "./Logo";
import NavCategories from "./NavCategories";
import RoundBtn from "../common/RoundBtn";

const DesktopNav = () => {
  return (
    <div className={`${styles.navbar} ${styles.desktopNav}`}>
      <Logo />
      <NavCategories />
      <RoundBtn text="Shop Now" link="/shop" customClass={styles.btn} />
    </div>
  );
};

export default DesktopNav;
