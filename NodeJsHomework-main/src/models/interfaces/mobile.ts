import { Document } from 'mongoose';

export default interface IMobile extends Document{
    company: string,
    name: string,
    size: string,
    camera_pixels: number,
    memory: number,
    op_system: string,
    aux_port: boolean,
    ctype_port: boolean
}