const graphql = require(`graphql`);
const Like = require(`../../models/like`);
const {LikeType} = require(`../types`);

const {
    GraphQLID
} = graphql;

const like = {
    type: LikeType,
    args: {id: {type: GraphQLID}},
    resolve(parent, args) {
        return Like.findById(args.id);
    }
};

module.exports = {
    like
};

