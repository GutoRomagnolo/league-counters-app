const { gql } = require("apollo-server");
const types = gql`
  type Champion {
    id: ID!
    name: String
    title: String
    image: String
    counters: Counters
  }

  type Counters {
    id: ID!
    champion: Champion
    severity: String
    description: String
  }
`;
module.exports = types;