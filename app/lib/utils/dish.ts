import type { ListedDish } from "@types";

export function generateListedDishId(dish: ListedDish) {
  return `${dish.name}-${
   dish.selectedSize ? `${dish.selectedSize.size}` : ""
  }${
    dish.selectedExtras ? `-${dish.selectedExtras.map((extra) => extra.name).join("-")}` : ""
  }`;
}