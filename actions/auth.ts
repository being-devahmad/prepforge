'use server'

import { auth, db } from "@/firebase/admin"
import { cookies } from "next/headers"

const ONE_WEEK = 60 * 60 * 24 * 7        // 7 days

export const setSessionCookie = async (idToken: string) => {
    const cookieStore = await cookies()
    const sessionCookie = await auth.createSessionCookie(idToken, {
        expiresIn: ONE_WEEK * 1000
    })

    cookieStore.set('session', sessionCookie, {
        maxAge: ONE_WEEK,
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        path: "/",
        sameSite: "lax"
    })
}


export const signUp = async (params: SignUpParams) => {
    const { uid, name, email } = params

    try {

        const userRecord = await db.collection('users').doc(uid).get()

        // check for user existence
        if (!userRecord.exists) {
            return {
                success: false,
                message: "User already exists. Please sign in instead."
            }
        }

        // Save te data to db
        await db.collection("users").doc(uid).set({
            name,
            email
        })

        return {
            success: true,
            message: "User registered successfully. Please sign in !!"
        }

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
        console.log("Error creating a user : ", error)
        if (error.code === "auth/email-already exists") {
            return {
                success: false,
                message: "Email is already in use",
            }
        }

        return {
            success: false,
            message: "Failed to create an account! Try again later.",
        }
    }
}


export async function signIn(params: SignInParams) {
    const { email, idToken } = params;

    try {
        const userRecord = await auth.getUserByEmail(email);
        if (!userRecord)
            return {
                success: false,
                message: "User does not exist. Create an account.",
            };

        await setSessionCookie(idToken);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
        console.log("Error signing user : ", error)

        return {
            success: false,
            message: "Failed to log into account. Please try again.",
        };
    }
}


// Sign out user by clearing the session cookie
export async function signOut() {
    const cookieStore = await cookies();

    cookieStore.delete("session");
}
