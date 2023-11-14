import { Request, Response } from "express";
import { Pet } from "../models/pet";
import { createMenuObject } from "../helpers/createMenuObject";

export const search = (req:Request, res:Response) => {

    const queryString:string = req.query.q as string;

    if(!queryString){
        res.redirect('/');
        return;
    }

    const list = Pet.getFromName(queryString)

    res.render('pages/page', {
        menu: createMenuObject(''),
        list,
        queryString
    });
}