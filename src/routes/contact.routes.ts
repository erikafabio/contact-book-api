import { Router } from "express";
import { createContactController } from "../controllers/contact/createContact.controller";
import { deleteContactController } from "../controllers/contact/deleteContact.controller";
import { listContactsController } from "../controllers/contact/listContacts.controller";
import { updateContatcController } from "../controllers/contact/updateContact.controller";
import { ensureAuthMiddleware } from "../middwares/ensureAuth.middleware";

const routes = Router()

routes.post("", ensureAuthMiddleware, createContactController)
routes.get("", ensureAuthMiddleware, listContactsController)
routes.patch("/:id", ensureAuthMiddleware, updateContatcController)
routes.delete("/:id", ensureAuthMiddleware, deleteContactController)

export default routes