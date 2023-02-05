import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import { IUserRequest } from "../../interfaces/user";

export const listUsersService = async (): Promise<IUserRequest[]> => {
    const userRepository = AppDataSource.getRepository(User)
    const users = await userRepository.find({
        relations: {
            contact: true
        }
    })
    return users
}