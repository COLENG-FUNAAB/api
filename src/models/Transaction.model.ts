import mongoose, { Schema } from "mongoose";

const schema = new Schema({
    ref: {type: String},
    name: {type: String},
    email: {type: String},
    amount: {type: Number},
    department: {type: String},
    matricNumber: {type: String},
    studentType: {type: String}
},
{
    timestamps: true
})

const Transaction = mongoose.model("Transaction", schema)
export default Transaction