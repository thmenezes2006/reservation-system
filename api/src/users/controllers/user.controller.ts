import { UserService } from "../services/user.service";
import { StatusCode } from "../../utils/status.code";
import { Request, Response } from "express";
import { fakeUserData } from "../__mocks__/fake.user.data";

export class UserController {
    constructor(private readonly userService: UserService) { }

    async getAll(req: Request, res: Response) {
        const { body } = req
        console.log(body);

        const result = await this.userService.getAll();

        if ("promiseError" in result) {
            return res.status(StatusCode.INTERNAL_SERVER_ERROR).json(result);
        }

        return res.status(StatusCode.OK).json(result);
    }

    async getById(req: Request, res: Response) {
        const { id } = req.params;

        const result = await this.userService.getById(id);

        if ("invalidIdError" in result) {
            return res.status(StatusCode.BAD_REQUEST).json(result);
        }

        if ("promiseError" in result) {
            return res.status(StatusCode.INTERNAL_SERVER_ERROR).json(result);
        }

        return res.status(StatusCode.OK).json(result);
    }

    async create(req: Request, res: Response) {
        const { body } = req;

        const result = await this.userService.create(body);

        if ("promiseError" in result) {
            return res.status(StatusCode.INTERNAL_SERVER_ERROR).json(result);
        }

        return res.status(StatusCode.CREATED).json(result);
    }

    async update(req: Request, res: Response) {
        const { id } = req.params;
        const { body } = req;

        const result = await this.userService.update(id, body);

        if ("promiseError" in result) {
            return res.status(StatusCode.INTERNAL_SERVER_ERROR).json(result);
        }

        if ("invalidIdError" in result) {
            return res.status(StatusCode.BAD_REQUEST).json(result);
        }

        return res.status(StatusCode.OK).json(result);
    }

}