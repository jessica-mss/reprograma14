const express = require('express')
const app = express()

//TODO:
//conectar o db
const db = require('./src/data/database')
db.connect()
//usar as rotas
app.use(express.json())

const diretorRoutes = require('./src/routes/diretorRoutes')
app.use('/diretor', diretorRoutes)

const titulosRouter = require('./src/routes/tituloRoutes')
app.use('/titulos', titulosRouter)

const Port=8080

app.listen(Port, () => console.log(`Listineng on port ${Port}`))
