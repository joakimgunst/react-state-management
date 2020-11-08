import { ApolloServer, gql } from "apollo-server-micro";
import * as db from "db";

const typeDefs = gql`
  type Todo {
    id: ID!
    text: String!
    completed: Boolean!
  }

  type Query {
    todos: [Todo!]!
  }
`;

const resolvers = {
  Query: {
    todos: async () => {
      return await db.getTodos();
    },
  },
};

const apolloServer = new ApolloServer({ typeDefs, resolvers });

export const config = {
  api: {
    bodyParser: false,
  },
};

export default apolloServer.createHandler({ path: "/api/graphql" });
