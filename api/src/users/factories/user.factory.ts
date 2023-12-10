import { UserService } from "../services/user.service";
import { UserRepository } from "../repositories/user.repository";
import { UserModel } from "../models/user.model";
import { UserController } from "../controllers/user.controller";

export function userFactory() {
    const usersRepository = new UserRepository(UserModel);
    const usersService = new UserService(usersRepository);
    const usersController = new UserController(usersService);

    return usersController;
}

export const user = userFactory();