import { gql } from 'apollo-server-express';

export default gql`
    scalar Date
    
    extend type Query {
        users: [User!]!  @auth
        user(id: ID!): User  @auth
        me: User @auth(fetchUser: true) 
    }

    extend type Mutation {
        signUp(username: String!, email: String!, password: String!, roleName: String!): User @guest
        signIn(email: String!, password: String!): User @guest
        signOut: Boolean  @auth
    }

    type User {
        id: ID!
        name: String
        email: String!
        vendorData: VendorData
        customerData: CustomerData
    }
`;
