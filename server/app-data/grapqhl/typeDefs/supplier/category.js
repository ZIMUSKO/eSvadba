import { gql } from 'apollo-server-express';

export default gql`
    extend type Query {
        categories: [SupplierCategory!]!
        cat(id: ID!): SupplierCategory
    }

    extend type Mutation {
        createCategory(name: String!, description: String!): SupplierCategory!
        updateCategory(id: String!, data: String!): SupplierCategory!
        deleteCategory(id: ID!) : String!
    }

    type SupplierCategory {
        id: ID!
        name: String!
        description: String!
    }
`
