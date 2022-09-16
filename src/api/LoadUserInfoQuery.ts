import { gql } from "@apollo/client";

export const LoadUserInfoQuery = gql`
  query LoadUserInfo {
    currentUser {
      id
      firstName
      secondName
      email
    }
  }
`;


