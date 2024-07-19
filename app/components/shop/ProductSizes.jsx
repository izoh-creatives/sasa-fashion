import styles from "@/app/styles/shop.module.scss";
import AttributeTitle from "./AttributeTitle";

const ProductSizes = ({ product }) => {
  //Variables
  const sizes = product.sizes;
  return (
    sizes.length > 0 && (
      <div className={styles.sizes}>
        <AttributeTitle title="Sizes:" />
        <div className={styles.list}>
          {sizes.map((size, index) => (
            <p key={index} className={styles.size}>
              {size}
            </p>
          ))}
        </div>
      </div>
    )
  );
};

export default ProductSizes;
