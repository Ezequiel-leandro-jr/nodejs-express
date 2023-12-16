import express, { Request, Response } from "express";
import bodyParser from "body-parser";

const app = express();

// Adicionando o middleware BodyParser para processamento dos dados do corpo da solicitação
app.use(bodyParser.json());

//rota raiz
app.get("/", (req: Request, res: Response) => {

    res.send("Esta é a página inicial do servidor!");

});

const porta: number = 3003;

//iniciando o servidor
app.listen(porta, () => {

    console.log(`Servidor rodando em http://localhost:${porta}`);

});

//array para simular um banco de dados simples, com os usuários
let usuarios = [

    { id: 1, nome: "Son Goku", raca: "Saiyajin" },
    
    { id: 2, nome: "Dendê", raca: "Namekuseijin" },
    
    ];


                 //IMPLEMENTAÇÃO CRUD//

//GET - rotas para obter todos os livros
app.get("/usuarios", (req: Request, res: Response) => {

    res.send(usuarios);
    
    });

//GET - Rota para obter um livro pelo ID:
app.get("/usuarios/:id", (req: Request, res: Response) => {

    const usuario = usuarios.find((l) => l.id === parseInt(req.params.id));
    
    if (!usuario) {
    
    return res.status(404).json({ mensagem: "Usuário não encontrado" });
    
    }
    
    res.send(usuario);
    
    });

//POST - Rota para adicionar um novo livro:
app.post("/usuarios", (req: Request, res: Response) => {

    const novoUsuario = {
    
    id: usuarios.length + 1,
    
    nome: req.body.nome,
    
    raca: req.body.raca,
    
    };
    
    if (novoUsuario && novoUsuario.nome) {
        novoUsuario.id = usuarios.length + 1;
        usuarios.push(novoUsuario);

        res.status(201).json({ mensagem: 'Usuário adicionado com sucesso!' });
    } else {
        res.status(400).json({ mensagem: 'Dados inválidos para adicionar usuário!' });
    }
    
    });

//GET - Rota para saudação personalizada:
app.get('/saudacao/:nome', (req, res) => {
    const nome = req.params.nome;
    res.json({ mensagem: `Olá, ${nome}! Bem-vindo ao meu servidor!` });
});
