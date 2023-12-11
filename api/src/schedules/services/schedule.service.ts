import { Schedule } from "../models/schedule.model";
import { ScheduleRepository } from "../repositories/schedule.repository";
import {
    CustomErrors,
    invalidIdError,
    promiseError,
} from "../../utils/error.handler";
import { isIdValid } from "../../utils/id.validator";

export class ScheduleService {
    constructor(private readonly scheduleRepository: ScheduleRepository) { }

    async getAll(): Promise<Schedule[] | CustomErrors> {
        try {
            const schedules = await this.scheduleRepository.getAll();
            return schedules;
        } catch (error) {
            return promiseError(error);
        }
    }

    async getAllByUser(user: string): Promise<Schedule[] | CustomErrors> {
        try {
            const schedules = await this.scheduleRepository.getAllByUser(user);
            return schedules;
        } catch (error) {
            return promiseError(error);
        }
    }

    async getById(id: string): Promise<Schedule | CustomErrors> {
        if (!isIdValid(id)) {
            return invalidIdError(id);
        }

        try {
            const schedule = await this.scheduleRepository.getById(id);
            return schedule;
        } catch (error) {
            return promiseError(error);
        }
    }

    async create(schedule: Schedule): Promise<Schedule | CustomErrors> {
        try {
            const formateedSchedule = { ...schedule };
            const newSchedule = await this.scheduleRepository.create(formateedSchedule);
            return newSchedule;
        } catch (error) {
            return promiseError(error);
        }
    }


    async findAvailableConsultant(schedule: Schedule): Promise<Schedule | CustomErrors> {
        try {

            const representantesSemRegistros = await schedule.aggregate([
                {
                    $match: {
                        $or: [
                            { dateAndHourStart: { $gt: schedule.dateAndHourFinish } },
                            { dateAndHourFinish: { $lt: schedule.dateAndHourStart } }
                        ]
                    }
                },
                {
                    $group: {
                        _id: '$idRepresentante'
                    }
                }
            ]);

            // Obter os IDs dos representantes sem registros
            const representantesSemRegistrosIds = representantesSemRegistros.map((representante: { _id: string; }) => representante._id);

            console.log('IDs dos representantes sem registros:', representantesSemRegistrosIds);

            return representantesSemRegistrosIds;
        } catch (error) {
            console.error('Erro ao encontrar representantes sem registros:', error);
            throw error;
        }
    }

}