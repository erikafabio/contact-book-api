import "reflect-metadata"
import "express-serve-errors"
import express, { NextFunction, Request, Response } from "express"
import { AppError } from "./errors/appError"
import { routes } from "./routes/user.routes"

export const app = express()
app.use(express.json())
app.use(routes)

app.use((err: Error, req: Request, resp: Response, _:NextFunction) => {
    if(err instanceof AppError){
        return resp.status(err.statusCode).json({
            status: "error",
            message: err.message
        })
    }
    console.log(err)

    return resp.status(500).json({
        status: "error",
        message: "Internal server error"
    })
})