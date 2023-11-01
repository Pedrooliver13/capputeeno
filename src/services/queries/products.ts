// Services
import {
  productFragment,
  productListFragment,
} from 'services/fragments/product';

export const getAllProductsQuery = /* GraphQL */ `
  ${productListFragment}

  query GET_PRODUCTS_ALL(
    $filter: ProductFilter
    $sortField: String
    $sortOrder: String
    $page: Int
    $perPage: Int
  ) {
    allProducts(
      filter: $filter
      sortField: $sortField
      sortOrder: $sortOrder
      page: $page
      perPage: $perPage
    ) {
      ...product
    }
    total: _allProductsMeta(filter: $filter) {
      count
    }
  }
`;

export const getOneProductQuery = /* GraphQL */ `
  ${productFragment}

  query GET_ONE_PRODUCT($id: ID!) {
    product: Product(id: $id) {
      ...product
    }
  }
`;
