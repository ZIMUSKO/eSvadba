const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type dummyData {
    _id: String
    value: String
  }
  type Query {
    dummyQuery: [dummyData]
  }
  schema {
    query: Query
  }
`;

module.exports = typeDefs;