import { Schema, model, Model, InferSchemaType } from "mongoose";

export interface DateSchedule {
    dateAndHourStart: string,
    dateAndHourFinish: string
}

const userSchema = new Schema({

    typeUser: {
        type: String,
        required: true,
    },
    userName: {
        type: String,
        required: true,
    },
    userCpf: {
        type: String,
        minLength: 11,
        maxLength: 14,
    },
    userMail: {
        type: String,
        required: true,
        unique: true,
    },
    userAddress: {
        type: String,
        required: true,
    },
    userAddressNumber: {
        type: Number,
        required: true,
    },
    userAddressNeighborhood: {
        type: String,
        required: true,
    },
    userAddressCity: {
        type: String,
        required: true,
    },
    userAddressState: {
        type: String,
        required: true,
    },
    userPassword: {
        type: String,
    },

},
    {
        timestamps: true,
    },
);

export type User = InferSchemaType<typeof userSchema>;

export const UserModel: Model<User> = model("User", userSchema);