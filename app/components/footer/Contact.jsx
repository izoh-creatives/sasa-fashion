import styles from "@/app/styles/footer.module.scss";
import SocialIcon from "../common/SocialIcon";

const Contact = ({ icon, text }) => {
  return (
    <div className={styles.contact}>
      <SocialIcon icon={icon} customClass={styles.footerIcon} />
      <p className={styles.text}>{text}</p>
    </div>
  );
};

export default Contact;
