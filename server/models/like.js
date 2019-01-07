const mongoose = require(`mongoose`);
const Schema = mongoose.Schema;
const User = require(`./user`);

const likeSchema = new Schema({
    userId: {
        type: Schema.ObjectId,
        ref: `User`
    },
    userIdLiked: {
        type: Schema.ObjectId,
        ref: `User`
    }
}, {timestamps: true});

module.exports = mongoose.model(`Like`, likeSchema);
