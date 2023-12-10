import express from "express";
import { mongoConnect } from "./db/mongo.connection";
import usersRoutes from "./users/routes/user.routes";
import schedulesRoutes from "./schedules/routes/schedule.routes";
import cors from 'cors';
const app = express();

const corsOptions = {
    origin: process.env.URL_APP_VUE,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204,
};

const port = 3000;
app.use(cors(corsOptions));

app.use(express.json());
app.use("/users", usersRoutes);
app.use("/schedules", schedulesRoutes);
mongoConnect();
app.listen(port, () => console.log('Server is running on port ' + port))