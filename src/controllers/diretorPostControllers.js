const mongoose=require('mongoose')
const Diretor=require('../models/diretor')

const createDiretor=async(req,res)=>{
    const diretor=new Diretor({
        _id: new mongoose.Types.ObjectId(),
        nome: req.body.nome,
        criadoEm: req.body.criadoEm

    })
    const diretorJaExiste=await Diretor.findOne({nome: req.body.nome})
    if(diretorJaExiste){
        return res.status(409).json({error:'Diretor ja cadastrado'})
    }
    try{
        const novoDiretor=await diretor.save()
        res.status(201).json(novoDiretor)

    }catch(err){
        res.status(400).json({ message:err.message })
    }

}



module.exports={
    createDiretor
}