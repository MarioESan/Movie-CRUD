import { Schema } from "mongoose";
import mongoose from "mongoose";
import  IMobile  from "./interfaces/mobile";

const MobileSchema: Schema = new Schema({
    company: {type: String, required: true},
    name: {type: String, required: true},
    size: {type: String, required: true},
    camera_pixels: {type: Number, required: true},
    memory: {type: Number, required: true},
    op_system: {type: String, required: true},
    aux_port: {type: Boolean, required: true},
    ctype_port: {type: Boolean, required: true}
    },{
        timestamps: true
    })

export default mongoose.model<IMobile>('Mobile', MobileSchema);