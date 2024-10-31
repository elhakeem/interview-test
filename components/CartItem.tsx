import { CartItem } from "@/types";
import Image from "next/image";

export default function CartItemComponent({
  item,
  onRemove,
  onQuantityChange,
}: {
  item: CartItem;
  onRemove: (id: number) => void;
  onQuantityChange: (id: number, quantity: number) => void;
}) {
  return (
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
          <p className="text-gray-600">${item.price.toFixed(2)} each</p>
        </div>
      </div>
      <div className="flex gap-8 justify-between w-full md:w-auto">
        <div className="flex items-center">
          <button
            onClick={() =>
              onQuantityChange(item.id, Math.max(1, item.quantity - 1))
            }
            className="bg-gray-600 text-white px-2 py-1 rounded-l"
          >
            -
          </button>
          <span className="bg-muted px-4 py-1">{item.quantity}</span>
          <button
            onClick={() => onQuantityChange(item.id, item.quantity + 1)}
            className="bg-gray-600 text-white px-2 py-1 rounded-r"
          >
            +
          </button>
        </div>
        <div className="flex items-center">
          <button
            onClick={() => onRemove(item.id)}
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
  );
}
