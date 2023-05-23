import { gql } from "@apollo/client";

export const GET_PRODUCTS = gql`
  query Products {
    products {
      id
      name
      price
      mainImg
    }
  }
`;

export const GET_PRODUCT = gql`
  query Products($productId: ID!) {
    product(id: $productId) {
      id
      name
      description
      price
      mainImg
      authorId
      Images {
        id
        productId
        imgUrl
      }
    }
  }
`;

export const CREATE_PRODUCT = gql`
  mutation Mutation($newProduct: ProductInput!) {
    createProduct(newProduct: $newProduct) {
      id
      name
    }
  }
`;
