"use client";
import Menu from "@components/menu/Menu";
import { CategoryProvider } from "@lib/context/category";
import { CartProvider } from "@lib/context/cart";
import ShoppingCart from "@components/menu/ShoppingCart";

export default function Page() {
  return (
    <section className="grid grid-cols-menu grid-rows-1 gap-4">
      <CartProvider>
        <CategoryProvider>
          <Menu />
        </CategoryProvider>
        <ShoppingCart />
      </CartProvider>
    </section>
  );
}
