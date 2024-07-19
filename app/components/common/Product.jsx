import Link from "next/link";

import styles from "@/app/styles/common.module.scss";

const Product = ({ product }) => {
  return (
    <Link className={styles.product} href={`/shop/${product.slug}`}>
      <img src={product.images[0]} className={styles.img} />
      <div className={styles.content}>
        <p className={styles.title}>{product.title}</p>
        <p className={styles.price}>${product.price}</p>
      </div>
    </Link>
  );
};

export default Product;
