import { Schedule } from "../models/schedule.model"
import { Types } from "mongoose";

export const fakeId = "632130d41623c49bf7b1c7e9";
export const fakeBookData: Schedule[] = [
    {
        idBeneficiario: new Types.ObjectId(),
        idRepresentante: new Types.ObjectId(),
        dateAndHourStart: new Date('2023-12-15T13:30'),
        dateAndHourFinish: new Date('2023-12-15T15:30'),
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        idBeneficiario: new Types.ObjectId(),
        idRepresentante: new Types.ObjectId(),
        dateAndHourStart: new Date('2023-12-15T15:30'),
        dateAndHourFinish: new Date('2023-12-15T16:00'),
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        idBeneficiario: new Types.ObjectId(),
        idRepresentante: new Types.ObjectId(),
        dateAndHourStart: new Date('2023-12-15T16:00'),
        dateAndHourFinish: new Date('2023-12-15T17:00'),
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        idBeneficiario: new Types.ObjectId(),
        idRepresentante: new Types.ObjectId(),
        dateAndHourStart: new Date('2023-12-15T17:00'),
        dateAndHourFinish: new Date('2023-12-15T17:30'),
        createdAt: new Date(),
        updatedAt: new Date()
    }
]
export const updatedBook: Schedule = {
    idBeneficiario: new Types.ObjectId(),
    idRepresentante: new Types.ObjectId(),
    dateAndHourStart: new Date('2023-12-15T10:30'),
    dateAndHourFinish: new Date('2023-12-15T11:00'),
    createdAt: new Date(),
    updatedAt: new Date()
}