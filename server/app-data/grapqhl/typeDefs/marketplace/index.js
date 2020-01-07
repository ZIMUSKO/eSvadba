import { gql } from 'apollo-server-express';
import types from './types';

const marketplaceTypedefs = gql`
    
    extend type Query {
        getMarketplaceCategories: [MarketplaceCategory!]!
        getMarketplaceCategory(id:ID!): MarketplaceCategory
        getSubCategories(id: ID!): [MarketplaceCategory!]!
        getMarketplacePostsForCategory(id: ID!):[MarketplaceItem]!
        
        getMarketplacePost(id: ID!): MarketplaceItem
        getMarketplaceItemsOfUser(userId: ID!): [MarketplaceItem]!
    }

    extend type Mutation {
        createMarketplaceCategory(data: MarketplaceCategoryInput): MarketplaceCategory! @auth(requiredRole: "Administrator")
        updateMarketplaceCategory(id: ID!, name: String!): MarketplaceCategory! @auth(requiredRole: "Administrator")
        deleteMarketplaceCategory(id: ID!): Boolean @auth(requiredRole: "Administrator")

        createMarketplacePost(data: MarketplaceInputItem!): MarketplaceItem! @auth
        updateMarketplacePost(id: ID!, data: MarketplaceUpdateItem!): MarketplaceItem! @auth
        deleteMarketplacePost(id: ID!): Boolean! @auth


    }
`;

export default [
  types,
  marketplaceTypedefs,
];
