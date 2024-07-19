import styles from "@/app/styles/shop.module.scss";

const AttributeTitle = ({ title }) => {
  return <p className={styles.attributeTitle}>{title}</p>;
};

export default AttributeTitle;
