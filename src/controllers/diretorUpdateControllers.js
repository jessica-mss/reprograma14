const mongoose=require('mongoose')
const Diretor=require('../models/diretor')

const updateOne=async(req,res)=>{

    try{
        //tenta encontrar um diretor pelo id 
        const diretor= await Diretor.findById(req.params.id)

        if (diretor==null){
            return res.status(404).json({ message: "diretor não encontrado"})
        }

        if(req.body.nome !=null){
            diretor.nome=req.body.nome
        }

        const diretorAtualizado= await diretor.save()
        res.status(200).json(diretorAtualizado)

    }catch(err){
        res.status(500).json({ message:err.message })

    }


}

module.exports={

    updateOne 
}