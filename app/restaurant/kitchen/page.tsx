"use client";
import { poppins } from "@/ui/fonts";
import { Orders } from "@/lib/placeholder-data";
import type { Order } from "@/lib/definitions";

function SecondaryOrder({ order }: { order: Order }) {
  return (
    <div className="bg-gray-200 rounded-lg shadow-sm p-2">
      <header>
        <h2>
          Orden #<span className={`${poppins.className}`}>{order.id}</span>
        </h2>
      </header>
      <ul>
        {order.dishes.map((dish) => (
          <li key={dish.id}>
            <span>{dish.name}</span>
            {dish.selectedSize && <span>{dish.selectedSize.size}</span>}×{" "}
            {dish.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
}
function PrimaryOrder({ order }: { order: Order }) {
  return (
    <div className="bg-green-700 rounded-lg shadow-sm p-2">
      <header>
        <h2>
          Orden #<span className={`${poppins.className}`}>{order.id}</span>
        </h2>
      </header>
      <ul>
        {order.dishes.map((dish) => (
          <li key={dish.id}>
            <span>{dish.name}</span>
            {dish.selectedSize && <span>{dish.selectedSize.size}</span>}×{" "}
            {dish.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default function Page() {
  return (
    <>
      <header className="flex items-center">
        <h1 className="text-4xl font-semibold">
          Pedidos: <span className={`${poppins.className} font-medium`}>4</span>
        </h1>
      </header>
      <main className="grid grid-cols-orders gap-2">
        <PrimaryOrder order={Orders[0]} />
        <ul className="grid grid-rows-orders grid-cols-orderList gap-2">
          <SecondaryOrder order={Orders[0]} />
          <SecondaryOrder order={Orders[0]} />
          <SecondaryOrder order={Orders[0]} />
          <SecondaryOrder order={Orders[0]} />
          <SecondaryOrder order={Orders[0]} />
          <SecondaryOrder order={Orders[0]} />
          <SecondaryOrder order={Orders[0]} />
          <SecondaryOrder order={Orders[0]} />
        </ul>
      </main>
    </>
  );
}
