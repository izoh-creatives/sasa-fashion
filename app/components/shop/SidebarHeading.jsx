import styles from "@/app/styles/shop.module.scss";

const SidebarHeading = ({ title }) => {
  return <h3 className={styles.heading}>{title}</h3>;
};

export default SidebarHeading;
