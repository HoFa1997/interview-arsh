import { IProduct } from "@/api/type";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface CartState {
  cart: IProduct[];
  addToCart: (by: IProduct) => void;
}

export const useCartStore = create<CartState>()(
  devtools(
    persist(
      (set) => ({
        cart: [],
        addToCart: (by) => set((state) => ({ cart: [...state.cart, by] })),
      }),
      {
        name: "cart-storage",
      }
    )
  )
);
