import styles from "@/app/styles/home.module.scss";
import Faqs from "./Faqs";
import ContactForm from "./ContactForm";
import SectionTitle from "./SectionTitle";

const Queries = () => {
  return (
    <div className={styles.queries} id="queries">
      <SectionTitle title="Have some Questions" />
      <div className={styles.options}>
        <Faqs />
        <ContactForm />
      </div>
    </div>
  );
};

export default Queries;
