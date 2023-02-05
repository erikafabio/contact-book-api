import { Request, Response } from "express";
import { listUsersService } from "../../services/user/listUsers.service";
import { instanceToPlain } from "class-transformer";

export const listUsersController = async (req: Request, resp: Response) => {
    const listUsers = await listUsersService()
    return resp.json(instanceToPlain(listUsers))
}