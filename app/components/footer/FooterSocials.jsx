import styles from "@/app/styles/footer.module.scss";
import FooterTitle from "./FooterTitle";
import { socialIcons } from "@/app/data/socialIcons";
import SocialIcon from "../common/SocialIcon";

const FooterSocials = () => {
  return (
    <div className={styles.widget}>
      <FooterTitle title="Follow us" />
      <div className={styles.socialIcons}>
        {socialIcons.map((socialIcon, index) => (
          <div
            key={index}
            title={socialIcon.title}
            className={styles.socialIcon}
          >
            <SocialIcon
              icon={socialIcon.icon}
              customClass={styles.footerIcon}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FooterSocials;
