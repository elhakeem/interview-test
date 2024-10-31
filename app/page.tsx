import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";
import { fetchProducts } from "@/utils/api";

export default async function Home() {
  const products = await fetchProducts()
  return (
    <div>
      <Navbar />
      <main className="container mx-auto mt-8 px-4">
        <h1 className="text-3xl font-bold mb-8">Our Products</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
    </div>
  );
}
