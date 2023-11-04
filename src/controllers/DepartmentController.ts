import { Request, Response } from "express";
import DepartmentServices from "../services/DepartmentServices";
import { convertToResponse, fail, success } from "../utils/response";
import { Service } from "typedi";
import "reflect-metadata"

@Service()
class DepartmentController{
    constructor(
        private readonly service : DepartmentServices
    ){}

    async addAllDepartments(req: Request, res: Response){
        const departments = [
            {
                title: "Agriculture and Bioresources Engineering",
                abb: "ABE"
            },
            {
                title: "Civil Engineering",
                abb: "CVE"
            },
            {
                title: "Electrical and Electronics Engineering",
                abb: "ELE"
            },
            {
                title: "Mechanical Engineering",
                abb: "MCE"
            },
            {
                title: "Mechatronics Engineering",
                abb: "MTE"
            }
        ]

        for(let i=0; i <= departments.length -1; i++){
            let result = await this.service.save(departments[i])
        }

        res.json({message: "Added Successfuly"})
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

export default DepartmentController