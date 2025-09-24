import NextAuth from "next-auth";

import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectDB } from "./db";
import User from "./model";
import bcrypt from "bcryptjs";

export const {handler, SignIn, SignOut,auth} = NextAuth({
    providers:[
        // CredentialsProvider({
        //     name:"Credentials",
        //     credentials:{
        //         name: {
        //             label:"Name", type:"text"
        //         },
        //         email: {
        //             label:"Email", type:"email"
        //         },
        //         password: {
        //             label:"Password", type:"password"
        //         }
        //     },
        // }),
        // async authorize(credentials) {
        //      await connectDB();
        //      const user = await User.findOne({email: credentials?.email});
        // }

        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID || "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
        }),
        CredentialsProvider({
            name: "Credentials",
            credentials:{
                name: { label: "Name", type: "text" },
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials){
                await connectDB();
                const user = await User.findOne({email: credentials?.email});
                if (!user) {
                    return null;
                }
                const matchPass = await bcrypt.compare(credentials?.password || "", user.password);
                if (!matchPass) {
                    return null;
                }
                return {
                    id: user.id,
                    name: user.name,
                    email: user.email,
                };
            }
        })
    ],
    session: {strategy: "jwt"},
    pages:{signIn: "/signin"},
    callbacks: {
        async jwt({token,user}){
            if(user){
                token.user = user
            }
            return token
        },
        async session ({session,token}){
            session.user = token.user as typeof session.user;
            return session;
        }
    },
    secret: process.env.NEXTAUTH_SECRET,
})