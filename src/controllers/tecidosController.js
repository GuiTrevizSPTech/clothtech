var usuarioModel = require("../models/usuarioModel");
var aquarioModel = require("../models/aquarioModel");


function tecidos(){

     tecidosModel.tecidos(nome, email, senha, fkEmpresa)
                .then(
                    function (resultado) {
                        res.json(resultado);
                    }
                ).catch(
                    function (erro) {
                        console.log(erro);
                        console.log(
                            "\nHouve um erro ao realizar o cadastro! Erro: ",
                            erro.sqlMessage
                        );
                        res.status(500).json(erro.sqlMessage);
                    }
                );
}

module.exports = {
    tecidos
}