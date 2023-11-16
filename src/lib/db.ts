'use server'

import mongoose from "mongoose"

const MONGODB_USERNAME = process.env.MONGODB_USERNAME
const MONGODB_PASSWORD = process.env.MONGODB_PASSWORD
const MONGODB_DATABASE = process.env.MONGODB_DATABASE

export const connectToDB = async () => {
    const connection = {
        isConnected: 0,
    }

    try {
        if (connection.isConnected) return;

        const database = await mongoose.connect(`mongodb+srv://${MONGODB_USERNAME}:${MONGODB_PASSWORD}@cluster0.qurceja.mongodb.net/${MONGODB_DATABASE}?retryWrites=true&w=majority`)
        connection.isConnected = database.connections[0].readyState;
    } catch (error) {
        // @ts-ignore
        throw new Error(error)
    }
}