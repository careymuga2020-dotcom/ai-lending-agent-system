const typeDefs = gql`
  type LoanApplication {
    id: ID!
    name: String!
    amount: Float!
    status: String!
  }

  type Query {
    hello: String
    applications: [LoanApplication]
  }

  type Mutation {
    submitApplication(name: String!, amount: Float!): LoanApplication
  }
`;
