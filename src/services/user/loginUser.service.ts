import { compare } from "bcrypt"
import jwt from "jsonwebtoken"
import { AppDataSource } from "../../data-source"
import { User } from "../../entities/user.entity"
import { AppError } from "../../errors/appError"
import { IUserLogin } from "../../interfaces/user"

export const loginUserService = async ({email, password}: IUserLogin): Promise<string> => {
    const userRepository = AppDataSource.getRepository(User)

    const user = await userRepository.findOneBy({ email: email})

    if(!user){
        throw new AppError(403, "Invalid user or password")
    }

    const passwordMatch = await compare(password, user.password)

    if(!passwordMatch){
        throw new AppError(403, "Invalid user or password")
    }

    const token = jwt.sign({isAdm: user.isAdm}, process.env.SECRET_KEY as string, {
        expiresIn: '2h',
        subject: user.id
    })

    return token
}