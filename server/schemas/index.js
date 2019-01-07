const graphql = require(`graphql`);
const Mutations = require(`./mutations/index`);
const Queries = require(`./queries/index`);

const {GraphQLSchema} = graphql;

module.exports = new GraphQLSchema({
    query: Queries,
    mutation: Mutations
});
