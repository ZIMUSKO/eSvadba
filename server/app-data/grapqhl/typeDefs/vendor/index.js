import { gql } from 'apollo-server-express';
import vendorCategory from './category';


const vendorData = gql`  
    type Faq {
        question: String!
        answer: String!
    }

    type Media {
        mediaType: String!
        pathUrl: String!
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

    type Address {
        addressLine1: String
        addressLine2: String
        city: String
        zipCode: String
        state: String
        location: Location
    }

    type SocialMedia {
        facebook: String
        instagram: String
        pinterest: String
        youtube: String
        vimeo: String
    }
    
    type VendorData {
        name: String,
        category: VendorCategory!
        verified: Boolean!
        phone: String
        website: String
        email: String
        bio: String
        media: [Media!]
        address: Address
        #        openingHours: {}
        pricingFrom: Float
        pricing: String
        faq: [Faq!]
        review: [Review]
        rating: Float!
        countOfViews: Int!
        countOfReviews: Int!
        countOfMessages: Int!
        countOfPhoneViews: Int!
        countOfWebsiteClicks: Int!
        socialMedia: SocialMedia
        #        deals: {}
        #        availability
        inspirations: [ID]
        events: [ID]
    }
`;

export default [
  vendorData,
  vendorCategory,
];
