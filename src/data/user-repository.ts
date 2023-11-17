import { connectToDB } from "@/lib/db"
import { User } from "@/lib/models"
import { boolean } from "boolean"
import bcrypt from "bcrypt"
import { CreateUserRequest } from "@/lib/validators"
import { checkIfDuplicationError } from "@/lib/server-utils"

export default class UserRepository {
    async create({
        address,
        email,
        img,
        isActive,
        isAdmin,
        password,
        phone,
        username,
    }: CreateUserRequest) {

        try {
            const salt = await bcrypt.genSalt(10)
            const hashedPassword = await bcrypt.hash(password, salt)

            connectToDB()

            const newUser = new User({
                address,
                email,
                img,
                isActive: boolean(isActive),
                isAdmin: boolean(isAdmin),
                password: hashedPassword,
                phone,
                username,
            })

            const saved = await newUser.save()

            return saved;
        } catch (error) {
            console.log("UserRepository create: ", error);
            const de = checkIfDuplicationError(error)
            if (de) {
                throw new Error(de)
            }

            throw error
        }
    }
}