import { gql } from 'apollo-server-express';

const customerData = gql`
    type Checklist {
        title: String!
        isCompleted: Boolean!
        vendorCategory: String!
        timeframe: String!
        description: String!
    }

    type VendorManager {
        categoryName: String!
        status: String!
        idVendor: ID!
    }

    type SeatingTable {
        name: String!
        type: String!
        xPos: String!
        yPos: String!
        guestList: [String]
    }

    type Seating {
        unassignedGuests: [String!]!
        tables: [SeatingTable!]
    }


    type CustomerData {
        checklist: [Checklist!]
        vendorManager: [VendorManager!]
        seating: Seating!
    }
`;

export default [
  customerData,
];
