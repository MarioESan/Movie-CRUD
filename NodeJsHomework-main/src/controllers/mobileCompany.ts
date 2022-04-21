import { NextFunction, Request, Response } from "express";
import MobileCompany from '../models/mobileCompany';
import mongoose from "mongoose";

const getAll = async(req: Request, res: Response, next: NextFunction) => {

    const result = await MobileCompany.find().exec();

    // TODO search for all vg and return
    return res.status(200).json({
        messagge : 'All Mobile Companies: ',
        result
    });
};

const create = async(req: Request, res: Response, next: NextFunction) => {

    const { name, slogan, birthday_date, sponsors } = req.body;

    // TODO Validate parameters

    const mobileCompany = new MobileCompany({
        _id : new mongoose.Types.ObjectId,
        name,
        slogan,
        birthday_date,
        sponsors
    });

    const result = await mobileCompany.save();

    return res.status(201).json({
        messagge : '¡Mobile Company Registered Successfully!',
        result
    });
};

const update = async(req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;
    const { name, slogan, birthday_date,  sponsors } = req.body;

    // VALIDATE 
    const result = await MobileCompany.findByIdAndUpdate(id, { name, slogan, birthday_date,  sponsors }, { new: true});

    return res.status(200).json({
        messagge : '¡Mobile Company Updated Successfully',
        result
    });
};

const remove = async(req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;

    const result = await MobileCompany.findByIdAndDelete(id);
    // TODO: search for vg by id = id, delete from db
    return res.status(200).json({
        messagge : '¡Mobile Company ABSOLUTELY DESTROYEDDD!!!!!!!',
        result
    });
};

const get = async(req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;

    //TODO search for vg with id = id and return

    const result = await MobileCompany.findById(id);

    return res.status(201).json({
        messagge : '¡Mobile Company Found!',
        result
    });
};

export default { getAll, create, update, remove, get}