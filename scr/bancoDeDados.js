const { devNull } = require("os");

const sequencia = {
    _id: 1,
    get id(){return this._id++}
}

const produtos = {}

function adicionarProduto(produto){
    if (!produto.id) produto.id = sequencia.id;
    produtos[produto.id] = produto
    return produto
}

function getProduto(id){
    return produtos[id] || {}
}

function getProdutos(){
    return Object.values(produtos)
}

function rmProduto(id){
    const produtoRemovido = produtos[id];
    delete(produtos[id])
    return produtoRemovido
}

module.exports = {adicionarProduto, getProduto, getProdutos, rmProduto};