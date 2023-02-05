import { Request, Response } from "express";
import { Contact } from "../../entities/contact.entitiy";
import { updateContatcService } from "../../services/contact/updateContact.service";

export const updateContatcController = async (req: Request | any, resp: Response) => {

    const data: Contact = req.body
    const idParams = req.params.id

    const updatedUser = await updateContatcService(data, idParams)

    if( updatedUser instanceof Contact){
        return resp.json(updatedUser)
    }

    return resp.status(updatedUser[1] as number).json({message: updatedUser[0]})
}