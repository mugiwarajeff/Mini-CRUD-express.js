const express = require("express");
const bancoDeDados = require("./bancoDeDados")
const bodyParser = require("body-parser");
const porta = 3000;
const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.post("/produtos", (req, res, next) =>{
    res.send(bancoDeDados.adicionarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    }))
})

app.get("/produtos/:id", (req, res, next) =>{
    res.send(bancoDeDados.getProduto(req.params.id))
})


app.get("/produtos", (req, res, next) => {
    res.send(bancoDeDados.getProdutos())
})

app.put("/produtos/:id", (req, res, next) => {
    res.send(bancoDeDados.adicionarProduto({
        nome: req.body.nome,
        preco: req.body.preco,
        id: req.params.id
    }))
})

app.delete("/produtos/:id", (req, res, next) => {
    res.send(bancoDeDados.rmProduto(req.params.id));
})

app.listen(porta, () => {
    console.log(`A aplicação está ouvindo na porta ${porta}`);
})

