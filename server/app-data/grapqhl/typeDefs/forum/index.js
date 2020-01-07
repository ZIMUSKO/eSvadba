import { gql } from 'apollo-server-express';

export default gql`

    input ForumInputItem {
        postTitle: String!
        postCategory: String!
        postDescription: String!
    }
    
    input ForumUpdateItem {
        postTitle: String
        postCategory: String
        postDescription: String
    }

    type ForumComment {
        idUser: ID!
        content: String!
        createdAt: Date!
    }

    type ForumItem {
        id: ID!
        postAuthor: ID!
        postTitle: String!
        postCategory: String!
        postDescription: String!
        createdAt: Date!
        countOfComments: Int!
        countOfViews: Int!
        media: [Media]!
        tags: [String!]!
        comments: [ForumComment!]!

    }

    extend type Query {
        getForumPost(id: ID!): ForumItem
    }

    extend type Mutation {
        createForumPost(data: ForumInputItem!): ForumItem! @auth
        updateForumPost(id: ID!, data: ForumUpdateItem!): ForumItem! @auth
        commentForumPost(id: ID!, comment: String!): ForumItem! @auth
        deleteForumPost(id: ID!): Boolean! @auth
    }
`;
