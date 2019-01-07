const graphql = require(`graphql`);
const User = require(`../../models/user`);
const {UserType} = require(`../types`);

const {
    GraphQLID
} = graphql;

const user = {
    type: UserType,
    args: {id: {type: GraphQLID}},
    resolve(parent, args) {
        return User.findById(args.id);
    }
};

module.exports = {
    user
};

