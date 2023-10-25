import transactionCotroller from "../controllers/transactionController.js";
import express from "express";

const transactionRouter = express.Router();

transactionRouter.get("/", transactionCotroller);

export default transactionRouter;
