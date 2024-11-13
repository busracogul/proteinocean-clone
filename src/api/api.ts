import axios from "axios";

const instance = axios.create({
  baseURL: "https://fe1111.projects.academy.onlyjs.com",
});

export async function fetchListBestSellers() {
  const response = await instance.get("/api/v1/products/best-sellers");
  return response.data;
}

export async function categoriesSection() {
  const response = await instance.get("/api/v1/categories");
  return response.data.data;
}

export async function productsGet(mainCategoryId: string) {
  const response = await instance.get(
    `/api/v1/products?limit=20&offset=0&main_category=${mainCategoryId}`
  );
  return response.data;
}

export default instance;
