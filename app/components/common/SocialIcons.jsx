import styles from "@/app/styles/common.module.scss";
import { socialIcons } from "@/app/data/socialIcons";
import SocialIcon from "./SocialIcon";

const SocialIcons = ({ customClass }) => {
  return (
    <div className={`${styles.socialIcons} ${customClass}`}>
      {socialIcons.map((socialIcon, index) => (
        <div key={index} title={socialIcon.title} className={styles.socialIcon}>
          <SocialIcon icon={socialIcon.icon} />
        </div>
      ))}
    </div>
  );
};

export default SocialIcons;
