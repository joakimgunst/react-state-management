import { gql } from "apollo-server-micro";

export const typeDefs = gql`
  type Todo {
    id: ID!
    text: String!
    completed: Boolean!
  }

  type Query {
    getTodos: [Todo!]!
  }
`;
