import { gql } from "@apollo/client";

export const GET_PRODUCTS = gql`
  query Products {
    products {
      id
      mainImg
      name
      price
    }
  }
`;

export const GET_PRODUCT_DETAIL = gql`
  query Product($productId: ID!) {
    product(id: $productId) {
      id
      mainImg
      name
      price
    }
  }
`;

export const ADD_PRODUCT = gql`
  mutation CreateProduct($newProduct: ProductInput!) {
    createProduct(newProduct: $newProduct) {
      id
      mainImg
      name
    }
  }
`;
