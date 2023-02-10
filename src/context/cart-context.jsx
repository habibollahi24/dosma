import { createContext, useContext, useReducer } from "react";

const CartProvider = createContext();

const initialState = {
   cart: [
      { id: 1, title: "تعمیر اتو", price: 110000 },
      { id: 2, title: "تعمیر یخچال", price: 130000 },
   ],
};

const reducer = (state, action) => {};

const CartContext = ({ children }) => {
   const [state, dispatch] = useReducer(reducer, initialState);
   return <CartProvider.Provider value={{ state, dispatch }}>{children}</CartProvider.Provider>;
};

export const useCart = () => useContext(CartProvider);
export default CartContext;
