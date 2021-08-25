const express = require('express')
const router = express.Router()
const controller = require('../controllers/tituloControllers')

//listar todos os titulos 
router.get('/akira', controller.getAllAkira)

router.get('/sofia', controller.getAllSofia)

router.get('/ingmar', controller.getAllIngmar)

router.get('/scorsese', controller.getAllScorsese)

//listar todos os titulos/get/find
router.get('/', controller.getAll)

//listar um titulo/get/findById
router.get('/:id',controller.getTituloById)

//criar um novo titulo/post/save
router.post('/', controller.createTitle)

//atualizar uma informacao especifica num titulo/patch/findById/save
router.patch('/:id',controller.replaceOne)

//deletar um titulo/delete/findById/remove
router.delete('/:id',controller.deleteFilme)

module.exports = router