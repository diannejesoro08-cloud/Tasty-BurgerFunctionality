import {
  createContext,
  useContext,
  useEffect,
  useState,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
} from "react";
import type { CartItemProps } from "@/types";

interface ContextProps {
  cart: CartItemProps[];
  setCart: Dispatch<SetStateAction<CartItemProps[]>>;
  updateCart: (newCart: CartItemProps[]) => void;
  favorites: number[];
  toggleFavorite: (id: number) => void;
}

const GlobalContext = createContext<ContextProps | undefined>(undefined);

export function GlobalContextProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItemProps[]>([]);
  const [favorites, setFavorites] = useState<number[]>([]);

  useEffect(() => {
    const storedCart = localStorage.getItem("tastyBurgerCart");
    const storedFavorites = localStorage.getItem("tastyBurgerFavorites");
    if (storedCart) setCart(JSON.parse(storedCart) as CartItemProps[]);
    if (storedFavorites) setFavorites(JSON.parse(storedFavorites) as number[]);
  }, []);

  const updateCart = (newCart: CartItemProps[]) => {
    setCart(newCart);
    localStorage.setItem("tastyBurgerCart", JSON.stringify(newCart));
  };

  const toggleFavorite = (id: number) => {
    setFavorites((current) => {
      const next = current.includes(id)
        ? current.filter((favoriteId) => favoriteId !== id)
        : [...current, id];
      localStorage.setItem("tastyBurgerFavorites", JSON.stringify(next));
      return next;
    });
  };

  return (
    <GlobalContext.Provider value={{ cart, setCart, updateCart, favorites, toggleFavorite }}>
      {children}
    </GlobalContext.Provider>
  );
}

export function useGlobalContext() {
  const context = useContext(GlobalContext);
  if (!context) throw new Error("useGlobalContext must be used inside GlobalContextProvider");
  return context;
}
