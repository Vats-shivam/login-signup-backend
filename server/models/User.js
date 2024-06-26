// const { Timestamp } = require('bson');
import {Timestamp} from "bson"
import mongoose from 'mongoose';
const UserSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    email:
    {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password:
    {
        type: String,
        required: true,
        trim: true
    },
}, { timestamps: true });
const User = mongoose.model("User", UserSchema);
export default User