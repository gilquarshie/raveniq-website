"use server"
import { client } from "@/sanity/lib/client";
import { encryptionFunctions } from "@/functions/bcrypt/bcrypt";
import { generateToken } from "@/functions/jsonwebtoken/jsonwebtoken";

interface SignInData {
    username: string;
    password: string;
    accountType: string;
    remember: boolean;
}

interface returnData {
    type: string;
    success: boolean;
    message: string;
    data?: any;
    token?: string;
}

export default async function AdminSignIn_Server(data: SignInData): Promise<returnData> {
    const {username, password, remember, accountType} = data;
    try {
        //check for existing account
        const account = await client.fetch(`*[_type == "users" && email == "${username}"][0]`);
        if(!account){
            return {
                type: 'error',
                success: false,
                message: 'Account not found'
            }
        }

        //check for password
        const passwordMatch = await encryptionFunctions.compare(password, account.password);
        if(!passwordMatch){
            return {
                type: 'error',
                success: false,
                message: 'Incorrect password'
            }
        }

        //generateToken
        const generatedToken = generateToken({
            id: account._id,
            email: account.email
        }, remember);

        if(!generateToken){
            return{
                type:'failed',
                success: false,
                message: 'Failed to generate token'
            }
        }

        return{
            type: 'success',
            success: true,
            message: 'Sign in successful',
            data: account,
            token: generatedToken
        }

    } catch (error) {
        console.error('Error signing in:', error);
    }   
    return {
        type: 'error',
        success: false,
        message: 'An error occurred while signing in'
    }
}