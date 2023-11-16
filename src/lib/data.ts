import { connectToDB } from "./db";
import { User } from "./models"

export const fetchUsers = async ({ q }: { q: string }) => {
    const regex = new RegExp(q, "i")

    try {
        connectToDB()
        const users = await User.find({ username: { $regex: regex } })

        return users;
    } catch (error) {
        throw new Error("Could not fetch users")
    }
}