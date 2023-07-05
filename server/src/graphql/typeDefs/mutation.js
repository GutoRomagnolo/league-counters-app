const { gql } = require("apollo-server");

const mutation = gql`
  type Mutation {
    createChampion(champion: ChampionInput): Champion
    updateChampion(id: String, champion: ChampionInput): Champion
    deleteChampion(id: String): Champion
  }

  input ChampionInput {
    name: String
    title: String
    image: String
    counters: CountersInput
  }

  input NutritionsInput {
    champion: ChampionInput
    severity: String
    description: String
  }
`;

module.exports = mutation;
