import * as jwt from "jsonwebtoken";
require("dotenv").config()

export const jwtSecret = String(process.env.JWT_SECRET)

export const generateToken = (matricNumber: string, id: string): String =>{
    let token = jwt.sign({matricNumber, id}, jwtSecret, {expiresIn: "30d"})
    return token
}