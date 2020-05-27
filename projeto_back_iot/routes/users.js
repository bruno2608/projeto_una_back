var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/cadastro', function(req, res, next) {
  
  //devolvendo resposta para client (front end)
  res.send({"Message": "Seu cadastro foi concluido com sucesso ", "Dados recebidos" :req.body});
});

module.exports = router;
