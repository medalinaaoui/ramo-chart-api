import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import kpiRouter from "./routes/kpiRouter.js";
import kpi from "./model/kpi.js";
import { kpis } from "./data/data.js";
const app = express();
dotenv.config();
const port = 8001;
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(cors());

app.use("/api/kpi", kpiRouter);

const connect = async () => {
  try {
    await mongoose.connect(process.env.DBURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("connected successfully");
    app.listen(process.env.PORT || port, (error) => {
      if (!error) console.log("server runnig on port: ", port);
    });
    // await mongoose.connection.db.dropDatabase();
    // kpi.insertMany(kpis);
  } catch (error) {
    if (error) console.log("error from connecting to mongoDb: ", error);
  }
};
connect();
