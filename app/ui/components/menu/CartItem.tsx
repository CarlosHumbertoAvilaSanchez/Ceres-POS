import type { ListedDish } from "@lib/definitions";
import { useCart } from "@hooks/useCart";
import { useState } from "react";
import { ArrowIcon } from "@icons/ArrowIcon";
import { IncrementIcon } from "@icons/IncrementIcon";
import { DecrementIcon } from "@icons/DecrementIcon";
import { TrashCanIcon } from "@icons/TrashCanIcon";
import { getTotalPrice } from "@/lib/utils/dish";
import { poppins } from "@fonts";

export default function CartItem({ dish }: { dish: ListedDish }) {
  const [showInfo, setShowInfo] = useState(false);
  const [total, setTotal] = useState(getTotalPrice(dish));
  const { removeItem, incrementQuantity, decrementQuantity } = useCart();

  const handleIncrement = () => {
    const newDish = incrementQuantity(dish.id);
    setTotal(getTotalPrice(newDish!));
  };
  const handleDecrement = () => {
    const newDish = decrementQuantity(dish.id);
    setTotal(getTotalPrice(newDish!));
  };

  return (
    <>
      <li
        className={`flex ${
          showInfo ? "flex-col gap-8" : "flex-row"
        } w-full bg-white rounded-lg p-4 items-center`}
      >
        <aside className="flex items-center gap-4 w-full justify-start">
          <button
            onClick={() => setShowInfo(!showInfo)}
            className={`${
              showInfo ? "rotate-90" : "rotate-0"
            } transition-transform`}
          >
            <ArrowIcon />
          </button>
          <div className="flex flex-col">
            <span className="font-semibold">{dish.name} </span>
            <span className="font-semibold text-xs">
              {dish.selectedSize && `${dish.selectedSize.size}`}
            </span>
          </div>
        </aside>
        {showInfo && (
          <div className="flex flex-col w-full gap-2">
            {dish.selectedExtras?.map((extra) => (
              <div key={extra.name} className="flex gap-4">
                <span className="text-sm">{extra.name}</span>
                <span className={`${poppins.className} text-sm font-normal`}>
                  ${extra.price}
                </span>
              </div>
            ))}
          </div>
        )}
        <div className="flex items-center gap-4 w-full justify-between">
          {showInfo && (
            <div className="flex items-center gap-2">
              <button
                onClick={() => handleIncrement()}
                className="bg-green-600 h-5 w-5 flex justify-center items-center rounded"
              >
                <IncrementIcon />
              </button>
              <span
                className={`${poppins.className} font-medium w-4 text-center`}
              >
                {dish.quantity}
              </span>
              <button
                onClick={() => handleDecrement()}
                className="bg-red-700 h-5 w-5 flex justify-center items-center rounded"
              >
                <DecrementIcon />
              </button>
            </div>
          )}
          <div className="flex gap-4 w-full justify-end items-center">
            <span className={`${poppins.className} font-medium`}>${total}</span>
            <button onClick={() => removeItem(dish)}>
              <TrashCanIcon />
            </button>
          </div>
        </div>
      </li>
    </>
  );
}
