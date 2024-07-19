import Link from "next/link";

import styles from "@/app/styles/navbar.module.scss";
import { categories } from "@/app/data/categories";

const NavCategories = ({ onClicked }) => {
  return (
    <div className={styles.categories}>
      {categories.map((category, index) => (
        <Link
          key={index}
          onClick={onClicked}
          href={`/shop/search?category=${category.slug}`}
        >
          <p className={styles.category}>{category.title}</p>
        </Link>
      ))}
    </div>
  );
};

export default NavCategories;
