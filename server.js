//importando as dependências
const express = require('express')
const bodyParser = require('body-parser')
const moment = require('moment')

//importando as rotas do aviso
const routerWarning = require('./components/warning/warningController')

//instanciando o express
const app = express()

//configurando o ejs e a pasta pública
app.set('view engine', 'ejs')
app.use(express.static('public'))

moment.locale("pt-br")
app.locals.moment = moment

//configurando o body-parser
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

//rotas
app.use(routerWarning)

//localizando a porta
app.listen(3000)