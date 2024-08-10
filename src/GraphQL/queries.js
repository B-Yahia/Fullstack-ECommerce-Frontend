import { gql } from "@apollo/client";

export const GET_PRODUCTS = gql`
  query GetProducts($category: String = "all") {
    products(category: $category) {
      id
      name
      inStock
      gallery
      prices {
        amount
        currency {
          symbol
        }
      }
      attributes {
        id
        name
        type
        items {
          id
          value
          displayValue
        }
      }
    }
  }
`;

export const GET_PRODUCT = gql`
  query ($id: ID!) {
    product(id: $id) {
      id
      name
      inStock
      gallery
      prices {
        amount
        currency {
          symbol
        }
      }
      attributes {
        id
        name
        type
        items {
          id
          value
          displayValue
        }
      }
      description
      brand
    }
  }
`;
