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
let applications: any[] = [];

const resolvers = {
  Query: {
    hello: () => "AI Lending API is running 🚀",
    applications: () => applications,
  },
  Mutation: {
    submitApplication: (_: any, { name, amount }: any) => {
      const newApp = {
        id: Date.now().toString(),
        name,
        amount,
        status: "PENDING",
      };

      applications.push(newApp);

      return newApp;
    },
  },
};
