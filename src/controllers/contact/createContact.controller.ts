import { instanceToPlain } from "class-transformer";
import { Request, Response } from "express";
import { IContactRequest } from "../../interfaces/contact";
import { createContactService } from "../../services/contact/createContact.service";

export const createContactController = async (req: Request | any, resp: Response) => {

    const data: IContactRequest = req.body
    const idUser = req.user.id
    const createdContact = await createContactService(idUser, data)

    return resp.status(200).json(instanceToPlain(createdContact))
}