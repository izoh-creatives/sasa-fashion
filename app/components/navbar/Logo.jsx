import Link from "next/link";
import Image from "next/image";

import styles from "@/app/styles/navbar.module.scss";
import sasaLogo from "@/public/sasa-logo.png";

const Logo = () => {
  return (
    <Link href="/">
      <Image
        src={sasaLogo}
        width={38}
        height={38}
        alt="Sasa Fashion"
        className={styles.logo}
      />
    </Link>
  );
};

export default Logo;
