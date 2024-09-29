import type { Dish } from "../../../lib/definitions";
import { useCart } from "../../../lib/hooks/useCart";
import { useState } from "react";
import { ArrowIcon } from "../../icons/ArrowIcon";
import { IncrementIcon } from "../../icons/IncrementIcon";
import { DecrementIcon } from "../../icons/DecrementIcon";
import { TrashCanIcon } from "../../icons/TrashCanIcon";
import { poppins } from "../../fonts";

export default function CartItem({ dish }: { dish: Dish }) {
  const [showInfo, setShowInfo] = useState(false);

  const { removeItem, incrementQuantity, decrementQuantity } = useCart();
  return (
    <>
      <li
        className={`flex ${
          showInfo ? "flex-col gap-10" : "flex-row"
        } w-full justify-between bg-white rounded-lg p-4 items-center`}
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
          <span className="font-semibold">
            {dish.name}{" "}
            <span className={`${poppins.className} font-medium`}>
              {dish.quantity && `x ${dish.quantity}`}
            </span>
          </span>
        </aside>
        <div className="flex items-center gap-4 w-full justify-between">
          {showInfo && (
            <div className="flex items-center gap-2">
              <button
                onClick={() => incrementQuantity(dish.id)}
                className="bg-green-600 h-5 w-5 flex justify-center items-center rounded"
              >
                <IncrementIcon />
              </button>
              <span className={`${poppins.className} font-medium w-4`}>
                {dish.quantity}
              </span>
              <button
                onClick={() => decrementQuantity(dish.id)}
                className="bg-red-700 h-5 w-5 flex justify-center items-center rounded"
              >
                <DecrementIcon />
              </button>
            </div>
          )}
          <div className="flex gap-4 w-full justify-end">
            <span className={`${poppins.className} font-medium`}>
              ${dish.price}
            </span>
            <button onClick={() => removeItem(dish)}>
              <TrashCanIcon />
            </button>
          </div>
        </div>
      </li>
    </>
  );
}
