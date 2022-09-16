import { gql } from "@apollo/client";

export const SignUpMutation = gql`
mutation Signup(
  $firstName: String!
  $secondName: String!
  $email: String!
  $password: String!
) {
  signup(
    firstName: $firstName
    secondName: $secondName
    email: $email
    password: $password
  )
}
`;