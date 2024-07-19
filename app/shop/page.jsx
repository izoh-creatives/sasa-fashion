import styles from "@/app/styles/shop.module.scss";
import SearchInput from "../components/common/SearchInput";
import ShopCategories from "../components/shop/ShopCategories";
import Socials from "../components/shop/Socials";
import { products } from "../data/products";
import Product from "../components/common/Product";

const Shop = () => {
  return (
    <div className={styles.shop}>
      <div className={styles.sidebar}>
        <SearchInput />
        <ShopCategories />
        <Socials />
      </div>
      <div className={styles.main}>
        {products.map((product, index) => (
          <Product key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
