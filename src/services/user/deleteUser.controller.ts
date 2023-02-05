import { AppDataSource } from "../../data-source"
import { User } from "../../entities/user.entity"
import { AppError } from "../../errors/appError"

export const deleteUserService = async (id: string) => {
    
    const userRepository = AppDataSource.getRepository(User)
    const findedUser = await userRepository.findOneBy({id})

    if(!findedUser){
        throw new AppError(404, "User not found")
    }

    if(!findedUser.isActive){
        throw new AppError(400, "User cannot be deleted")
    }

    await userRepository.update(id, {
        isActive: false
    })

    return ['User deleted', 204]
}