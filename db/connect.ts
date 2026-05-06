import mongoose from "mongoose";

export const connect = async () => {
    try {
        mongoose.connect(process.env.MONGODB_URI || "")
    } catch (err: any) {

        console.log(`The error is ${err.message}`)
        process.exit(1)

    }
}