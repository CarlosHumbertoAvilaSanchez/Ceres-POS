"use client";

import { Dishes } from "@/app/lib/placeholder-data";
import type { Dish } from "@/app/lib/definitions";
import { DishCard } from "@/app/ui/components/menu/DishCard";
import DishCategoryFilter from "@/app/ui/components/menu/DishCategoryFilter";
export default function Page() {
  return (
    <section className="grid grid-cols-menu grid-rows-1 gap-4">
      <main className="bg-red-200 rounded-md p-8 grid grid-rows-menu">
        <header>
          <h1 className="font-semibold text-4xl">Menú</h1>
          <DishCategoryFilter />
        </header>
        <ul className="grid gap-4 grid-cols-dishes grid-rows-dishes">
          {Dishes.map((dish: Dish) => (
            <li key={dish.id}>
              <DishCard dish={dish} />
            </li>
          ))}
        </ul>
      </main>
      <aside className="bg-blue-200 rounded-md grid"></aside>
    </section>
  );
}
