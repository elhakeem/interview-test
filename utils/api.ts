import { Product } from '../types';

export async function fetchProducts(): Promise<Product[]> {
  try {
    const response = await fetch('https://dummyjson.com/products');
    const data = await response.json();
    return data.products;
  } catch (error) {
    console.log("Error fetching the data", (error as Error).toString())
    return [];
  }
}