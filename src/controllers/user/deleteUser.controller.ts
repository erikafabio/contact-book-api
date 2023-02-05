import { Request, Response } from "express";
import { User } from "../../entities/user.entity";
import { deleteUserService } from "../../services/user/deleteUser.controller";

export const deleteUserController = async (req: Request, resp: Response) => {

    const id = req.params.id
    const deleted = await deleteUserService(id)

    if(deleted instanceof User){
        return resp.json(deleted)
    }

    return resp.status(deleted[1] as number).json({message: deleted[0]})
}