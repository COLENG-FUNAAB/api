import mongoose, { Schema } from "mongoose";

const schema = new Schema({
    department: {type: Schema.Types.ObjectId, ref: "Department"},
    title: {type: String},
    floorPrice: {type: Number},
    fresherPrice: {type: Number}
},
{
    timestamps: true
})

const Payment = mongoose.model("Payment", schema)
export default Payment