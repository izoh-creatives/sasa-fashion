import Link from "next/link";
import styles from "@/app/styles/shop.module.scss";

const Tag = ({ title, slug }) => {
  return (
    <Link href={`/shop/search?tag=${slug}`}>
      <p className={styles.tag}>{title}</p>
    </Link>
  );
};

export default Tag;
