import { UserService } from "../services/user.service";
import { StatusCode } from "../../utils/status.code";
import { Request, Response } from "express";
import { DateSchedule } from "../models/user.model";
import { fakeUserData } from "../__mocks__/fake.user.data";

export class UserController {
    constructor(private readonly userService: UserService) { }

    async getAll(req: Request, res: Response) {

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

    async getWhere(req: Request, res: Response) {
        const { field, value } = req.params;

        const result = await this.userService.getWhere({ field, value });

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

    async findAvailableConsultant(req: Request, res: Response) {
        const { params } = req;
        console.log('params', params)
        const schedule: DateSchedule = {
            dateAndHourStart: params.startSchedule,
            dateAndHourFinish: params.finishSchedule,
        }
        const result = await this.userService.findAvailableConsultant(schedule);

        if ("invalidIdError" in result) {
            return res.status(StatusCode.BAD_REQUEST).json(result);
        }

        if ("promiseError" in result) {
            return res.status(StatusCode.INTERNAL_SERVER_ERROR).json(result);
        }

        return res.status(StatusCode.OK).json(result);
    }
}