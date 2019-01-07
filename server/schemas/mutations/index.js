const graphql = require(`graphql`);
const {addLike} = require(`./like`);
const {addUser} = require(`./user`);

const {GraphQLObjectType} = graphql;

const Mutations = new GraphQLObjectType({
    name: `Mutation`,
    fields: {
        addLike,
        addUser
    }
});

module.exports = Mutations;
