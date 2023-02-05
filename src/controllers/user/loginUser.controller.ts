import { Request, Response } from "express";
import { loginUserService } from "../../services/user/loginUser.service";

export const loginUserController = async (req: Request, resp:Response) => {

    const data = req.body
    const token = await loginUserService(data)

    return resp.json({token})
}