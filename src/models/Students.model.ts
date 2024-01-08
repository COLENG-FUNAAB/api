import mongoose, { Schema } from "mongoose";

const schema = new Schema({
    fullName: {type: String, required: true},
    matricNumber: {type: String, required: true, unique: true},
    schoolEmail: {type: String},
    primaryEmail: {type: String, unique: true},
    password: {type: String, required: true},
    gender: {type: String, required: false},
    department: {type: Schema.Types.ObjectId, ref: "Department"},
    profilePicture: {type: String, default: "https://img.freepik.com/premium-photo/civil-engineer-digital-avatar-generative-ai_934475-9025.jpg"}
},
{
    timestamps: true
})

const Student = mongoose.model("Student", schema)
export default Student