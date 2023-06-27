const ProdutoModel = require("../models/produto.models");

exports.create = (req, res) => {
    if (!req.body.nome || !req.body.valor){
        res.status(400).send({
            message: "Conteúdo do corpo da requisição vazia."
        });
    }else{
        const produto = new ProdutoModel ({
            nome: req.body.nome,
            valor:req.body.valor
        });
        ProdutoModel.create(produto, (err, data) =>{
            if (err){
                res.status(500).send({
                    message: err.message || "Ocorreu ao inserir os dados"
                });
            }else {
                res.send(data);
            }
        })
    }
}
exports.findAll = (req, res) => {
    ProdutoModel.getAll((err, data) =>{
        if(err){
            res.status(500).send({
                message: err.message || "Ocorreu erro desconhecido!"
            });
        } else{
            res.send(data);
        }
    })
}

exports.findById = (req, res) => {
    ProdutoModel.findById(req.params.produtoId, (err, data)=> {
        if(err){
            if(err.type == "not_found"){
                res.status(404).send({
                    message: "Produto não encrontrado com ID: "+req.params.produtoId
                });
            }else{
                res.status (500).send({
                    message: "Erro ao retornar o produto com ID"+req.params.produtoId
                });
            }
        }else {
            res.send(data);
        }
    })
}
exports.update = (req, res) => {
    if(!req.body.nome || !req.body.valor){
        res.status(400).send({
            message: "Conteúdo do corpo da requisição vazia."
        });
    }else { 
        const produto = new ProdutoModel({
            nome: req.body.nome,
            valor: req.body.valor
        });
    ProdutoModel.updateById(req.params.produtoId, produto, (err, data)=>{
        if(err){
            if (err.type == "not_found"){
                res.status(404).send({
                    message: "Produto não encontrado."
                })
            }else {
                res.status(500).send({
                    message: "Erro ao atualizar produto."
                })
            }
        }else{
            res.send(data)
        }
    });
}
}

exports.delete = (req, res) => {
        ProdutoModel.remove(req.params.produtoId, (err, data)=>{
            if(err){
                if (err.type == "not_found"){
                    res.status(404).send({message: "Produto não encontrado."})
                }else{
                    res.status(500).send({message: "Erro ao deletar produto."})
                }
            }else {
                res.send({message: "Produto deletado com sucesso"});
            }
        })
}
exports.deleteAll = (req, res) => {
    ProdutoModel.removeAll((err, data) =>{
        if(err){
            res.status(500).send({message: "Erro ao deletar produto."})
        }else{
            res.send({message: "TODOS os produtos deletado com sucesso."});
        }
    })
}