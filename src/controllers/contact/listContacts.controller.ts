import { Request, Response } from "express";
import { listContactsService } from "../../services/contact/listContacts.service";

export const listContactsController = async (req: Request, resp: Response) => {
    const listContact = await listContactsService()
    return resp.json(listContact)
}