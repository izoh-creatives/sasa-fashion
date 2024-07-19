import styles from "@/app/styles/home.module.scss";
import { specials } from "@/app/data/specials";
import Special from "./Special";

const Specials = () => {
  return (
    <div className={styles.specials}>
      {specials.map((special, index) => (
        <Special key={index} special={special} />
      ))}
    </div>
  );
};

export default Specials;
