export const productFragment = /* GraphQL */ `
  fragment product on Product {
    id
    name
    description
    category
    image_url
    created_at
    price_in_cents
    sales
  }
`;

export const productListFragment = /* GraphQL */ `
  fragment product on Product {
    id
    name
    image_url
    category
    price_in_cents
  }
`;
