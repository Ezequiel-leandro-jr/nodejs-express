import express, { Request, Response } from "express";

const app = express();

app.get("/", (req: Request, res: Response) => {

    res.send("Bem-vindo ao meu servidor!");

});

const porta: number = 3000;

app.listen(porta, () => {

    console.log(`Servidor rodando em http://localhost:${porta}`);

});

