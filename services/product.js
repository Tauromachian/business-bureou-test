import axios from "axios";

export async function getProducts() {
  return await axios.get("/products");
}

export async function getProduct(id) {
  return await axios.get(`/products/${id}`);
}
