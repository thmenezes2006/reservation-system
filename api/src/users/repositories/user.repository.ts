import { DateSchedule, User } from "../models/user.model";
import { Model } from "mongoose";

export class UserRepository {
  constructor(private readonly userModel: Model<User>) { }

  async getAll(): Promise<User[]> {
    const users = await this.userModel.find();

    return users;
  }

  async getById(id: string): Promise<User> {
    const user = await this.userModel.findById(id)
    if (user === null) {
      return {} as User;
    }

    return user;
  }

  async getWhere(where: { field: string, value: string }): Promise<User[]> {

    const query: { [key: string]: string } = {};
    query[where.field] = where.value;
    const users = await this.userModel.find(query)

    return users;
  }

  async create(user: User): Promise<User> {
    const newUser = this.userModel.create(user);
    return newUser;
  }

  async update(id: string, user: User): Promise<User> {
    const updatedUser = await this.userModel.findByIdAndUpdate(id, {
      $set: user,
    }, {
      new: true,
    });

    if (updatedUser === null) {
      return {} as User;
    }

    return updatedUser;
  }

  async findAvailableConsultant(schedule: DateSchedule): Promise<any> {
    const consultants = await this.userModel.aggregate([
      {
        $match: {
          typeUser: 'representante',
        },
      },
      {
        $lookup: {
          from: 'schedules',
          localField: '_id',
          foreignField: 'idRepresentante',
          as: 'schedules',
        },
      },
      {
        $match: {
          $or: [
            {
              schedules: { $size: 0 },
            },
            {
              schedules: {
                $not: {
                  $elemMatch: {
                    $and: [
                      { dateAndHourStart: { $lte: schedule.dateAndHourFinish } },
                      { dateAndHourFinish: { $gte: schedule.dateAndHourStart } },
                    ],
                  },
                },
              },
            },
          ],
        },
      },

    ]);


    if (consultants === null) {
      return {} as User;
    }

    return consultants;
  }

}