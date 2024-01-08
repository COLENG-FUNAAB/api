import { Request, Response, request } from "express";
import StudentServices from "../services/StudentServices";
import { Service } from "typedi";
import "reflect-metadata"
import { fail, success } from "../utils/response";

@Service()
class StudentController{
    constructor(
        private readonly services : StudentServices
    ){}

    async signIn(req: Request, res: Response){
        try{
            let data = req.body;
            let result = await this.services.signIn(data)
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

    async signUp(req: Request, res: Response){
        try{
            let data = req.body;
            let result = await this.services.signUp(data)
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

    async getUserById(req: Request, res: Response){
        try{
            let {id} = req.params
            let result : any= await this.services.findById(id)
            result = {
                payload: result
            }
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

export default StudentController