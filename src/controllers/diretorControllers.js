const mongoose=require('mongoose')
const Diretor=require('../models/diretor')

const getAll=(req, res) => {
    //Find sempre retorna uma lista
    Diretor.find(function (err, diretorFound) {
        if (err) {
            res.status(500).send({ message: err.message })
        } else {
            if (diretorFound && diretorFound.length > 0) {
                res.status(200).send(diretorFound);
            } else {
                res.status(204).send();
            }
        }
    })
};


module.exports={
    getAll
}