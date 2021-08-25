const mongoose=require('mongoose')
const diretores=require('../models/diretor')

const deleteDiretor= (req, res) => {
    const requiredId = req.params.id;
    diretores.find({ id: requiredId }, function (err, diretor) {
        if (err) {
            res.status(500).send({ message: err.message })
        } else {
            if (diretor) {
                
                diretores.deleteOne({ id: requiredId }, function (err) {
                    if (err) {
                        res.status(500).send({
                            message: err.message,
                            status: "FAIL"
                            
                        })
                    } else {
                        res.status(200).send({
                            message: 'removido com sucesso',
                            
                            status: "SUCCESS"
                        })
                    }
                })
            } else {
                res.status(404).send({ message: 'Não  removido com esse id' })
            }
        }
    })
};



module.exports={
    deleteDiretor
}