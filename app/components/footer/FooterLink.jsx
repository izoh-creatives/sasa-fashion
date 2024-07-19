import Link from "next/link";

import styles from "@/app/styles/footer.module.scss";

const FooterLink = ({ text, link }) => {
  return (
    <Link href={link} className={styles.link}>
      <p>{text}</p>
    </Link>
  );
};

export default FooterLink;
