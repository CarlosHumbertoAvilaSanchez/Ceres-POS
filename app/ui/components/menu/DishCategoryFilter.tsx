import { useCategories } from "@hooks/useCategories";
import { categories } from "@lib/placeholder-data";
import { supabase } from "@/lib/utils/supabaseClient";
import { useEffect, useState } from "react";
import type { Category } from "@/lib/definitions";

function FilterOption({
  category,
  active,
  onFilterChange,
}: {
  category: Category;
  active: boolean;
  onFilterChange: (category: string) => void;
}) {
  return (
    <button
      onClick={() => onFilterChange(category.category)}
      className={`${
        active ? "bg-green-600" : "bg-gray-200"
      } p-2 rounded-lg w-[100px] font-semibold`}
    >
      {category.category}
    </button>
  );
}

export default function DishCategoryFilter() {
  const { activeCategory, setActiveCategory } = useCategories();
  const [categories, setCategories] = useState<Category[]>([]);

  // Mover a un custom hook
  useEffect(() => {
    const fetchCategories = async () => {
      const { data, error } = await supabase.from("categories").select("*");
      if (error) console.error(error);
      else setCategories(data);
    };
    fetchCategories();
  }, []);

  return (
    <>
      <div className="flex gap-3">
        {categories.map((category: Category) => (
          <FilterOption
            key={category.id}
            category={category}
            active={activeCategory === category.category}
            onFilterChange={setActiveCategory}
          />
        ))}
      </div>
    </>
  );
}
