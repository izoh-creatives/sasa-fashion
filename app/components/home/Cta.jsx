import styles from "@/app/styles/home.module.scss";
import RoundBtn from "../common/RoundBtn";
import { ctaItems } from "@/app/data/ctaItems";

const Cta = () => {
  return (
    <div className={styles.cta}>
      <div className={styles.content}>
        <h1 className={styles.title}>{ctaItems.title}</h1>
        <p className={styles.description}>{ctaItems.description}</p>
        <RoundBtn
          text={ctaItems.btnText}
          link={ctaItems.btnLink}
          customClass={styles.btn}
        />
      </div>
      <img src="/hero.png" alt="Fashion goodies" className={styles.img} />
    </div>
  );
};

export default Cta;
