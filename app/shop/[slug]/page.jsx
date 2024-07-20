"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

import styles from "@/app/styles/shop.module.scss";
import { productBySlug } from "@/functions";
import AttributeTitle from "@/app/components/shop/AttributeTitle";
import ProductSizes from "@/app/components/shop/ProductSizes";
import ProductColors from "@/app/components/shop/ProductColors";
import ProductTags from "@/app/components/shop/ProductTags";
import ProductEnquiries from "@/app/components/shop/ProductEnquiries";
import RelatedProducts from "@/app/components/shop/RelatedProducts";
import NotFound from "../search/not-found";

const ProductDetails = ({ params }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  //Get slug
  const { slug } = params;

  //Get product
  const product = productBySlug(slug);

  //Product not found
  if (!product) {
    return <NotFound />;
  }

  //Variables
  const totalImages = product.images.length;
  const lastIndex = totalImages - 1;

  //Show next image
  const nextImg = () => {
    setActiveIndex(activeIndex == lastIndex ? 0 : activeIndex + 1);
  };

  //Show previous image
  const prevImg = () => {
    setActiveIndex(activeIndex == 0 ? lastIndex : activeIndex - 1);
  };

  return (
    <div className={styles.productDetails}>
      {/* Product details */}
      <div className={styles.details}>
        {/* Images */}
        <div className={styles.images}>
          <img
            src={product.images[activeIndex]}
            alt={product.title}
            className={styles.img}
          />
          {totalImages > 1 && (
            <div className={styles.icons}>
              <div onMouseDown={prevImg} className={styles.icon}>
                <ArrowLeft />
              </div>
              <div onMouseDown={nextImg} className={styles.icon}>
                <ArrowRight />
              </div>
            </div>
          )}
        </div>
        {/* Content */}
        <div className={styles.content}>
          <h1 className={styles.productTitle}>{product.title}</h1>
          <p className={styles.price}>${product.price}</p>
          <p className={styles.description}>{product.description}</p>
          <div className={styles.category}>
            <AttributeTitle title="Category:" />
            <Link
              href={`/shop/search?category=${product.category.toLowerCase()}`}
            >
              <p className={styles.text}>{product.category}</p>
            </Link>
          </div>
          <ProductSizes product={product} />
          <ProductColors product={product} />
          {<ProductTags tags={product.tags} />}
          <ProductEnquiries product={product} />
        </div>
      </div>
      {/* Related products */}
      <RelatedProducts product={product} />
    </div>
  );
};

export default ProductDetails;
