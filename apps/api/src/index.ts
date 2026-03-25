import { evaluateRisk } from "../../agent/src/riskAgent";
import { ApolloServer, gql } from "apollo-server";
const typeDefs = gql`
  type LoanApplication {
    id: ID!
    name: String!
    amount: Float!
    status: String!
  }

  type Query {
    applications: [LoanApplication]
  }

  type Mutation {
    submitApplication(name: String!, amount: Float!): LoanApplication
  }
`;

let applications: any[] = [];

const resolvers = {
  Query: {
    applications: () => applications,
  },
 Mutation: {
  submitApplication: (_, { name, amount }) => {
    const result = evaluateRisk({ name, amount });

    const application = {
      id: Date.now().toString(),
      name,
      amount,
      status: result.decision,
    };

    applications.push(application);

    return application;
  },
}
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

const server = new ApolloServer({ typeDefs, resolvers });

server.listen({ port: 4000 }).then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
