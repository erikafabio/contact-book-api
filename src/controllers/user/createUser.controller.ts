import { Request, Response } from "express";
import { IUserRequest } from "../../interfaces/user";
import { createUserService } from "../../services/user/createUser.service";
import { instanceToPlain } from "class-transformer";

export const createUserController = async (req: Request, resp: Response) => {
    
    const user : IUserRequest = req.body
    const createdUser = await createUserService(user)

    return resp.status(201).json(instanceToPlain(createdUser))
}