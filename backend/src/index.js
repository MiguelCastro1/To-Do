import express from "express";
import dotenv from "dotenv"
import router from "./routes/index.js"
import cors from "cors";

const app = express();

dotenv.config()

const PORT = process.env.PORT_BACK || 3333

app.use(express.json());

app.use(cors());

app.use(router)


app.listen(PORT, () => {
  console.log(`Servidor iniciado na porta ${PORT}`);
})

export default app