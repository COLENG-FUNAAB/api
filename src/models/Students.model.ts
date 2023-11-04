import mongoose, { Schema } from "mongoose";

const schema = new Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    matricNumber: {type: String, required: true},
    schoolEmail: {type: String},
    primaryEmail: {type: String},
    password: {type: String, required: true},
    gender: {type: String, required: false},
    department: {type: Schema.Types.ObjectId, ref: "Department"}
},
{
    timestamps: true
})

const Student = mongoose.model("Student", schema)
export default Student