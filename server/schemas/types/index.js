const graphql = require(`graphql`);
const User = require(`../../models/user`);
const Like = require(`../../models/like`);

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLInt,
    GraphQLList
} = graphql;

const UserType = new GraphQLObjectType({
    name: `User`,
    fields: () => ({
        id: {type: GraphQLID},
        email: {type: GraphQLString},
        password: {type: GraphQLString},
        name: {type: GraphQLString},
        age: {type: GraphQLInt},
        genre: {type: GraphQLString},
        likes: {
            type: new GraphQLList(LikeType),
            resolve(parent, args) {
                return Like.find({userId: parent.id});
            }
        }
    })
});

const LikeType = new GraphQLObjectType({
    name: `Like`,
    fields: () => ({
        id: {type: GraphQLID},
        user: {
            type: UserType,
            resolve(parent, args) {
                return User.findById(parent.userId);
            }
        },
        userLiked: {
            type: UserType,
            resolve(parent, args) {
                return User.findById(parent.userIdLiked);
            }
        },
        createdAt: {
            type: GraphQLString,
            resolve(parent, args) {
                return parent.createdAt;
            }
        },
        updatedAt: {
            type: GraphQLString,
            resolve(parent, args) {
                return parent.updatedAt;
            }
        }
    })
});

module.exports = {
    UserType,
    LikeType
};

