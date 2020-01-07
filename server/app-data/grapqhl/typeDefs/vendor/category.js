import { gql } from 'apollo-server-express';

export default gql`
    extend type Query {
        categories: [VendorCategory!]!
        cat(id: ID!): VendorCategory
    }

    extend type Mutation {
        createCategory(name: String!, description: String!): VendorCategory!
        updateCategory(id: String!, data: String!): VendorCategory!
        deleteCategory(id: ID!) : String!
    }

    type VendorCategory {
        id: ID!
        name: String!
        description: String!
    }
`;
