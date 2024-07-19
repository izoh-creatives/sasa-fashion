import styles from "@/app/styles/common.module.scss";

const SocialIcon = ({ icon, customClass }) => {
  return <div className={`${styles.socialIcon} ${customClass}`}>{icon}</div>;
};

export default SocialIcon;
