import { Request, Response } from "express";
import { deleteContactService } from "../../services/contact/deleteContact.controller";
import { Contact } from "../../entities/contact.entitiy";

export const deleteContactController = async (req: Request, resp: Response) => {

    const id = req.params.id
    const deleted = await deleteContactService(id)

    if(deleted instanceof Contact){
        return resp.json(deleted)
    }

    return resp.status(deleted[1] as number).json({message: deleted[0]})
}