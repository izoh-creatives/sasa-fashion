import styles from "@/app/styles/footer.module.scss";
import FooterTitle from "./FooterTitle";
import { contacts } from "@/app/data/contacts";
import Contact from "./Contact";

const FooterContacts = () => {
  return (
    <div className={`${styles.widget} ${styles.contacts}`}>
      <FooterTitle title="Contacts" />
      <div className={styles.items}>
        {contacts.map((contact, index) => (
          <Contact key={index} icon={contact.icon} text={contact.text} />
        ))}
      </div>
    </div>
  );
};

export default FooterContacts;
