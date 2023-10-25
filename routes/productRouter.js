import productCotroller from "../controllers/productController.js";
import express from "express";

const productRouter = express.Router();

productRouter.get("/", productCotroller);

export default productRouter;
