import styles from "@/app/styles/home.module.scss";
import SectionTitle from "./SectionTitle";
import { products } from "@/app/data/products";
import Product from "../common/Product";

const FeaturedProducts = () => {
  return (
    <div className={styles.featuredProducts} id="featured-products">
      <SectionTitle title="New Arrivals" />
      <div className={styles.products}>
        {products.map(
          (product, index) =>
            index <= 9 && <Product key={index} product={product} />
        )}
      </div>
    </div>
  );
};

export default FeaturedProducts;
