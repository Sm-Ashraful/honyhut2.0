// utils/api.js

import axiosInstance from "./axios";

export async function fetchData() {
  const [res, resCategory] = await Promise.all([
    axiosInstance.get("/product/get-products"),
    axiosInstance.get("/category/getcategory"),
  ]);

  const products = res.data.products;
  const categories = resCategory.data.categoryList;

  return { products, categories };
}
