const graphql = require(`graphql`);
const Like = require(`../../models/like`);
const Match = require(`../../models/match`);
const User = require(`../../models/user`);
const {DistanceOutputType, AgeRangeOutputType} = require(`./outputTypes`);

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
        showMe: {type: GraphQLString},
        distance: {type: DistanceOutputType},
        ageRange: {type: AgeRangeOutputType},
        myLikes: {
            type: new GraphQLList(LikeType),
            resolve(parent, args) {
                return Like.find({userId: parent.id});
            }
        },
        meLikes:
            {
                type: new GraphQLList(LikeType),
                resolve(parent, args) {
                    return Like.find({userIdLiked: parent.id});
                }
            },
        matches: {
            type: new GraphQLList(MatchType),
            resolve:
                async (parent, args) => {
                    const matchFirstLike = await Match.find({userIdFirstLike: parent.id});
                    const matchSecondLike = await Match.find({userIdSecondLike: parent.id});

                    return [...matchFirstLike, ...matchSecondLike];
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

const MatchType = new GraphQLObjectType({
    name: `Match`,
    fields: () => ({
        id: {type: GraphQLID},
        userFirstLike: {
            type: UserType,
            resolve(parent, args) {
                return User.findById(parent.userIdFirstLike);
            }
        },
        userSecondLike: {
            type: UserType,
            resolve(parent, args) {
                return User.findById(parent.userIdSecondLike);
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
    LikeType,
    MatchType
};
