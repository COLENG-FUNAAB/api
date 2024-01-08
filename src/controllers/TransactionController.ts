import { Request, Response } from "express";
import { convertToResponse, fail, success } from "../utils/response";
import { Service } from "typedi";
import "reflect-metadata"
import TransactionServices from "../services/TransactionService";

@Service()
class TransactionController{
    constructor(
        private readonly service : TransactionServices
    ){}

    async createTransaction(request: Request, response: Response){
        try{
            let data = request.body;
            let result: any = await this.service.save(data)
            return success(result, response)
        }
        catch(err: any){
            let result = {
                payload: null,
                message: err.message,
                status: err.status
            }
            
            return fail(result, response)
        }
    }

    async getByRef(request: Request, response: Response){
        try{
            let {ref} = request.params;
            let result = await this.service.findByRef(ref)
            return success(result, response)
        }
        catch(err: any){
            let result = {
                payload: null,
                message: err.message,
                status: err.status
            }
            
            return fail(result, response)
        }
    }
    
}

export default TransactionController