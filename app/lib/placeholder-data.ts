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
    {
      id: "3",
      name: "Malteada",
      price: 0,
      imageURL: "https://cdn-icons-png.flaticon.com/512/2234/2234936.png",
      category: "Bebida",
      sizes:[
        {
          size: "Chica",
          price: 50
        },
        {
          size: "Grande",
          price: 70
        }
      ],
      extras:[
        {
          name: "Crema",
          price: 10
        },
        {
          name: "Chispas de chocolate",
          price: 15
        }
      ]
    },
];

export const categories = ["Todos", "Comida", "Bebida", "Postre"];