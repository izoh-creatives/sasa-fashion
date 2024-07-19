import styles from "@/app/styles/home.module.scss";
import SpecialIcon from "./SpecialIcon";

const Special = ({ special }) => {
  return (
    <div className={styles.special}>
      <SpecialIcon icon={special.icon} />
      <p className={styles.title}>{special.title}</p>
    </div>
  );
};

export default Special;
