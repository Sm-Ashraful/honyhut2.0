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
export async function fetchProductData(categoryId) {
  const productResponse = await axiosInstance.get(
    `/product/filter?category=${categoryId}`
  );
  return productResponse.data.products;
}

export async function fetchCategoryData(categoryName) {
  const response = await axiosInstance.get(
    `/category/get-categoryByName?name=${categoryName}`
  );
  return response.data;
}
