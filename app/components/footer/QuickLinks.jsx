import styles from "@/app/styles/footer.module.scss";

import FooterTitle from "./FooterTitle";
import { quickLinks } from "@/app/data/quickLinks";
import FooterLink from "./FooterLink";

const QuickLinks = () => {
  return (
    <div className={styles.widget}>
      <FooterTitle title="Quick Links" />
      <div className={styles.items}>
        {quickLinks.map((quickLink, index) => (
          <FooterLink
            key={index}
            text={quickLink.title}
            link={quickLink.link}
          />
        ))}
      </div>
    </div>
  );
};

export default QuickLinks;
