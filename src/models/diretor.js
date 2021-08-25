const mongoose=require('mongoose')

const diretorSchema= new mongoose.Schema({

    _id: mongoose.Schema.Types.ObjectId,
    nome:{
        type:String,
        required:true
    },
    criadoEm:{
        type:Date,
        required:true,
        default:new Date
    },
        //gera por padrão uma versão para cada atualização do documento
      versionKey: false

})

const diretores=mongoose.model('diretor',diretorSchema)

module.exports=diretores