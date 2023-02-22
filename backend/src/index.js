import express from "express";
import dotenv from "dotenv"
import router from "./routes/index.js"

const app = express();
dotenv.config()
const PORT = process.env.PORT || 3333

app.use(router)

app.listen(PORT, () => {
  console.log(`Servidor iniciado na porta ${PORT}`);
})