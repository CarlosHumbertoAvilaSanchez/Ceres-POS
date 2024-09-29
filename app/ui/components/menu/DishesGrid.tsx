import type { Dish } from "@types";
import DishCard from "@components/menu/DishCard";

export default function ProductGrid({ dishes }: { dishes: Dish[] }) {
  return (
    <ul className="grid gap-4 grid-cols-dishes grid-rows-dishes">
      {dishes.map((dish: Dish) => (
        <li key={dish.id}>
          <DishCard dish={dish} />
        </li>
      ))}
    </ul>
  );
}
