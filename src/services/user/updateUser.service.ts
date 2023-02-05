import { hash } from "bcrypt";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/appError";

export const updateUserService = async (data: User, idUser: string, isAdm: boolean, idParams: string ): Promise<User | Array<string | number>> => {
    
    if(data.id !== undefined || data.isAdm !== undefined || data.isActive !== undefined) {
        throw new AppError(401, "You cannot change this information")
    }

    const { name, email, phoneNumber, password } = data
    const userRepository = AppDataSource.getRepository(User)
    const findedUser = await userRepository.findOne({ where: { id: idUser}})

    if(!findedUser){
        throw new AppError(404, "User not founded")
    }

    if(!isAdm && idParams !== idUser){
        throw new AppError(401, "Unauthorized access")
    }

    await userRepository.update(idUser, {
        name: name ? name : findedUser.name,
        email: email ? email : findedUser.email,
        phoneNumber: phoneNumber ? phoneNumber : findedUser.phoneNumber,
        password: password ? await hash(password, 10) : findedUser.password
    })

    const updatedUser = await userRepository.findOne({ where: { id: idUser}})

    return updatedUser!
}