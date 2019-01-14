const graphql = require(`graphql`);
const User = require(`../../models/user`);
const {UserType} = require(`../types`);
const {UserInputType} = require(`../types/inputTypes`);

const {
    GraphQLString,
    GraphQLNonNull,
    GraphQLID
} = graphql;

const addUser = {
    type: UserType,
    args: {
        email: {type: new GraphQLNonNull(GraphQLString)},
        password: {type: new GraphQLNonNull(GraphQLString)}
    },
    resolve: async (parent, args) => {
        const {email} = args;

        const alreadyExistedUser = await User.findOne({email});

        if (alreadyExistedUser) {
            throw new Error(`User Already exist!`);
        }
        const user = new User({
            email: args.email,
            password: args.password
        });

        return await user.save();
    }
};

const updateUser = {
    type: UserType,
    args: {
        user: {type: UserInputType}
    },
    resolve: (parent, args) => {
        const {id, ...other} = args.user;

        return User.findById(id)
            .then(user => {
                user.set(other);
                return user.save();
            })
            .catch(err => {
                throw err;
            });
    }
};

// const update

const removeUser = {
    type: UserType,
    args: {
        id: {type: new GraphQLNonNull(GraphQLID)}
    },
    resolve(parent, args) {
        return User.findById(args.id)
            .then(user => {
                return user.remove();
            })
            .catch(err => {
                throw err;
            });
    }
};

module.exports = {
    addUser,
    updateUser,
    removeUser
};

