'use server'

import { revalidatePath } from "next/cache";
import { User } from "./models";
import { redirect } from "next/navigation";
import { connectToDB } from "./db";
import bcrypt from 'bcrypt'

export const addUser = async (formData) => {
    const {
        address,
        email,
        img,
        isActive,
        isAdmin,
        password,
        phone,
        username,
    } = Object.fromEntries(formData)

    try {
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        connectToDB()

        const newUser = new User({
            address,
            email,
            img,
            isActive: Boolean(isActive),
            isAdmin: Boolean(isAdmin),
            password: hashedPassword,
            phone,
            username,
        })

        await newUser.save()

    } catch (error) {
        console.log("error", error);
        throw new Error('Failed to save new user')
    }

    revalidatePath('/dashboard/users')
    redirect('/dashboard/users')
}
