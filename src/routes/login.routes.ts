import { Router } from "express";
import { loginUserController } from "../controllers/user/loginUser.controller";


const routes = Router()

routes.post("", loginUserController)

export default routes