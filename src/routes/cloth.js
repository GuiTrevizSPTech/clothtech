var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");
const { tecidos } = require("../controllers/tecidosController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/tecidos", function (req, res) {
    tecidosController.tecidos(req, res);
})

module.exports = {
tecidos
}