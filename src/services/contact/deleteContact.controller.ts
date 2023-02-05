import { AppDataSource } from "../../data-source"
import { Contact } from "../../entities/contact.entitiy"
import { AppError } from "../../errors/appError"

export const deleteContactService = async (id: string) => {
    
    const contactRepository = AppDataSource.getRepository(Contact)
    const findedContact = await contactRepository.findOneBy({id})

    if(!findedContact){
        throw new AppError(404, "Contact not found")
    }

    await contactRepository.delete(id)

    return ['Contact deleted', 204]
}