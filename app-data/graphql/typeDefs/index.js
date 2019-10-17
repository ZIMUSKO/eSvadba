import gql from 'graphql-tag';

export default gql`
  extend type Query {
    lang: String!
  }
  extend type Mutation {
    toggleLang(lang: String!): String
  }
`;
