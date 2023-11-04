import { Service } from "typedi";
import { comparePassword, encryptPassword } from "../config/bcrypt";
import { generateToken } from "../config/jwt";
import Student from "../models/Students.model";
import "reflect-metadata"

@Service()
class StudentServices{
    constructor(
        private readonly services = Student
    ){}

    async save(data: any){
        let result = await new this.services(data).save();
        return result;
    }

    async findAll(){
        let result = await this.services.find()
        return result
    }

    async findById(id: string){
        let result = await this.services.findById(id);
        return result
    }

    async findByEmail(email: string){
        let result = await this.services.findOne({schoolEmail: email});
        return result
    }

    async findByMN(mn: string){
        let result = await this.services.findOne({matricNumber: mn});
        return result
    }

    async findByDepartment(department: string){
        let result = await this.services.find({department})
        return result
    }

    async signIn(data: any){
        try{
            let {matricNumber, password} = data;
        let student: any = await this.findByMN(matricNumber)

        if(!student){
        
            return {
                payload: null,
                message: "There's no user with this matric number"
            }
        }

        if(await comparePassword(password, student?.password)){
            let token = generateToken(student.matricNumber, student._id)
            return {
                payload: {student, token},
                message: "Signed In Successfully"
            }
        }
        else{
            return{
                payload: null,
                message: "Incorrect Password"
            }
        }
        }
        catch(err: any){
            return{
                payload: null,
                message: err.message
            }
        }
    }

    async signUp(data: any){
        try{
            data.password = await encryptPassword(data.password);
            let student: any = await this.save(data);
            let token = generateToken(student.matricNumber, student._id)
            return {
                payload: {student, token},
                message: "Signed Up Successfully"
            }
        }
        catch(err: any){
            return{
                payload: null,
                message: err.message
            }
        }
    }

}

export default StudentServices