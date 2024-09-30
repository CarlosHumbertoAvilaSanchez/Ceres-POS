import type { Dish, Size, Extra, ListedDish } from "@/lib/definitions";
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
function ExtraButton({
  extra,
  isSelected,
  setSelectedExtras,
}: {
  extra: Extra;
  isSelected: boolean | undefined;
  setSelectedExtras: React.Dispatch<React.SetStateAction<Extra[]>>;
}) {
  function handleClick() {
    setSelectedExtras((prevState: Extra[]) => {
      // Si el extra ya está seleccionado, lo quitamos
      if (isSelected) {
        return prevState.filter((item: Extra) => item.name !== extra.name);
      } else {
        // Si no está seleccionado, lo añadimos
        return [...prevState, extra];
      }
    });
  }
  return (
    <button
      onClick={handleClick}
      className={`${
        isSelected
          ? "bg-green-600 text-white"
          : "bg-gray-200 text-black border-gray-400"
      } py-2 px-4  rounded-lg
    text-lg font-semibold shadow-md transition-colors`}
    >
      {extra.name} $
      <span className={`${poppins.className} font-medium`}>{extra.price}</span>
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
  const [selectedExtras, setSelectedExtras] = useState<Extra[]>([]);
  const { addToCart, cart } = useCart();

  function handleClick() {
    let listedDish: ListedDish = dish;
    if (selectedSize) {
      listedDish = { ...listedDish, selectedSize: selectedSize };
    }
    if (selectedExtras.length > 0) {
      listedDish = { ...listedDish, selectedExtras: selectedExtras };
    }
    addToCart({ ...listedDish, id: generateListedDishId(listedDish) });
    setSelectedSize(null);
    setSelectedExtras([]);
    modalRef.current?.close();
    console.log(cart);
  }
  return (
    <div className="w-[400px] flex flex-col gap-16">
      <main className="flex justify-around flex-col gap-8">
        {dish.sizes && (
          <>
            <h3 className="text-lg font-semibold">Selecciona un tamaño</h3>
            <div className="flex justify-around">
              {dish.sizes.map((size, index) => (
                <SizeButton
                  key={index}
                  size={size}
                  selected={selectedSize?.size === size.size}
                  setSelectedSize={setSelectedSize}
                ></SizeButton>
              ))}
            </div>
          </>
        )}
        {dish.extras && (
          <>
            <h3 className="text-lg font-semibold">Selecciona los extras</h3>
            <div className="flex justify-around">
              {dish.extras.map((extra, index) => (
                <ExtraButton
                  key={index}
                  extra={extra}
                  isSelected={selectedExtras?.includes(extra)}
                  setSelectedExtras={setSelectedExtras}
                ></ExtraButton>
              ))}
            </div>
          </>
        )}
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
