'use client';
import { Product } from '../types';
import { useCart } from '../context/CartContext';
import Image from 'next/image';
import { Plus } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { dispatch } = useCart();

  const addToCart = () => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  return (
    <div className="border rounded-lg p-4">
      <div className='w-full aspect-square flex items-center justify-center mb-4 rounded'>
        <Image src={product.thumbnail} alt={product.title} className="w-full h-full object-contain" width={600} height={600} />
      </div>
      <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
      <p className="text-gray-600 mb-2 text-xs">{product.description.slice(0, 100)}...</p>
      <div className="flex justify-between items-center">
        <span className="text-lg font-bold">${product.price.toFixed(2)}</span>
        <button
          onClick={addToCart}
          className="bg-blue-500 text-white p-4 rounded-full"
        >
          <Plus />
        </button>
      </div>
    </div>
  );
}