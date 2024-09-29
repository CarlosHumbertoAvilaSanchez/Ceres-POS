import { poppins } from "../../fonts";
import { useCart } from "@/app/lib/hooks/useCart";
import CartItem from "./CartItem";

export default function ShoppingCart() {
  const { cart } = useCart();
  return (
    <aside className="flex flex-col bg-gray-100 rounded-2xl p-8">
      <h2 className="font-bold text-3xl">
        Orden <span className={`${poppins.className} font-semibold`}>#400</span>
      </h2>
      <hr className="mt-2" />
      <ul className="flex flex-col gap-2 mt-10 max-h-[600px] overflow-y-auto">
        {cart.map((dish) => {
          return <CartItem dish={dish} key={dish.id} />;
        })}
      </ul>
    </aside>
  );
}
