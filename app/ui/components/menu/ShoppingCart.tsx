import { poppins } from "@fonts";
import { useCart } from "@hooks/useCart";
import CartItem from "@components/menu/CartItem";
import type { Order } from "@/lib/definitions";
export default function ShoppingCart() {
  const { cart, calculateTotal } = useCart();

  const handleOrder = () => {
    if (cart.length === 0) {
      alert("No hay productos en el carrito");
      return;
    }

    const order: Order = {
      id: "400",
      dishes: cart,
      total: calculateTotal(),
      customer: "John Doe",
      employee: "Jane Doe",
      date: new Date().toDateString(),
      paymentMethod: "Credit Card",
      branch: {
        id: "1",
        name: "Branch 1",
        address: "1234 Main St",
        phone: "123-456-7890",
      },
    };
    console.log(order);
  };
  return (
    <aside className="flex flex-col bg-gray-100 rounded-2xl p-8">
      <header>
        <h2 className="font-bold text-3xl">
          Orden{" "}
          <span className={`${poppins.className} font-semibold`}>#400</span>
        </h2>
        <hr className="mt-2" />
      </header>
      <main className="h-[80%]">
        <ul className="flex flex-col gap-2 mt-10 max-h-[600px] overflow-y-auto">
          {cart.map((dish) => {
            return <CartItem dish={dish} key={dish.id} />;
          })}
        </ul>
      </main>
      <footer>
        <hr className="mt-4" />
        <div className="flex justify-between mt-4">
          <span className="font-semibold">Total</span>
          <span className={`${poppins.className} font-medium`}>
            ${calculateTotal().toFixed(2)}
          </span>
        </div>
        <button
          className="bg-green-600 text-white rounded-lg p-2 mt-4 w-full"
          onClick={() => handleOrder()}
        >
          Confirmar Orden
        </button>
      </footer>
    </aside>
  );
}
