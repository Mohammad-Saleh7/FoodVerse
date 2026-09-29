import { create } from "zustand";

export interface CartItem {
  id: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  increaseQuantity: (id: string) => void;
  decreaseQuantity: (id: string) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartState>(() => ({
  items: [],

  addItem: () => {},
  removeItem: () => {},
  increaseQuantity: () => {},
  decreaseQuantity: () => {},
  clearCart: () => {},
}));
