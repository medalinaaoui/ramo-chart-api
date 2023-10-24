import kpiCotroller from "../controllers/kpiController.js";
import express from "express";

const kpiRouter = express.Router();

kpiRouter.get("/", kpiCotroller);

export default kpiRouter;
