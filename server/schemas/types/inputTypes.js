const graphql = require(`graphql`);

const {
    GraphQLString,
    GraphQLInt,
    GraphQLInputObjectType,
    GraphQLNonNull,
    GraphQLID
} = graphql;

const DistanceInputType = new GraphQLInputObjectType({
    name: `DistanceInputType`,
    fields: () => ({
        unit: {type: GraphQLString},
        max: {type: GraphQLInt}
    })
});

const AgeRangeInputType = new GraphQLInputObjectType({
    name: `AgeRangeInputType`,
    fields: () => ({
        min: {type: GraphQLInt},
        max: {type: GraphQLInt}
    })
});

const UserInputType = new GraphQLInputObjectType({
    name: `UserInputType`,
    fields: {
        id: {type: new GraphQLNonNull(GraphQLID)},
        email: {type: GraphQLString},
        password: {type: GraphQLString},
        name: {type: GraphQLString},
        age: {type: GraphQLInt},
        gender: {type: GraphQLString},
        showMe: {type: GraphQLString},
        distance: {type: DistanceInputType},
        ageRange: {type: AgeRangeInputType}
    }
});

module.exports = {
    DistanceInputType,
    AgeRangeInputType,
    UserInputType
};
