import styles from "@/app/styles/shop.module.scss";
import RoundBtn from "../common/RoundBtn";

const ProductEnquiries = ({ product }) => {
  return (
    <div className={styles.enquiries}>
      <p className={styles.title}>Check availability</p>
      <div className={styles.form}>
        <input type="text" placeholder="Size" />
        <input type="text" placeholder="Color" />
        <RoundBtn text="Enquire" onClick={() => {}} customClass={styles.btn} />
      </div>
    </div>
  );
};

export default ProductEnquiries;
