'use server'

import { revalidatePath } from "next/cache";
import { Product, User } from "./models";
import { redirect } from "next/navigation";
import { connectToDB } from "./db";
import bcrypt from 'bcrypt'
import { boolean } from 'boolean';

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
            isActive: boolean(isActive),
            isAdmin: boolean(isAdmin),
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


export const deleteUser = async (formData) => {
    const {
        id
    } = Object.fromEntries(formData)

    try {
        connectToDB()

        await User.findByIdAndDelete(id)

    } catch (error) {
        console.log("error", error);
        throw new Error('Failed to delete the user')
    }

    revalidatePath('/dashboard/users')
}


export const addProduct = async (formData) => {
    const {
        cat,
        color,
        currency,
        price,
        desc,
        img,
        size,
        stock,
        title,
    } = Object.fromEntries(formData)

    try {
        connectToDB()

        const newProduct = new Product({
            cat,
            color,
            currency,
            price,
            desc,
            img,
            size,
            stock,
            title,
        })

        await newProduct.save()

    } catch (error) {
        console.log("error", error);
        throw new Error('Failed to save new product')
    }

    revalidatePath('/dashboard/products')
    redirect('/dashboard/products')
}


export const deleteProduct = async (formData) => {
    const {
        id
    } = Object.fromEntries(formData)

    try {
        connectToDB()

        await Product.findByIdAndDelete(id)

    } catch (error) {
        console.log("error", error);
        throw new Error('Failed to delete the product')
    }

    revalidatePath('/dashboard/products')
}
