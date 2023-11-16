import { IProduct, IUser } from "@/types";
import { Schema, model, models } from "mongoose";

const userSchema = new Schema<IUser>({
    username: {
        type: String,
        required: true,
        unique: true,
        min: 3,
        max: 20,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    img: {
        type: String,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    isActive: {
        type: Boolean,
        default: true,
    },
    phone: {
        type: String,
    },
    address: {
        type: String,
    },
}, {
    timestamps: true,
})

const productSchema = new Schema<IProduct>({
    title: {
        type: String,
        required: true,
        unique: true,
    },
    desc: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
        min: 0,
    },
    currency: {
        type: String,
        default: '$'
    },
    stock: {
        type: Number,
        required: true,
        min: 0,
    },
    img: {
        type: String,
    },
    color: {
        type: String,
    },
    size: {
        type: String,
    },
    cat: {
        type: String,
        required: true,
    }
}, {
    timestamps: true,
})

const UserModel = () => model<IUser>('User', userSchema)
export const User = (models.User || UserModel()) as ReturnType<
    typeof UserModel
>

const ProductModel = () => model<IProduct>("Product", productSchema)
export const Product = (models.Product || ProductModel()) as ReturnType<
    typeof ProductModel
>
