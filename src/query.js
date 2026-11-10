import { gql } from "@apollo/client";

export const USER_QUERY = gql`
  {
    users {
      data {
        id
        name
        email
      }
    }
  }
`;

export const USER_QUERY_BY_ID = gql`
query Query($id: ID!) {
    user(id: $id) {
      id
      name
      email
    }
}
`;

export const CREATE_USER = gql`
  mutation CreateUser($input: CreateUserInput!) {
    createUser(input: $input) {
      id
      name
      email
    }
  }
`;