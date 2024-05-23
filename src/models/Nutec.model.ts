import mongoose,{Schema} from "mongoose";
// import { unique } from "next/dist/build/utils";
// import mongoose from "mongoose";

const schema = new Schema({
    name: String,
    matricNumber: {type:Number, unique: true},
    email: {type:String, unique: true},
    whatsApp: Number,
    department: String,
    college: String,
    techStack: String
})

const Nutec = mongoose.model("Nutec", schema);
export default Nutec