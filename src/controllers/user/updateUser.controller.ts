import { Request, Response } from "express";
import { User } from "../../entities/user.entity";
import { updateUserService } from "../../services/user/updateUser.service";

export const updateUserController = async (req: Request | any, resp: Response) => {

    const data: User = req.body
    const idParams = req.params.id
    const isAdm = req.user.isAdm
    const idUser = req.user.id

    const updatedUser = await updateUserService(data, idUser, isAdm, idParams)

    if( updatedUser instanceof User){
        return resp.json(updatedUser)
    }

    return resp.status(updatedUser[1] as number).json({message: updatedUser[0]})
}