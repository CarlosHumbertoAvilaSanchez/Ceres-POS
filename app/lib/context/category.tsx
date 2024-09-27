import { createContext, useState } from "react";

export const CategoriesContext = createContext<{
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}>({
  activeCategory: "Todos",
  setActiveCategory: () => {},
});

export function CategoryProvider({ children }: { children: React.ReactNode }) {
  const [activeCategory, setActiveCategory] = useState("Todos");

  return (
    <CategoriesContext.Provider
      value={{
        activeCategory,
        setActiveCategory,
      }}
    >
      {children}
    </CategoriesContext.Provider>
  );
}
