import styles from "@/app/styles/shop.module.scss";

import Product from "@/app/components/common/Product";
import NotFound from "./not-found";
import { searchProducts } from "@/functions";

const Search = async ({ searchParams }) => {
  const { category, tag, title } = searchParams;

  //Search products
  let productsFound = searchProducts(category, tag, title);

  return (
    <div className={styles.results}>
      {productsFound.length > 0 ? (
        <div className={styles.products}>
          {productsFound.map((product, index) => (
            <Product key={index} product={product} />
          ))}
        </div>
      ) : (
        <NotFound />
      )}
    </div>
  );
};

export default Search;
