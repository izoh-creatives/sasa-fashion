"use client";
import { useState } from "react";

import styles from "@/app/styles/home.module.scss";
import { faqs } from "@/app/data/faqs";
import Faq from "./Faq";

const Faqs = () => {
  //No faq open
  const [openIndex, setOpenIndex] = useState(null);

  //Toggle faq
  const toggleFaq = (index) => {
    setOpenIndex(openIndex == index ? null : index);
  };

  return (
    <div className={styles.faqs}>
      {faqs.map((faq, index) => (
        <Faq
          key={index}
          faq={faq}
          isOpen={openIndex == index}
          onClick={() => toggleFaq(index)}
        />
      ))}
    </div>
  );
};

export default Faqs;
