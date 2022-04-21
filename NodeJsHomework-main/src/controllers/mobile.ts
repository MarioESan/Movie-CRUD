import { NextFunction, Request, Response } from "express";
import Mobile from '../models/mobile';
import mongoose from "mongoose";

const getAll = async(req: Request, res: Response, next: NextFunction) => {

    const result = await Mobile.find().exec();

    // TODO search for all vg and return
    return res.status(200).json({
        messagge : 'All Mobiles: ',
        result
    });
};

const create = async(req: Request, res: Response, next: NextFunction) => {
    const { company, name, size, camera_pixels, memory, op_system, aux_port, ctype_port } = req.body;

    // TODO Validate parameters

    const mobile = new Mobile({
        _id : new mongoose.Types.ObjectId,
        company,
        name,
        size,
        camera_pixels,
        memory,
        op_system,
        aux_port,
        ctype_port
    });

    const result = await mobile.save();

    return res.status(201).json({
        messagge : '¡Mobile Registered Successfully!',
        result
    });
};

const update = async(req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;
    const { company, name, size, camera_pixels, memory, op_system, aux_port, ctype_port } = req.body;

    // VALIDATE 
    const result = await Mobile.findByIdAndUpdate(id, { company, name, size, camera_pixels, memory, op_system, aux_port, ctype_port }, { new: true});

    return res.status(200).json({
        messagge : '¡Mobile Updated Successfully',
        result
    });
};

const remove = async(req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;

    const result = await Mobile.findByIdAndDelete(id);
    // TODO: search for vg by id = id, delete from db
    return res.status(200).json({
        messagge : '¡Mobile ABSOLUTELY DESTROYEDDD!!!!!!!',
        result
    });
};

const get = async(req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;

    //TODO search for vg with id = id and return

    const result = await Mobile.findById(id);

    return res.status(201).json({
        messagge : '¡Mobile Found!',
        result
    });
};

export default { getAll, create, update, remove, get}