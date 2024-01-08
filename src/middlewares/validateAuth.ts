import jwt from "jsonwebtoken"
import { NextFunction, Request, Response } from "express";
import Student from "../models/Students.model";


require('dotenv').config();
const jwt_secret = process.env.JWT_SECRET || "SNOSD9SDD"

let userToken : string = ""

const validateAuth =  (req:Request, res: Response, next: NextFunction)=>{
    
    res.setHeader('Access-Control-Allow-Origin', '*');
    const {authorization} = req.headers
    if(!authorization){
        return res.status(401).json({error: "You must Be authorized"})
    }
    const token = authorization.replace("Bearer ", "")
    userToken = token
    jwt.verify(token, jwt_secret,  async (err, payload)=>{
        if(err){
            return res.status(401).json({error: "you must be logged in"})
        }
            let userId: any = payload
            let user = await Student.findOne(userId.userId)
            if(!user){
                return res.status(404).json({error: "User not Found"})
            }
            req.body.student = user;
            
    })
    next()  
}


export default validateAuth