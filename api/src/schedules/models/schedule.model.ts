import { Schema, model, Model, InferSchemaType } from "mongoose";

const scheduleSchema = new Schema({
    idBeneficiario: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    idRepresentante: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },

    dateAndHourStart: {
        type: Date,
        required: true
    },
    dateAndHourFinish: {
        type: Date,
        required: true,
    },
},
    {
        timestamps: true,
    },
);

export type Schedule = InferSchemaType<typeof scheduleSchema>;

export const ScheduleModel: Model<Schedule> = model("Schedule", scheduleSchema);