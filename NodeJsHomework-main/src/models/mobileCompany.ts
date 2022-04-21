import { Schema } from "mongoose";
import mongoose from "mongoose";
import  IMobileCompany  from "./interfaces/mobile";

const sponsors = new Schema({
    company_name: {type: String, required: true},
    money_given: {type: String, required: true},
    has_contract: {type: String, required: true}
})

const MobileSchema: Schema = new Schema({
    name: {type: String, required: true},
    slogan: {type: String, required: true},
    birthday_date: {type: String, required: true},
    sponsors: {type: [sponsors], required: true},
    },{
        timestamps: true
    })

export default mongoose.model<IMobileCompany>('MobileCompany', MobileSchema);