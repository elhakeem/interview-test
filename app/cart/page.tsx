"use client";
import Navbar from "../../components/Navbar";
import { useCart } from "../../context/CartContext";
import CartItemComponent from "@/components/CartItem";

export default function Cart() {
  const { state, dispatch } = useCart();

  const removeFromCart = (id: number) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: id });
  };

  const updateQuantity = (id: number, quantity: number) => {
    dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity } });
  };

  const total = state.items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div>
      <Navbar />
      <main className="container mx-auto mt-8 px-4">
        <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
        {state.items.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div>
            {state.items.map((item) => (
              <CartItemComponent
                key={item.id}
                item={item}
                onRemove={removeFromCart}
                onQuantityChange={updateQuantity}
              />
            ))}
            <div className="mt-8 flex justify-between">
              <button className="bg-blue-500 text-white rounded p-4">
                Continue Checkout
              </button>
              <p className="text-xl font-bold">Total: ${total.toFixed(2)}</p>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
