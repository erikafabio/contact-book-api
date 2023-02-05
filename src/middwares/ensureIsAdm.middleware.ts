import { Request, Response, NextFunction } from "express";

export const ensureIsAdmMiddleware = async (req: Request | any, resp: Response, next: NextFunction) => {

    const isAdm = req.user.isAdm

    if(isAdm === false){
        return resp.status(403).json({
            message: 'User is not admin'
        })
    }

    return next()
}