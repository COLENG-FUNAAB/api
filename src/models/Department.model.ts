import mongoose, { Schema } from "mongoose";

const schema = new Schema({
    title: {type: String},
    abb: {type: String}
},
{
    timestamps: true
})

const Department = mongoose.model("Department", schema)
export default Department