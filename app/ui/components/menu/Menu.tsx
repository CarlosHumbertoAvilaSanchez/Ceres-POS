import DishesGrid from "@components/menu/DishesGrid";
import DishCategoryFilter from "@components/menu/DishCategoryFilter";
import { useCategories } from "@hooks/useCategories";
import { Dishes } from "@lib/placeholder-data";

export default function Menu() {
  const { filterDishes } = useCategories();
  const filteredDishes = filterDishes(Dishes);

  return (
    <main className="rounded-md p-8 grid grid-rows-menu">
      <header>
        <h1 className="font-semibold text-4xl">Menú</h1>
        <DishCategoryFilter />
      </header>
      <DishesGrid dishes={filteredDishes} />
    </main>
  );
}
