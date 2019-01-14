const mongoose = require(`mongoose`);
const Schema = mongoose.Schema;

const matchSchema = new Schema({
    userIdFirstLike: {
        type: Schema.ObjectId,
        ref: `User`
    },
    userIdSecondLike: {
        type: Schema.ObjectId,
        ref: `User`
    }
}, {timestamps: true});

module.exports = mongoose.model(`Match`, matchSchema);

