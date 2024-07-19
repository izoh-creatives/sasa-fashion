import styles from "@/app/styles/shop.module.scss";
import SidebarHeading from "./SidebarHeading";
import { socialIcons } from "@/app/data/socialIcons";
import SocialIcon from "../common/SocialIcon";

const Socials = () => {
  return (
    <div className={styles.socials}>
      <SidebarHeading title="Follow us" />
      <div className={styles.socialIcons}>
        {socialIcons.map((socialIcon, index) => (
          <div key={index} title={socialIcon.title}>
            <SocialIcon icon={socialIcon.icon} customClass={styles.shopIcon} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Socials;
