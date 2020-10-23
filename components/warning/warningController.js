const router = require('express').Router()

router.get('/', (req,res)=>{
  res.send('Página Principal')
})

router.get('/warnings', (req,res)=>{
  res.send('Avisos Cadastrados')
})

router.get('/warnings/new', (req,res)=>{
  res.render('warningForm')
})

module.exports = router