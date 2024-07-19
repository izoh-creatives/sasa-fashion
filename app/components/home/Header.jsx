import styles from "@/app/styles/home.module.scss";
import RoundBtn from "../common/RoundBtn";
import { headerItems } from "@/app/data/headerItems";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.content}>
        <h1 className={styles.title}>{headerItems.title}</h1>
        <p className={styles.description}>{headerItems.description}</p>
        <RoundBtn
          text={headerItems.btnText}
          link={headerItems.btnLink}
          customClass={styles.btn}
        />
      </div>
      <img src="/hero.png" alt="Sasa Fashion" className={styles.img} />
    </div>
  );
};

export default Header;
