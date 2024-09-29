import type { Dish } from "@types";

export const Dishes: Array<Dish> = [
    {
      id: "1",
      name: "Master Cono",
      price: 100,
      imageURL: "https://static.vecteezy.com/system/resources/previews/009/583/137/original/fried-chicken-illustration-png.png",
      category: "Comida"
    },
    {
        id: "2",
        name: "Pizza",
        price: 150,
        imageURL: "https://static.vecteezy.com/system/resources/previews/009/583/137/original/fried-chicken-illustration-png.png",
        category: "Comida"
    },
];

export const categories = ["Todos", "Comida", "Bebida", "Postre"];