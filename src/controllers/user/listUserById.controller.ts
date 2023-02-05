import { Request, Response } from "express";
import { listUserByIdService } from "../../services/user/listUserById.service";

export const listUserByIdController = async (req: Request, resp: Response) => {

    const id = req.params.id

    const userFinded = await listUserByIdService(id)

    return resp.status(200).json(userFinded)
}