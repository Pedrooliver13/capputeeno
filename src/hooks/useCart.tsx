// Packages
import { useMemo } from 'react';

// Contexts
import { useCartContext } from 'contexts/useCartContext';

export const useCart = () => {
  const { listCart } = useCartContext();

  const totalPriceInCents = useMemo(() => {
    return listCart.reduce((acc, product) => {
      return acc + product?.price_in_cents * product?.quantity;
    }, 0);
  }, [listCart]);

  const totalProductsInCart = useMemo(() => {
    return listCart.reduce((acc, product) => {
      return acc + product.quantity;
    }, 0);
  }, [listCart]);

  const defaultDeliveryValue = totalPriceInCents < 90000 ? 4000 : 0;

  const totalPriceWithDeliveryInCents = useMemo(() => {
    return totalPriceInCents + defaultDeliveryValue;
  }, [totalPriceInCents, defaultDeliveryValue]);

  return {
    defaultDeliveryValue,
    totalPriceInCents,
    totalProductsInCart,
    totalPriceWithDeliveryInCents,
  };
};
