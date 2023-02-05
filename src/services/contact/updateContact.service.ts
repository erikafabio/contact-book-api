import { hash } from "bcrypt";
import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities/contact.entitiy";
import { AppError } from "../../errors/appError";

export const updateContatcService = async (data: Contact, idParams: string ): Promise<Contact | Array<string | number>> => {
    
    if(data.id !== undefined) {
        throw new AppError(401, "You cannote change this information")
    }

    const { name, email, phoneNumber} = data
    const contactRepository = AppDataSource.getRepository(Contact)
    const findedContact = await contactRepository.findOne({ where: { id: idParams}})

    if(!findedContact){
        throw new AppError(404, "Contact not founded")
    }

    await contactRepository.update(idParams, {
        name: name ? name : findedContact.name,
        email: email ? email : findedContact.email,
        phoneNumber: phoneNumber ? phoneNumber : findedContact.phoneNumber
    })

    const updatedContact = await contactRepository.findOne({ where: { id: idParams}})

    return updatedContact!
}