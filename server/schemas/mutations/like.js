const graphql = require(`graphql`);
const User = require(`../../models/user`);
const Like = require(`../../models/like`);
const {LikeType} = require(`../types`);
const _ = require(`lodash`);

const {
    GraphQLID,
    GraphQLNonNull
} = graphql;

const addLike = {
    type: LikeType,
    args: {
        userId: {type: new GraphQLNonNull(GraphQLID)},
        userIdLiked: {type: new GraphQLNonNull(GraphQLID)}
    },
    resolve(parent, args) {
        const {userId, userIdLiked} = args;

        const like = new Like({
            userId,
            userIdLiked
        });
        
        return like.save();
    }
};

module.exports = {
    addLike
};

