const graphql = require(`graphql`);
const Like = require(`../../models/like`);
const {LikeType} = require(`../types`);

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
    resolve: async (parent, args) => {
        const {userId, userIdLiked} = args;

        try {
            const alreadyExistedLike = await Like.findOne({userId, userIdLiked});

            if (alreadyExistedLike) {
                return await alreadyExistedLike.updateOne({_id: alreadyExistedLike._id});
            }

            const like = new Like({
                userId,
                userIdLiked
            });

            return await like.save();
        } catch (err) {
            throw err;
        }
    }
};

const removeLike = {
    type: LikeType,
    args: {
        id: {type: new GraphQLNonNull(GraphQLID)}
    },
    resolve(parent, args) {
        const {id} = args;

        return Like.findById(id)
            .then(like => {
                return like.remove();
            })
            .catch(err => {
                throw err;
            });
    }
};

module.exports = {
    addLike,
    removeLike
};

