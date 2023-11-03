// Packages
import { ChangeEvent, ReactElement } from 'react';
import Image from 'next/image';
import { toast } from 'react-toastify';
import { Trash as TrashIcon } from 'phosphor-react';

// Services
import { Product } from 'services/products';

// Contexts
import { useCartContext } from 'contexts/useCartContext';

// Hooks
import { useLocalStorage } from 'hooks/useLocalStorage';

// Utils
import { formatCurrency } from 'utils/formatCurrency';

// Styles
import * as Styled from './styles';

type CartCardProps = Product;

export const CartCard = (props: CartCardProps): ReactElement => {
  const { listCart, updateProductInCart, removeProductInCart } =
    useCartContext();

  const { updateLocalStorage } = useLocalStorage<Array<Product>>(
    '@capputeeno:cart-state-1.0.0',
    []
  );

  const handleClickRemove = (id: string): void => {
    removeProductInCart(id);

    const removeProduct = listCart.filter((product) => product.id !== id);
    updateLocalStorage(removeProduct);

    toast('Produto removido com sucesso!', { type: 'success', theme: 'dark' });
  };

  const handleChangeQuantity = (event: ChangeEvent<HTMLSelectElement>) => {
    const updatedList = listCart.map((product) => {
      if (product.id !== props.id) {
        return product;
      }

      return {
        ...product,
        quantity: Number(event.target.value),
      };
    });

    updateProductInCart(updatedList);
    updateLocalStorage(updatedList);
  };

  return (
    <Styled.CartCardComponent data-cy="cart-card">
      <Image
        src={props?.image_url}
        alt={props?.category}
        width={256}
        height={211}
        priority
      />

      <div className="content">
        <div className="content__header">
          <h2 className="content__header--title">{props?.name}</h2>
          <TrashIcon size={24} onClick={() => handleClickRemove(props?.id)} />
        </div>
        <p className="content__description">{props?.description}</p>

        <div className="content__footer">
          <select
            name="quantity"
            defaultValue={props?.quantity}
            onChange={handleChangeQuantity}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>

          <div className="content__footer--price">
            {formatCurrency(props?.price_in_cents)}
          </div>
        </div>
      </div>
    </Styled.CartCardComponent>
  );
};
