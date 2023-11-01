// Services
import { fetchData } from 'services';
import { getOneProductQuery } from 'services/queries/products';

export interface Product {
  id: string;
  name: string;
  description: string;
  category: string;
  image_url: string;
  created_at: string;
  price_in_cents: number;
  sales: number;
  quantity: number;
}

export interface GetAllProductsResponse {
  data: {
    allProducts: Array<Product>;
    total: {
      count: number;
    };
  };
}

export interface GetOneProductResponse {
  data: {
    product: Product;
  };
}

interface GetOneFetchProps {
  id: string;
  cache?: RequestCache;
}

export interface GetAllProductsOperation extends GetAllProductsResponse {
  variables: {
    filter?: any;
    sortField?: string | null;
    sortOrder?: any;
    page?: number;
    perPage?: number;
  };
}

interface GetOneProductOperation extends GetOneProductResponse {
  variables: {
    id: string;
  };
}

export const getOneProduct = async (
  props: GetOneFetchProps
): Promise<GetOneProductResponse> => {
  const res = await fetchData<GetOneProductOperation>({
    query: getOneProductQuery,
    tags: ['product'],
    variables: {
      ...props,
    },
    cache: 'force-cache',
  });

  return res.body;
};
