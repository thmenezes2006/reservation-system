import { User } from "../models/user.model";
import { UserRepository } from "../repositories/user.repository";
import {
    CustomErrors,
    invalidIdError,
    promiseError,
} from "../../utils/error.handler";
import { isIdValid } from "../../utils/id.validator";

export class UserService {
    constructor(private readonly userRepository: UserRepository) { }

    async getAll(): Promise<User[] | CustomErrors> {
        try {
            const users = await this.userRepository.getAll();
            return users;
        } catch (error) {
            return promiseError(error);
        }
    }

    async getById(id: string): Promise<User | CustomErrors> {
        if (!isIdValid(id)) {
            return invalidIdError(id);
        }

        try {
            const user = await this.userRepository.getById(id);
            return user;
        } catch (error) {
            return promiseError(error);
        }
    }

    async create(user: User): Promise<User | CustomErrors> {
        try {
            const formateedUser = { ...user };
            const newUser = await this.userRepository.create(formateedUser);
            return newUser;
        } catch (error) {
            return promiseError(error);
        }
    }

    async update(id: string, user: User): Promise<User | CustomErrors> {
        if (!isIdValid(id)) {
            return invalidIdError(id);
        }

        try {
            const updatedUser = await this.userRepository.update(id, user);
            return updatedUser;
        } catch (error) {
            return promiseError(error);
        }
    }
}