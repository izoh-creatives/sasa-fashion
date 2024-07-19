import styles from "@/app/styles/home.module.scss";
import SocialIcon from "../common/SocialIcon";

const SpecialIcon = ({ icon }) => {
  return <SocialIcon icon={icon} customClass={styles.specialIcon} />;
};

export default SpecialIcon;
