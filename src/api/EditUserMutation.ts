import { gql } from "@apollo/client";

export const EditUserMutation = gql`
  mutation EditUser(
    $id: Int!
    $email: String!
    $firstName: String!
    $secondName: String!
    $password: String
  ) {
    editUser(
      id: $id
      email: $email
      firstName: $firstName
      secondName: $secondName
      password: $password
    ) {
      id
    }
  }
`;
