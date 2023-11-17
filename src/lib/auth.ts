import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { authConfig } from './authConfig'
import { connectToDB } from "./db";
import { User } from "./models";
import bcrypt from 'bcrypt'

const login = async (credentials: { username: string, password: string, }) => {
    console.log("credentials", credentials);
    try {
        connectToDB()

        const user = await User.findOne({ username: credentials.username })
        if (!user) {
            console.log("User not Found!");
            throw new Error('Wrong credentials')
        }

        const isPasswordCorrect = await bcrypt.compare(credentials.password, user.password)

        if (!isPasswordCorrect) throw new Error('Wrong credentials')

        return user;
    } catch (error) {
        console.log("error", error?.message);
        throw new Error('Failed to login')
    }
}

export const { signIn, signOut, auth } = NextAuth({
    ...authConfig,
    providers: [
        CredentialsProvider({
            async authorize(credentials) {

                try {
                    const user = await login(credentials)
                    return user
                } catch (error) {
                    return null
                }
            }
        })
    ],
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.username = user.username
                token.img = user.img
                token.isAdmin = user.isAdmin
            }

            return token
        },
        async session({ session, token }) {
            if (token) {
                session.user.username = token.username
                session.user.img = token.img
                session.user.isAdmin = token.isAdmin
            }

            return session
        },
    }
})
