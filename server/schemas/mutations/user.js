const graphql = require(`graphql`);
const User = require(`../../models/user`);
const {UserType} = require(`../types`);

const {
    GraphQLString,
    GraphQLNonNull
} = graphql;

const addUser = {
    type: UserType,
    args: {
        email: {type: new GraphQLNonNull(GraphQLString)},
        password: {type: new GraphQLNonNull(GraphQLString)}
    },
    resolve(parent, args) {
        const user = new User({
            email: args.email,
            password: args.password
        });
        return user.save();
    }
};

module.exports = {
    addUser
};

