import { Service } from "typedi";
import Transaction from "../models/Transaction.model";
import "reflect-metadata";

@Service()
class TransactionServices{
    constructor(
        private readonly service = Transaction
    ){}

    async save(data: any){
        let result = await new this.service(data).save()
        return {
            payload: result,
            message: "Successfull"
        }
    }

    async findByRef(ref: string){
        let result = await this.service.findOne({ref});
        return {
            payload: result,
            message: "Successfull"
        }
    }

    async findByEmail(email: string){
        let result = await this.service.findOne({email});
        return {
            payload: result,
            message: "Successfull"
        }
    }

    async findAll(){
        let result = await this.service.find();
        return {
            payload: result,
            message: "Successfull"
        }
    }
}

export default TransactionServices