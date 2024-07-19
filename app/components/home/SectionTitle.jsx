import styles from "@/app/styles/home.module.scss";

const SectionTitle = ({ title }) => {
  return <h3 className={styles.sectionTitle}>{title}</h3>;
};

export default SectionTitle;
