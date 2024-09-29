"use client";
import Menu from "@/app/ui/components/menu/Menu";
import { CategoryProvider } from "@/app/lib/context/category";
import { CartProvider } from "@/app/lib/context/cart";
import ShoppingCart from "@/app/ui/components/menu/ShoppingCart";

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
