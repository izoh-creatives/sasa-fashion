import styles from "@/app/styles/shop.module.scss";
import AttributeTitle from "./AttributeTitle";

const ProductColors = ({ product }) => {
  //Variables
  const colors = product.colors;
  const totalColors = colors.length;

  return (
    totalColors > 0 && (
      <div className={styles.colors}>
        <AttributeTitle title="Colors:" />
        <div className={styles.list}>
          {colors.map((color, index) => (
            <p key={index} className={styles.color}>
              {`${color}${index < totalColors - 1 ? "," : ""}`}
            </p>
          ))}
        </div>
      </div>
    )
  );
};

export default ProductColors;
