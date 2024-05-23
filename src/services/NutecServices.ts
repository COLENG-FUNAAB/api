import { Service } from "typedi";
import "reflect-metadata"
import Nutec from "../models/Nutec.model";

@Service()
class NutecServices{
    constructor(
        private readonly service = Nutec
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

export default NutecServices