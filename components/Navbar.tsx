'use client';
import Link from 'next/link';
import { useCart } from '../context/CartContext';
import { ShoppingBag } from 'lucide-react';

export default function Navbar() {
  const { state } = useCart();
  const itemCount = state.items.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="bg-muted text-forground p-4 border-b-[1px]">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          E-Breadfast Store
        </Link>
        <Link href="/cart" className="flex items-center">
          <span className="mr-2"><ShoppingBag /></span>
          <span className="bg-border rounded-full px-2 py-1 text-xs">
            {itemCount}
          </span>
        </Link>
      </div>
    </nav>
  );
}