import { products } from "@/app/data/products";

//Get single product
export const productBySlug = (productSlug) => {
  return products.find((product) => product.slug == productSlug);
};

//Related products
export const getRelatedProducts = (p) => {
  const res = products.filter(
    (product) =>
      product.category.toLowerCase() == p.category.toLowerCase() && product != p
  );
  return res;
};

//Search products
export const searchProducts = (category, tag, title) => {
  let productsFound = [];

  //Search products
  if (category) {
    productsFound = products.filter(
      (product) =>
        product.category == category ||
        product.tags.includes(category) ||
        product.title.toLowerCase().includes(category)
    );
  } else if (tag) {
    productsFound = products.filter(
      (product) =>
        product.tags.includes(tag) ||
        product.category.toLowerCase().includes(tag) ||
        product.title.toLowerCase().includes(tag)
    );
  } else if (title) {
    productsFound = products.filter(
      (product) =>
        product.title.toLowerCase() == title ||
        product.title.toLowerCase().includes(title) ||
        product.tags.includes(title.toLowerCase())
    );
  } else {
    productsFound = [];
  }
  return productsFound;
};
