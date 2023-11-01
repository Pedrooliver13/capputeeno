// Packages
import { produce } from 'immer';

// Services
import { Product } from 'services/products';

// Reducers
import { ActionTypes } from './action';

interface productState {
  listCart: Array<Product>;
}

export const productReducers = (state: productState, action: any) => {
  switch (action.type) {
    case ActionTypes.ADD_PRODUCT_IN_CART:
      return produce(state, (draft) => {
        draft.listCart.push(action.payload.product);
      });

    case ActionTypes.UPDATE_PRODUCT_IN_CART:
      return produce(state, (draft) => {
        draft.listCart = action.payload.productList;
      });

    case ActionTypes.REMOVE_PRODUCT_IN_CART:
      const productFiltered = state.listCart.filter(
        (product) => product.id !== action.payload.productId
      );

      return produce(state, (draft) => {
        draft.listCart = productFiltered;
      });

    default:
      return state;
  }
};
