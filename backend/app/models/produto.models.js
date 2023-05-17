const sql = require("./db.js");

const ProdutoModel = function(produto){
    this.name = produto.nome;
    this.valor = produto.valor;

}

ProdutoModel.create=(produto, result)=> {

};
ProdutoModel.findById=(produtoId, result)=> {

};
ProdutoModel.getAll=result=> {

};
ProdutoModel.updateById=(produtoId, produto,result)=> {
    
};
ProdutoModel.remove=(produtoId, result)=> {

};

ProdutoModel.removeAll=(result)=> {

};

module.exports=ProdutoModel;