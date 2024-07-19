import styles from "@/app/styles/footer.module.scss";
import FooterTitle from "./FooterTitle";
import { categories } from "@/app/data/categories";
import FooterLink from "./FooterLink";

const FooterCategories = () => {
  return (
    <div className={styles.widget}>
      <FooterTitle title="Categories" />
      <div className={styles.items}>
        {categories.map((category, index) => (
          <FooterLink
            key={index}
            text={category.title}
            link={`/shop/search?category=${category.slug}`}
          />
        ))}
      </div>
    </div>
  );
};

export default FooterCategories;
