import styles from "@/app/styles/footer.module.scss";

import QuickLinks from "./QuickLinks";
import FooterCategories from "./FooterCategories";
import FooterContacts from "./FooterContacts";
import Copyright from "./Copyright";
import FooterSocials from "./FooterSocials";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.widgets}>
        <QuickLinks />
        <FooterCategories />
        <FooterContacts />
        <FooterSocials />
      </div>
      <Copyright />
    </div>
  );
};

export default Footer;
