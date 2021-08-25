const mongoose = require('mongoose')

const Titulo = require('../models/titulo')

const getAllAkira = async (req, res) => {

  const titulos = await Titulo.find().populate('diretor')
  const titulosFiltrados = titulos.filter(titulo => titulo.diretor.nome == "Akira Kurosawa")
  res.json(titulosFiltrados)

}

const getAllSofia=async (req, res) => {

  const titulos = await Titulo.find().populate('diretor')
  const titulosFiltrados = titulos.filter(titulo => titulo.diretor.nome == "Sofia Coppola")
  res.json(titulosFiltrados)

}

const getAllIngmar=async (req, res) => {

  const titulos = await Titulo.find().populate('diretor')
  const titulosFiltrados = titulos.filter(titulo => titulo.diretor.nome == "Igmar Bergman")
  res.json(titulosFiltrados)
}


const getAllScorsese=async (req, res) => {

  const titulos = await Titulo.find().populate('diretor')
  const titulosFiltrados = titulos.filter(titulo => titulo.diretor.nome == "Martin Scorsese")
  res.json(titulosFiltrados)

}


const getAll = async (req, res) => {

  const titulos = await Titulo.find().populate('diretor')
  res.status(200).json(titulos)

}


const getTituloById=async(req,res)=>{

  try{
      //tenta encontrar um filme pelo id 
      const tituloId= await Titulo.findById(req.params.id)
      console.log(tituloId);

      if (tituloId==null){
          return res.status(404).json({ message: "filme não encontrado"})
      }

      if(tituloId !=null){
          
          return res.status(200).json(tituloId)
      }

      
     }catch(err){
      res.status(500).json({ message:err.message })

  }

}

const createTitle = async (req, res) => {
  const titulo = new Titulo({
    _id: new mongoose.Types.ObjectId(),
    nome: req.body.nome,
    genero: req.body.genero,
    descricao: req.body.descricao,
    diretor: req.body.diretor,
    criadoEm: req.body.criadoEm
  })
  
  const tituloJaExiste=await Titulo.findOne({ nome: req.body.nome })
    if(tituloJaExiste){
      return res.status(409).json( {error :'Titulo ja cadastrado'} )
    }

  try {
    const novoTitulo = await titulo.save()
    res.status(201).json(novoTitulo)
  } catch (err) {
    res.status(400).json({ message: err.message})
  }
}



const replaceOne=async(req,res)=>{

  try{
      
      const titulo= await Titulo.findById(req.params.id)

      if (titulo==null){
          return res.status(404).json({ message: "filme não encontrado"})
      }

      if(req.body.nome !=null){
          titulo.nome=req.body.nome,
          titulo.genero=req.body.genero,
          titulo.descricao=req.body.descricao
      }

      const filmeAtualizado= await titulo.save()
      res.status(200).json(filmeAtualizado)

  }catch(err){
      res.status(500).json({ message:err.message })

  }

}

const deleteFilme= async(req, res) => {
  
  try {
    //Tenta encontrar um estudio pelo id
    const tituloId = await Titulo.findById(req.params.id)
    //Se você não encontrar me retorne o erro
    if (tituloId == null) {
      return res.status(404).json({message: "estudio não encontrado"})
    }

    await tituloId.remove()
    //Retornando o documento atualizado com o código de sucesso
    res.status(200).json({message: "Filme deletado com sucesso"})

  } catch (err) {
    //Se houve qulquer erro acima, mostre qual erro foi esse 
    res.status(500).json({message: err.message})
  }

}


module.exports = {
  getAll,
  getAllSofia,
  getAllIngmar,
  getAllScorsese,
  createTitle,
  getAllAkira,
  getTituloById,
  replaceOne,
  deleteFilme
}