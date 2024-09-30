import type { Dish, Size, Extra } from "@/lib/definitions";
import { poppins } from "@/ui/fonts";
import { useState } from "react";
import { useCart } from "@/lib/hooks/useCart";
import { generateListedDishId } from "@/lib/utils/dish";
function SizeButton({
  size,
  selected,
  setSelectedSize,
}: {
  size: Size;
  selected: boolean;
  setSelectedSize: (size: Size) => void;
}) {
  return (
    <button
      onClick={() => setSelectedSize(size)}
      className={`${
        selected
          ? "bg-green-600 text-white"
          : "bg-gray-200 text-black border-gray-400"
      } py-2 px-4  rounded-lg
    text-lg font-semibold shadow-md transition-colors`}
    >
      {size.size} $
      <span className={`${poppins.className} font-medium`}>{size.price}</span>
    </button>
  );
}

export default function DishForm({
  dish,
  modalRef,
}: {
  dish: Dish;
  modalRef: React.RefObject<HTMLDialogElement>;
}) {
  const [selectedSize, setSelectedSize] = useState<Size | null>(null);
  const [selectedExtras, setSelectedExtras] = useState<Extra[] | null>(null);
  const { addToCart, cart } = useCart();

  function handleClick() {
    if (selectedSize) {
      const listedDish = { ...dish, selectedSize };
      addToCart({
        ...listedDish,
        id: generateListedDishId(listedDish),
      });
      modalRef.current?.close();
      console.log(cart);
    }
  }
  return (
    <div className="w-[400px] flex flex-col gap-16">
      <main className="flex justify-around">
        {dish.sizes &&
          dish.sizes.map((size, index) => (
            <SizeButton
              key={index}
              size={size}
              selected={selectedSize?.size === size.size}
              setSelectedSize={setSelectedSize}
            ></SizeButton>
          ))}
        {dish.extras &&
          dish.extras.map((extra, index) => <h1>{extra.name}</h1>)}
      </main>
      <footer className="flex justify-center">
        <button
          onClick={handleClick}
          className="bg-blue-900 text-white rounded-md text-xl py-3 px-6 font-semibold shadow-md"
        >
          Agregar
        </button>
      </footer>
    </div>
  );
}
