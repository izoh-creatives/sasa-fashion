import Link from "next/link";

import styles from "@/app/styles/shop.module.scss";
import SidebarHeading from "./SidebarHeading";
import { categories } from "@/app/data/categories";

const ShopCategories = () => {
  return (
    <div className={styles.categories}>
      <SidebarHeading title="Categories" />
      {categories.map((category, index) => (
        <Link key={index} href={`/shop/search?category=${category.slug}`}>
          <p className={styles.category}>{category.title}</p>
        </Link>
      ))}
    </div>
  );
};

export default ShopCategories;
