import type { Dish, Order } from "@types";

export const Dishes: Array<Dish> = [
    {
      id: "1",
      name: "Master Cono",
      price: 100,
      imageURL: "https://static.vecteezy.com/system/resources/previews/009/583/137/original/fried-chicken-illustration-png.png",
      category: "Comidas"
    },
    {
        id: "2",
        name: "Pizza",
        price: 150,
        imageURL: "https://static.vecteezy.com/system/resources/previews/009/583/137/original/fried-chicken-illustration-png.png",
        category: "Comidas"
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

export const Orders: Array<Order> = [
  {
    id: "1",
    branch: {
      id: "1",
      name: "Sucursal 1",
      address: "Calle 1",
      phone: "1234567890"
    },
    employee: "Empleado 1",
    customer: "Cliente 1",
    date: "2021-10-10",
    paymentMethod: "Efectivo",
    dishes: [
      {
        id: "1",
        name: "Master Cono",
        price: 100,
        imageURL: "https://static.vecteezy.com/system/resources/previews/009/583/137/original/fried-chicken-illustration-png.png",
        category: "Comida",
        quantity: 2,
        total: 200
      },
      {
        id: "3",
        name: "Malteada",
        price: 0,
        imageURL: "https://cdn-icons-png.flaticon.com/512/2234/2234936.png",
        category: "Bebida",
        quantity: 1,
        selectedSize: {
          size: "Grande",
          price: 70
        },
        selectedExtras: [
          {
            name: "Crema",
            price: 10
          }
        ],
        total: 80
      }
    ],
    total: 280
  }
]