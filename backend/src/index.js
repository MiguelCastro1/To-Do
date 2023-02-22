import express from "express";
import dotenv from "dotenv"

const app = express();
dotenv.config()
const PORT = process.env.PORT || 3333

app.get('/',(req,res) => [
    res.send("Hello World Back")
])

app.listen(PORT, () => {
  console.log(`Servidor iniciado na porta ${PORT}`);
})