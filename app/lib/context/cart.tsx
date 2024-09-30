import { createContext, useState } from "react";
import type { Dish } from "@types";
import type { ListedDish } from "@types";

export const CartContext = createContext({
  cart: [] as ListedDish[],
  addToCart: (dish: ListedDish) => {
    dish;
  },
  clearCart: () => {},
  removeItem: (dish: ListedDish) => {
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
  const [cart, setCart] = useState<ListedDish[]>([]);

  const addToCart = (dish: ListedDish) => {
    const newCart = structuredClone(cart);
    const dishInCart = newCart.findIndex(
      (item: ListedDish) => item.id === dish.id
    );
    if (dishInCart >= 0) {
      newCart[dishInCart].quantity = newCart[dishInCart].quantity! + 1;
      return setCart(newCart);
    }
    setCart((prevState: ListedDish[]) => [
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

  const removeItem = (dish: ListedDish) => {
    return setCart((prevState) => {
      return prevState.filter((item: ListedDish) => item.id !== dish.id);
    });
  };

  const incrementQuantity = (dishId: string) => {
    const isDishInCart = cart.findIndex(
      (item: ListedDish) => item.id === dishId
    );
    const newCart = structuredClone(cart);
    if (isDishInCart >= 0) {
      newCart[isDishInCart].quantity = newCart[isDishInCart].quantity! + 1;
    }
    return setCart(newCart);
  };

  const decrementQuantity = (dishId: string) => {
    const isDishInCart = cart.findIndex(
      (item: ListedDish) => item.id === dishId
    );
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
