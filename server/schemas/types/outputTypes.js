const graphql = require(`graphql`);

const {
    GraphQLString,
    GraphQLObjectType,
    GraphQLInt
} = graphql;

const DistanceOutputType = new GraphQLObjectType({
    name: `DistanceOutputType`,
    fields: () => ({
        unit: { type: GraphQLString },
        max: { type: GraphQLInt }
    })
});

const AgeRangeOutputType = new GraphQLObjectType({
    name: `AgeRangeOutputType`,
    fields: () => ({
        min: { type: GraphQLInt },
        max: { type: GraphQLInt }
    })
});

module.exports = {
    DistanceOutputType,
    AgeRangeOutputType
};
