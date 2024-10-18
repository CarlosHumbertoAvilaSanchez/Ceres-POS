import { useEffect, useState } from "react";
import { supabase } from "../utils/supabaseClient";
import type { Dish } from "@types";
export const useDishes = () => {
    const [dishes, setDishes] = useState<Dish[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data, error } = await supabase.from("products")
        .select(`id, name, price, imageURL, category:categories(category),
                 product_size(size_id, sizes(id, size, price)),
                 product_extras(extra_id, extras(id, name, price))`);

      if (error) console.error(error);
      else {
        const dishes = data.map((dish) => {
          return {
            id: dish.id,
            name: dish.name,
            price: dish.price,
            imageURL: dish.imageURL,
            category: dish.category.category,
            sizes: dish.product_size.map((size) => {
              return {
                id: size.size_id,
                size: size.sizes.size,
                price: size.sizes.price,
              };
            }),
            extras: dish.product_extras.map((extra) => {
              return {
                id: extra.extra_id,
                name: extra.extras.name,
                price: extra.extras.price,
              };
            }),
          };
        });
        setDishes(dishes);
      }
    };

    fetchProducts();
  }, []);

 return { dishes };
}