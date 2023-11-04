import { Service } from "typedi";
import Department from "../models/Department.model";
import "reflect-metadata"

@Service()
class DepartmentServices{
    constructor(
        private readonly service = Department
    ){}

    async save(data: any){
        let result = await new this.service(data).save()
        return result
    }

    async findAll(){
        let result = await this.service.find();
        return result
    }
}

export default DepartmentServices