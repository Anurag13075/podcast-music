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

    },
    ISAuthenticated:{

type:Boolean
    }
})

export const UserModel = mongoose.model("User", userSchema)
