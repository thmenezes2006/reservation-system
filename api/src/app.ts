import express from "express";
import { mongoConnect } from "./db/mongo.connection";
import usersRoutes from "./users/routes/user.routes";
import schedulesRoutes from "./schedules/routes/schedule.routes";



mongoConnect();
const app = express();
const port = 3000;

app.use(express.json());
app.use("/users", usersRoutes);
app.use("/schedules", schedulesRoutes);
app.listen(port, () => console.log('Server is running on port ' + port))