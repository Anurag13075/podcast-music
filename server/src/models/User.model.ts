import mongoose from "mongoose";

const userSchema = new mongoose.Schema({

    firstname: {
        type: String

    },
    email: {
        type: String,
        required: true
    },
    password: {

    }
})

export const UserModel = mongoose.model("User", userSchema)