/* eslint-disable import/prefer-default-export */
import gql from 'graphql-tag';

export const toggleLangMutation = gql`
  mutation toggleLang($lang: String!) {
    toggleLang(lang: $lang) @client
  }
`;
export const registerUserMutation = gql`
mutation signUp(
  $username: String!
  $email: String!
  $password: String!
  $roleName: String!
) {
  signUp(
    username:$username
    email:$email
    password:$password
    roleName:$roleName
  ){
    id
    name
    email
  }
}
`;
export const loginUserMutation = gql`
mutation signIn(
  $email: String!,
  $password: String!
) {
  signIn(
    email: $email,
    password: $password
  ) {
    id
    name
  }
}
`;