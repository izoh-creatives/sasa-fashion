import Link from "next/link";
import styles from "@/app/styles/footer.module.scss";

const Copyright = () => {
  return (
    <p className={styles.copyright}>
      Copyright &copy;
      <Link href="/" className={styles.link}>
        Sasa Fashion
      </Link>
      .All Rights Reserved.Web by
      <Link href="/" className={styles.link}>
        Izoh
      </Link>
    </p>
  );
};

export default Copyright;
