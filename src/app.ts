import "reflect-metadata"
import "express-async-errors"
import express, { NextFunction, Request, Response } from "express"
import { AppError } from "./errors/appError"
import { routes } from "./routes/user.routes"
import routesLogin from "./routes/login.routes"
import routesContact from "./routes/contact.routes"

export const app = express()
app.use(express.json())
app.use("/users", routes)
app.use("/login", routesLogin)
app.use("/contact", routesContact)

app.use((err: Error, req: Request, resp: Response, _:NextFunction) => {
    if(err instanceof AppError){
        return resp.status(err.statusCode).json({
            message: err.message
        })
    }

    return resp.status(500).json({
        message: err.message
    })
})