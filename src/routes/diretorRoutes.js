const express=require('express')
const router=express.Router()
const controller=require('../controllers/diretorControllers')
const controllerCreate=require('../controllers/diretorPostControllers')
const controllerUpdate=require('../controllers/diretorUpdateControllers')
const controllerDelete=require('../controllers/diretorDelControllers')

//listar todos os diretores/ get find 

router.get('/',controller.getAll)

router.post('/',controllerCreate.createDiretor)

router.patch('/:id',controllerUpdate.updateOne)

router.delete('/:id',controllerDelete.deleteDiretor)



module.exports=router