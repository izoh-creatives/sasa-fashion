import styles from "@/app/styles/shop.module.scss";
import { getRelatedProducts } from "@/functions";
import Product from "../common/Product";

const RelatedProducts = ({ product }) => {
  //Get related products
  const relatedProducts = getRelatedProducts(product);

  return (
    relatedProducts.length > 0 && (
      <div className={styles.relatedProducts}>
        <h3 className={styles.title}>Related products</h3>
        <div className={styles.products}>
          {relatedProducts.map(
            (product, index) =>
              index <= 4 && <Product key={index} product={product} />
          )}
        </div>
      </div>
    )
  );
};

export default RelatedProducts;
