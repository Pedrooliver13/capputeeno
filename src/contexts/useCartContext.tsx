'use client';

// Hooks
import { useLocalStorage } from 'hooks/useLocalStorage';

// Packages
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useReducer,
} from 'react';

// Reducers
import {
  addProductInCartAction,
  updateProductInCartAction,
  removeProductInCartAction,
} from 'reducers/action';
import { productReducers } from 'reducers/reducer';

// Services
import { Product } from 'services/products';

export type CartContextProps = {
  listCart: Array<Product>;
  addProductInCart: (value: Product) => void;
  updateProductInCart: (value: Array<Product>) => void;
  removeProductInCart: (id: string) => void;
};

interface CartContextProviderProps {
  children: ReactNode;
}

const CartContext = createContext({} as CartContextProps);

const CartContextProvider = ({ children }: CartContextProviderProps) => {
  const { value } = useLocalStorage('@capputeeno:cart-state-1.0.0', []);

  const [CartState, dispatch] = useReducer(productReducers, {
    listCart: [],
  });

  const { listCart } = CartState;

  const addProductInCart = (product: Product): void => {
    if (!product) return;
    dispatch(addProductInCartAction(product));
  };

  const updateProductInCart = (productList: Array<Product>): void => {
    dispatch(updateProductInCartAction(productList));
  };

  const removeProductInCart = (productId: string): void => {
    dispatch(removeProductInCartAction(productId));
  };

  useEffect(() => {
    if (value) {
      dispatch(updateProductInCartAction(value));
    }
  }, [value]);

  return (
    <CartContext.Provider
      value={{
        listCart,
        addProductInCart,
        updateProductInCart,
        removeProductInCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => useContext(CartContext);

export { CartContext, CartContextProvider, useCartContext };
