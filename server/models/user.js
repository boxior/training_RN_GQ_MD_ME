const mongoose = require(`mongoose`);
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: String,
    password: String,
    name: String,
    age: Number,
    gender: String,
    showMe: String,
    distance: {
        unit: String,
        max: Number
    },
    ageRange: {
        min: Number,
        max: Number
    },
    myLikes: {
        type: Schema.ObjectId,
        ref: `Like`
    },
    meLikes: {
        type: Schema.ObjectId,
        ref: `Like`
    },
    matches: {
        type: Schema.ObjectId,
        ref: `Match`
    }
}, {timestamps: true});

module.exports = mongoose.model(`User`, userSchema);
