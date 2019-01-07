const graphql = require(`graphql`);
const {user} = require(`./user`);
const {like} = require(`./like`);

const {GraphQLObjectType} = graphql;

const Queries = new GraphQLObjectType({
    name: `Queries`,
    fields: {
        user,
        like
    }
});

module.exports = Queries;
