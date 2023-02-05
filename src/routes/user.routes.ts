import { Router } from "express";
import { createUserController } from "../controllers/user/createUser.controller";
import { deleteUserController } from "../controllers/user/deleteUser.controller";
import { listUserByIdController } from "../controllers/user/listUserById.controller";
import { listUsersController } from "../controllers/user/listUsers.controller";
import { updateUserController } from "../controllers/user/updateUser.controller";
import { ensureAuthMiddleware } from "../middwares/ensureAuth.middleware";
import { ensureIsAdmMiddleware } from "../middwares/ensureIsAdm.middleware";

export const routes = Router()

routes.post("", createUserController)
routes.get("", ensureAuthMiddleware, ensureIsAdmMiddleware, listUsersController)
routes.get("/:id", ensureAuthMiddleware, ensureIsAdmMiddleware, listUserByIdController)
routes.patch("/:id", ensureAuthMiddleware, updateUserController)
routes.delete("/:id", ensureAuthMiddleware, ensureIsAdmMiddleware, deleteUserController)