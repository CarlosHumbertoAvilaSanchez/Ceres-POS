import type { ListedDish } from "@types";

export function generateListedDishId(dish: ListedDish) {
  return `${dish.name}-${
   dish.selectedSize ? `${dish.selectedSize.size}` : ""
  }${
    dish.selectedExtras ? `-${dish.selectedExtras.map((extra) => extra.name).join("-")}` : ""
  }`;
}

export function getTotalPrice(dish: ListedDish) {
  return (dish.price + (dish.selectedExtras?.reduce((acc, extra) => acc + extra.price, 0) || 0) + (dish.selectedSize?.price || 0)) * dish.quantity!;
}