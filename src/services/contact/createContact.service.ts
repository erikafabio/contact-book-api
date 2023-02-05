import { AppDataSource } from "../../data-source"
import { Contact } from "../../entities/contact.entitiy"
import { User } from "../../entities/user.entity"
import { AppError } from "../../errors/appError"
import { IContact, IContactRequest } from "../../interfaces/contact"

export const createContactService = async (idUser: string, { name, email, phoneNumber }: IContactRequest): Promise<IContact> => {
    
    const userRepository = AppDataSource.getRepository(User)
    const contactRepository = AppDataSource.getRepository(Contact)

    const findedUser = await userRepository.findOneBy({ id : idUser })
    if(!findedUser){
        throw new AppError(404, 'User not finded')
    }

    const findedContact = await contactRepository.findOneBy({phoneNumber})
    if(findedContact){
        throw new AppError(400, 'Phone number already exists')
    }

    const contact = contactRepository.create({
        name,
        email,
        phoneNumber,
        user: findedUser
    })

    await contactRepository.save(contact)

    return contact
}