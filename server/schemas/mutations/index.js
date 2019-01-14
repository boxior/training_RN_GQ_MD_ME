const graphql = require(`graphql`);
const likeMutations = require(`./like`);
const userMutations = require(`./user`);
const matchMutations = require(`./match`);

const {GraphQLObjectType} = graphql;

const Mutations = new GraphQLObjectType({
    name: `Mutation`,
    fields: {
        ...likeMutations,
        ...userMutations,
        ...matchMutations
    }
});

module.exports = Mutations;
