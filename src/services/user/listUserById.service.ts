import { AppDataSource } from "../../data-source"
import { User } from "../../entities/user.entity"
import { AppError } from "../../errors/appError"

export const listUserByIdService = async (id: string) => {
    const userRepository = AppDataSource.getRepository(User)
    const user = await userRepository.findOne({
        where: {
            id: id
        },
        relations: {
            contact: true
        }
    })
    if(!user){
        throw new AppError(404, "User id don't exits")
    }

    return user
}