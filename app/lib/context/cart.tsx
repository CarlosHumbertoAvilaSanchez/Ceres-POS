import { createContext, useState } from "react";
import type { Dish } from "../definitions";

export const CartContext = createContext({
  cart: [] as Dish[],
  addToCart: (dish: Dish) => {
    dish;
  },
  clearCart: () => {},
  removeItem: (dish: Dish) => {
    dish;
  },
  incrementQuantity: (dishId: string) => {
    dishId;
  },
  decrementQuantity: (dishId: string) => {
    dishId;
  },
});

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<Dish[]>([]);

  const addToCart = (dish: Dish) => {
    const newCart = structuredClone(cart);
    const dishInCart = newCart.findIndex((item: Dish) => item.id === dish.id);
    if (dishInCart >= 0) {
      newCart[dishInCart].quantity = newCart[dishInCart].quantity! + 1;
      return setCart(newCart);
    }
    setCart((prevState: Dish[]) => [
      ...prevState,
      {
        ...dish,
        quantity: 1,
      },
    ]);
  };
  const clearCart = () => {
    setCart([]);
  };

  const removeItem = (dish: Dish) => {
    return setCart((prevState) => {
      return prevState.filter((item: Dish) => item.id !== dish.id);
    });
  };

  const incrementQuantity = (dishId: string) => {
    const isDishInCart = cart.findIndex((item: Dish) => item.id === dishId);
    const newCart = structuredClone(cart);
    if (isDishInCart >= 0) {
      newCart[isDishInCart].quantity = newCart[isDishInCart].quantity! + 1;
    }
    return setCart(newCart);
  };

  const decrementQuantity = (dishId: string) => {
    const isDishInCart = cart.findIndex((item: Dish) => item.id === dishId);
    const newCart = structuredClone(cart);
    if (isDishInCart >= 0) {
      newCart[isDishInCart].quantity = newCart[isDishInCart].quantity! - 1;
      if (newCart[isDishInCart].quantity === 0) {
        newCart.splice(isDishInCart, 1);
      }
    }
    return setCart(newCart);
  };
  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        clearCart,
        removeItem,
        incrementQuantity,
        decrementQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
