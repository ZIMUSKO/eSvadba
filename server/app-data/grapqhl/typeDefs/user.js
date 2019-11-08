import { gql } from 'apollo-server-express';

export default gql`
    scalar Date
    
    extend type Query {
        users: [User!]!  @auth
        user(id: ID!): User  @auth
        me: User @auth(fetchUser: true) 
    }

    extend type Mutation {
        signUp(username: String!, email: String!, password: String!, type: String!): User @guest
        signIn(email: String!, password: String!): User @guest
        signOut: Boolean  @auth
    }
    
    type Faq {
        question: String!
        answer: String!
    }
    
    type Media {
        type: String!
        url: String!
    }
    
    type Review {
        postedBy: ID!
        createdAt: Date!
        text: String!
        overallRating: Float!
        qualityOfService: Float!
        responsivness: Float!
        value: Float!
        professionalism: Float!
        flexibility: Float!
    }
    
    type Location {
        type: String!
        coordinates: [Float!]!
    }
    
    type VendorData {
        category: VendorCategory
        verified: String!
        phone: String
        website: String
        bio: String
        rating: Float,
        faq: [Faq!]
        media: [Media!]
        reviews: [Review]
        location: Location
        
        
        
    }

    type User {
        id: ID!
        name: String
        email: String!
        vendorData: VendorData
    }
`;
