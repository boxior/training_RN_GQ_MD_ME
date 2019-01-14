const graphql = require(`graphql`);
const userQueries = require(`./user`);
const likeQueries = require(`./like`);
const matchQueries = require(`./match`);

const {GraphQLObjectType} = graphql;

const Queries = new GraphQLObjectType({
    name: `Queries`,
    fields: {
        ...userQueries,
        ...likeQueries,
        ...matchQueries
    }
});

module.exports = Queries;
