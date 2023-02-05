import { Request, Response, NextFunction } from "express";
import  jwt  from "jsonwebtoken";
import 'dotenv/config'

export const ensureAuthMiddleware = async (req: Request | any, resp: Response, next: NextFunction) => {
    let token = req.headers.authorization

    if(!token){
        return resp.status(401).json({
            message:'Invalid token'
        })
    }

    token = token!.split(' ')[1]

    jwt.verify(token, process.env.SECRET_KEY as string, (error: any, decoded: any) => {
        if(error){
            return resp.status(401).json({
                message: 'Invalid token'
            })
        }

        req.user = {
            isAdm: decoded.isAdm,
            id: decoded.sub
        }

        return next()
    })
} 