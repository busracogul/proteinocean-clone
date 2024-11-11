import axios from "axios";

const instance = axios.create({
  baseURL: "https://fe1111.projects.academy.onlyjs.com",
});

export async function fetchListBestSellers() {
  const response = await instance.get("/api/v1/products/best-sellers");
  return response.data;
}

export async function categoriesSection(){
  const response=await instance.get("/api/v1/categories");
  return response.data.data;
}

export default instance;
