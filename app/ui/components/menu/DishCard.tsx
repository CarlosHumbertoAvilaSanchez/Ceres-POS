import type { Dish } from "@types";
import { useCart } from "@hooks/useCart";
import Modal from "@components/shared/Modal";
import { useRef } from "react";
import DishForm from "@components/menu/DishForm";

export default function DishCard({ dish }: { dish: Dish }) {
  const modalRef = useRef<HTMLDialogElement>(null);

  const { addToCart } = useCart();

  const handleClick = () => {
    if (!dish.sizes && !dish.extras) {
      addToCart(dish);
      return;
    }
    modalRef.current?.showModal();
  };

  return (
    <>
      <div
        onClick={handleClick}
        className="flex flex-col bg-gray-100 items-center py-2 px-4 rounded-lg cursor-pointer justify-center gap-6 w-full h-full border border-gray-300"
      >
        <header className="w-full h-auto">
          <img
            src={dish.imageURL}
            alt={dish.name}
            className="w-full h-auto object-cover"
          />
        </header>
        <footer className="flex flex-col items-center justify-center gap-2 h-8 w-full">
          <h3 className="font-semibold text-lg text-gray-900 text-center">
            {dish.name}
          </h3>
        </footer>
      </div>
      {(dish.sizes || dish.extras) && (
        <Modal modalRef={modalRef} title={dish.name}>
          <DishForm dish={dish} modalRef={modalRef} />
        </Modal>
      )}
    </>
  );
}
