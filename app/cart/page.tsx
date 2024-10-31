"use client";
import Image from "next/image";
import Navbar from "../../components/Navbar";
import { useCart } from "../../context/CartContext";

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
              <div
                key={item.id}
                className="flex flex-col md:flex-row items-start md:items-center justify-between border-b py-4"
              >
                <div className="flex items-center">
                  <Image
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-16 h-16 object-cover mr-4"
                    width={100}
                    height={100}
                  />
                  <div>
                    <h2 className="text-lg font-semibold">{item.title}</h2>
                    <p className="text-gray-600">
                      ${item.price.toFixed(2)} each
                    </p>
                  </div>
                </div>
                <div className="flex gap-8 justify-between w-full md:w-auto">
                  <div className="flex items-center">
                    <button
                      onClick={() =>
                        updateQuantity(item.id, Math.max(1, item.quantity - 1))
                      }
                      className="bg-gray-600 text-white px-2 py-1 rounded-l"
                    >
                      -
                    </button>
                    <span className="bg-muted px-4 py-1">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="bg-gray-600 text-white px-2 py-1 rounded-r"
                    >
                      +
                    </button>
                  </div>
                  <div className="flex items-center">
                  <button
                      onClick={() => removeFromCart(item.id)}
                      className="mr-4 text-red-500 hover:text-red-700"
                    >
                      Remove
                    </button>
                    <p className="font-semibold">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                </div>
              </div>
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
