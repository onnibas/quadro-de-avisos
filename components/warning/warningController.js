const Knex = require('knex')

const router = require('express').Router()
const Aviso = require('../warning')

router.get('/', async (req,res)=>{
  const avisos = await Aviso.selecionarTodos()
  res.render('index', {avisos})
})

router.get('/warnings', async (req,res)=>{
  const avisos = await Aviso.selecionarTodos()
  res.render('warning', {avisos})
})

router.get('/warnings/new', (req,res)=>{
  res.render('warningForm')
})

router.get('/warnings/edit/:id', async (req,res)=>{
  const id = req.params.id
  const aviso = await Aviso.selecionarAviso(id)
  res.render('warningForm',{aviso})
})

router.post('/warnings/new', async (req,res)=>{
  const titulo = req.body.titulo
  const data = req.body.data
  const mensagem = req.body.mensagem

  const msg = await Aviso.salvar({titulo, data, mensagem})
  res.render('warningForm', {msg})
})

router.post('/warnings/edit/:id', async (req,res)=>{
  const id = req.body.id
  const titulo = req.body.titulo
  const data = req.body.data
  const mensagem = req.body.mensagem
  
  const msg = await Aviso.editar({titulo, data, mensagem}, id)

  if(msg.tipo === "sucesso"){
    res.redirect('/warnings')
  }
  else{
    res.render('warningForm',{msg})
  }
})

router.get('/warnings/excluir/:id', async (req,res)=>{
  const id = Number(req.params.id)
  await Aviso.excluir(id)
  res.redirect('/warnings')
})

module.exports = router