"use client";
import Menu from "@/app/ui/components/menu/Menu";
import { CategoryProvider } from "@/app/lib/context/category";

export default function Page() {
  return (
    <section className="grid grid-cols-menu grid-rows-1 gap-4">
      <CategoryProvider>
        <Menu />
      </CategoryProvider>
      <aside className="bg-blue-200 rounded-md grid"></aside>
    </section>
  );
}
