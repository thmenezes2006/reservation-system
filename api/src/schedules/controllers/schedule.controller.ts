import { ScheduleService } from "../services/schedule.service";
import { StatusCode } from "../../utils/status.code";
import { Request, Response } from "express";
import { fakeScheduleData } from "../__mocks__/fake.schedule.data";

export class ScheduleController {
    constructor(private readonly scheduleService: ScheduleService) { }

    async getAll(req: Request, res: Response) {
        const result = await this.scheduleService.getAll();
        const { user } = req.query
        if (user) {
            const result = await this.scheduleService.getAllByUser(user as string);
            return res.status(StatusCode.OK).json(result);

        }

        if ("promiseError" in result) {
            return res.status(StatusCode.INTERNAL_SERVER_ERROR).json(result);
        }

        return res.status(StatusCode.OK).json(result);
    }

    async getById(req: Request, res: Response) {
        const { id } = req.params;

        const result = await this.scheduleService.getById(id);

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

        const result = await this.scheduleService.create(body);

        if ("promiseError" in result) {
            return res.status(StatusCode.INTERNAL_SERVER_ERROR).json(result);
        }

        return res.status(StatusCode.CREATED).json(result);
    }

}