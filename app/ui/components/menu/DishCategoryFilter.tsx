import { categories } from "@/app/lib/placeholder-data";
import { useState } from "react";

function FilterOption({
  category,
  active,
  onFilterChange,
}: {
  category: string;
  active: boolean;
  onFilterChange: (category: string) => void;
}) {
  return (
    <button
      onClick={() => onFilterChange(category)}
      className={`${
        active ? "bg-green-600" : "bg-gray-50"
      } p-2 rounded-lg w-[100px] `}
    >
      {category}
    </button>
  );
}

export default function DishCategoryFilter() {
  const [activeCategory, setActiveCategory] = useState<string>("Todos");
  return (
    <>
      <div className="flex gap-3">
        {categories.map((category) => (
          <FilterOption
            key={category}
            category={category}
            active={activeCategory === category}
            onFilterChange={setActiveCategory}
          />
        ))}
      </div>
    </>
  );
}
