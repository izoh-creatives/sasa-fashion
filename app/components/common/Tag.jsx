import Link from "next/link";

import styles from "@/app/styles/common.module.scss";

const Tag = ({ tag }) => {
  return (
    <Link href={`/shop/search?tag=${tag.slug}`}>
      <p className={styles.tag}>{tag.title}</p>
    </Link>
  );
};

export default Tag;
