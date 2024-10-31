import { Product } from '../types';

export async function fetchProducts(): Promise<Product[]> {
  const response = await fetch('https://dummyjson.com/products');
  const data = await response.json();
  return data.products;
}