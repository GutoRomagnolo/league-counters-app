const { gql } = require("apollo-server");
const query = gql`
  type Query {
    champions: [Champion]
    champion(id: ID!): Champion
  }
`;
module.exports = query;