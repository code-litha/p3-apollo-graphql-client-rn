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

export const GET_PRODUCT = gql`
  query Products($id: ID!) {
    product(id: $id) {
      id
      name
      description
      price
      mainImg
      categoryId
      authorId
      Images {
        id
        productId
        imgUrl
      }
    }
  }
`;

export const ADD_PRODUCT = gql`
  mutation Mutation($newProduct: ProductInput!) {
    createProduct(newProduct: $newProduct) {
      id
      name
      mainImg
    }
  }
`;
