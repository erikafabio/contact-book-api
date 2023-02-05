import { hash } from "bcrypt"
import { AppDataSource } from "../../data-source"
import { User } from "../../entities/user.entity"
import { AppError } from "../../errors/appError"
import { IUserRequest } from "../../interfaces/user/index"

export const createUserService = async ({ name, email, password, isAdm, phoneNumber }: IUserRequest): Promise<User> => {
    
    const userRepository = AppDataSource.getRepository(User)

    if(!password){
        throw new AppError(400, 'Password is missing')
    }

    const hashedPassword = await hash(password, 10)

    const user = userRepository.create({
        name,
        email,
        phoneNumber,
        password: hashedPassword,
        isAdm,
        contact:[]
    })

    await userRepository.save(user)

    return user
}