import { connectToDB } from "./db";
import { User } from "./models"

export const fetchUsers = async ({ q, page = 1 }: { q: string, page: number }) => {
    const regex = new RegExp(q, "i")

    const ITEMS_PER_PAGE = 2

    try {
        connectToDB()
        const count = await User.find({ username: { $regex: regex } }).countDocuments()
        const users = await User.find({ username: { $regex: regex } }).limit(ITEMS_PER_PAGE).skip(ITEMS_PER_PAGE * (page - 1))

        return { count, users };
    } catch (error) {
        throw new Error("Could not fetch users")
    }
}