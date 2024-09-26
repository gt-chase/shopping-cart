import axios from "axios";
import { NewProduct } from "../types/types";

export const getProducts = async () => {
  const { data } = await axios.get("/api/products");
  return data
}

export const createProduct = async (product: NewProduct) => {
  const { data } = await axios.post("/api/products", {
    ...product,
  });
  return data;
}