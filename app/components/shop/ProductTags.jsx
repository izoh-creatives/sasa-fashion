import styles from "@/app/styles/shop.module.scss";
import AttributeTitle from "./AttributeTitle";
import Tag from "./Tag";

const ProductTags = ({ tags }) => {
  return (
    <div className={styles.tags}>
      <AttributeTitle title="Tags" />
      <div className={styles.list}>
        {tags.map((tag, index) => (
          <Tag key={index} title={tag} slug={tag.toLowerCase()} />
        ))}
      </div>
    </div>
  );
};

export default ProductTags;
