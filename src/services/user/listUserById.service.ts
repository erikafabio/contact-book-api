import { AppDataSource } from "../../data-source"
import { User } from "../../entities/user.entity"
import { AppError } from "../../errors/appError"

export const listUserByIdService = async (id: string) => {
    const userRepository = AppDataSource.getRepository(User)
    const user = await userRepository.findOneBy({id:id})
    if(!user){
        throw new AppError(404, 'User id does exits')
    }

    return user
}