import DishesGrid from "@/app/ui/components/menu/DishesGrid";
import DishCategoryFilter from "@/app/ui/components/menu/DishCategoryFilter";
import { useCategories } from "@/app/lib/hooks/useCategories";
import { Dishes } from "@/app/lib/placeholder-data";

export default function Menu() {
  const { filterDishes } = useCategories();
  const filteredDishes = filterDishes(Dishes);

  return (
    <main className="bg-red-200 rounded-md p-8 grid grid-rows-menu">
      <header>
        <h1 className="font-semibold text-4xl">Menú</h1>
        <DishCategoryFilter />
      </header>
      <DishesGrid dishes={filteredDishes} />
    </main>
  );
}
