import express from "express";
import productsRouter from "./produto.js"

const router = express.Router();


router.use('/produtos', productsRouter);
router.use('/', (req, res) => res.send("Hello World Backend"))

export default router;