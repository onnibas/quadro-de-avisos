const Knex = require('knex')

const router = require('express').Router()
const Aviso = require('../warning')


router.get('/', (req,res)=>{
  res.send('Página Principal')
})

router.get('/warnings', (req,res)=>{
  res.send('Avisos Cadastrados')
})

router.get('/warnings/new', (req,res)=>{
  res.render('warningForm')
})

router.post('/warnings/new', async (req,res)=>{
  const titulo = req.body.titulo
  const data = req.body.data
  const mensagem = req.body.mensagem

  const msg = await Aviso.salvar({titulo, data, mensagem})
  res.render('warningForm', {msg})
})

module.exports = router