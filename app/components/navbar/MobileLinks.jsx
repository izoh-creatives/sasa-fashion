import Link from "next/link";

import styles from "@/app/styles/navbar.module.scss";
import { mobileLinks } from "@/app/data/mobileLinks";

const MobileLinks = ({ onClicked }) => {
  return mobileLinks.map((mobileLink, index) => (
    <Link
      key={index}
      onClick={onClicked}
      href={mobileLink.link}
      className={styles.mobileLink}
    >
      {mobileLink.title}
    </Link>
  ));
};

export default MobileLinks;
