import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities/contact.entitiy";
import { IContactRequest } from "../../interfaces/contact";

export const listContactsService = async (): Promise<IContactRequest[]> => {
    const contactRepository = AppDataSource.getRepository(Contact)
    const contact = await contactRepository.find()
    return contact
}