import { gql } from 'apollo-server-express';

export default gql`
    input MarketplaceInputItem {
        title: String!
        category: String!
        description: String!
        price: Int!
        phone: String!
        email: String!
    }

    input MarketplaceUpdateItem {
        title: String
        category: String
        description: String
        price: Int
        phone: String
        email: String
        active: Boolean
    }


    type MarketplaceItem {
        id: ID!
        postAuthor: ID!
        category: String!
        title: String!
        description: String!
        price: Int!
        phone: String!
        email: String!
        images: [String]!
        createdAt: Date!
        active: Boolean!
        countOfViews: Int!
    }

    type MarketplaceCategory {
        id: ID!
        name: String!
        countOfProducts: Int!
        parentCategory: MarketplaceCategory
    }

    input MarketplaceCategoryInput {
        name: String!
        parentCategory: ID
    }
`;
