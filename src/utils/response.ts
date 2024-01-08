import { Response } from "express";

interface ResponseObject{
    message: string,
    payload: any,
    status?: number | null
}

export const success = (response: ResponseObject, res: Response)=>{
    const {message, payload, status} = response;
    res.status(status || 200).json({
        message: message|| "Successful" , payload, status
    })
}

export const fail = (response: ResponseObject, res: Response)=>{
    const {message, payload, status} = response;
    res.status(status || 400).json({
        message, payload, status
    })
}

export const convertToResponse = (payload: string, message: string | null): ResponseObject =>{
    return {
        payload,
        message: message || "Successfull",
        status: 200
    }
}