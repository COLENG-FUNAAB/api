import { Request, Response } from "express";
import { convertToResponse, fail, success } from "../utils/response";
import { Service } from "typedi";
import "reflect-metadata"
import NutecServices from "../services/NutecServices";

@Service()
class NutecController{
    constructor(
        private readonly service : NutecServices
    ){}

    async register(req: Request, res: Response){
        try{
            let body = req.body;
            let result: any = await this.service.save(body);
            result = convertToResponse(result, "Successful")
            return success(result, res)
        }
        catch(err: any){
            let result = {
                payload: null,
                message: "You've registered with this Email or Matric Number",
                status: err.status
            }
            
            return fail(result, res)
        }
        
    }

    async getAll(req: Request, res: Response){
        try{
            let result: any = await this.service.findAll()
            result = convertToResponse(result, "Successful")
            return success(result, res)
        }
        catch(err: any){
            let result = {
                payload: null,
                message: err.message,
                status: err.status
            }
            
            return fail(result, res)
        }
    }
}

export default NutecController