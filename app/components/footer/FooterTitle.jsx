import styles from "@/app/styles/footer.module.scss";

const FooterTitle = ({ title }) => {
  return <p className={styles.title}>{title}</p>;
};

export default FooterTitle;
