const graphql = require(`graphql`);
const Match = require(`../../models/match`);
const {MatchType} = require(`../types`);

const {
    GraphQLID,
    GraphQLNonNull
} = graphql;

const addMatch = {
    type: MatchType,
    args: {
        userIdFirstLike: {type: new GraphQLNonNull(GraphQLID)},
        userIdSecondLike: {type: new GraphQLNonNull(GraphQLID)}
    },
    resolve: async (parent, args) => {
        const {userIdFirstLike, userIdSecondLike} = args;

        const alreadyExistedMatch = await Match.findOne({userIdFirstLike, userIdSecondLike});
        
        if (alreadyExistedMatch) {
            return await alreadyExistedMatch.updateOne({_id: alreadyExistedMatch._id});
        }
        
        const match = new Match({
            userIdFirstLike,
            userIdSecondLike
        });

        return await match.save();
    }
};

const removeMatch = {
    type: MatchType,
    args: {
        id: {type: new GraphQLNonNull(GraphQLID)}
    },
    resolve(parent, args) {
        const {id} = args;

        return Match.findById(id)
            .then(match => {
                return match.remove();
            })
            .catch(err => {
                throw err;
            });
    }
};

module.exports = {
    addMatch,
    removeMatch
};

