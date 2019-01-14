const graphql = require(`graphql`);
const Match = require(`../../models/match`);
const {MatchType} = require(`../types`);

const {
    GraphQLID
} = graphql;

const match = {
    type: MatchType,
    args: {id: {type: GraphQLID}},
    resolve(parent, args) {
        return Match.findById(args.id);
    }
};

module.exports = {
    match
};

