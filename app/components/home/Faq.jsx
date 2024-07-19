import { Minus, Plus } from "lucide-react";

import styles from "@/app/styles/home.module.scss";

const Faq = ({ faq, onClick, isOpen }) => {
  return (
    <div className={`${styles.faq} ${isOpen && styles.open}`}>
      <div className={styles.header} onClick={onClick}>
        <p className={styles.question}>{faq.question}</p>
        {isOpen ? (
          <Minus className={styles.icon} />
        ) : (
          <Plus className={styles.icon} />
        )}
      </div>
      {isOpen && <div className={styles.answer}>{faq.answer}</div>}
    </div>
  );
};

export default Faq;
