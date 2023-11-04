import * as bcrypt from "bcrypt"

export const comparePassword = async (password: string, hashed: string): Promise<Boolean> =>{
    let doMatch = await bcrypt.compare(password, hashed);
    return doMatch
}

export const encryptPassword = async (password: string):Promise<String> =>{
    let hashed = await bcrypt.hash(password, 8);
    return hashed
}