export type ActionResponse = {
    success: boolean,
    data?: any,
}

export type ActionValidationError = ActionResponse & {
    errors: Record<string, string | boolean>,
    message: string,
    isValidationError: boolean
}

export type IUser = {
    username: string;
    password: string;
    email: string;
    phone?: string;
    img?: string;
    address?: string,
    isAdmin: boolean,
    isActive: boolean,
    createdAt: Date,
    updatedAt: Date,
};

export type IProduct = {
    title: string;
    desc: string;
    price: number;
    currency: string;
    img: string;
    cat: string;
    stock: number,
    color: string,
    size: string,
    createdAt: Date,
    updatedAt: Date,
}


export type MongoServerError = Error & { code: number, keyPattern: Record<string, string> }
