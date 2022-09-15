const { gql } = require("apollo-server");

const typeDefs = gql`
  # schema definitions go here

  "A track is a group of modules that teaches about a specific topic"
  type Track {
    id: ID!
    title: String!
    author: Author!
    thumbnail: String
    length: Int
    modulesCount: Int
  }

  "Author of a complete Track or a Module"
  type Author {
    id: ID!
    name: String!
    photo: String
  }

  type Query {
    "Get all tracks"
    tracks: [Track!]!
  }
`;

module.exports = typeDefs;
