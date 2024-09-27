import type { Dish } from "../../../lib/definitions";

export function DishCard({ dish }: { dish: Dish }) {
  return (
    <>
      <div className="flex flex-col bg-gray-100 items-center py-2 px-4 rounded-lg cursor-pointer justify-center gap-6">
        <header className="w-full h-auto">
          <img
            src={dish.imageURL}
            alt={dish.name}
            className="w-full h-auto object-cover"
          />
        </header>
        <footer className="flex flex-col items-center justify-center gap-2 h-8 w-full">
          <h3 className="font-semibold text-lg text-gray-900">{dish.name}</h3>
        </footer>
      </div>
    </>
  );
}
