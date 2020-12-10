const db = require('../knexfile')
/**
 * Inserir um aviso no banco de dados
 * @param {object} aviso 
 * Formato do aviso: {titulo: <string>, data: <date>, mensagem: <string>}
 * @returns {object} Mensagem de sucesso ou de erro
 */
function salvar(aviso){
  return db.insert(aviso).into('avisos')
  .then( _ =>{
    return{tipo:"sucesso", corpo:"Aviso Cadastrado com Sucesso."}
  })

  .catch(erro =>{
    return{tipo:"erro", corpo:"Erro: " + erro}
  })
}//fim da função salvar

/**
 * Selecionar um aviso no banco de dados
 * @returns {object} Objeto com todos os Avisos Cadastrados ou Mensagem de Erro
 */
function selecionarTodos(){
  return db.select('*').from('avisos').orderBy('data', 'DESC')
  .then(avisos =>{
    return avisos
  })
  .catch(erro =>{
    return{tipo:"erro", corpo:"Erro: " + erro}
  })
}//fim da função selecionarTodos

/**
 * Essa função seleciona um Aviso específico
 * @param {*} id ID do Aviso que será selecionado
 * @returns {object} Objeto com Aviso selecionado
 */
function selecionarAviso(id){
  return db.select('*').from('avisos').where('ID_avisos',id).first()
  .then(aviso =>{
    return aviso
  })
  .catch(erro =>{
    return{tipo:"erro", corpo:"Erro: " + erro}
  })
}//fim da função selecionarAviso

function editar(aviso, id){
  return db('avisos').where('ID_avisos',id).update(aviso).from('avisos')
  .then( _ =>{
    return{tipo:"sucesso", corpo:"Aviso Cadastrado com Sucesso."}
  })

  .catch(erro =>{
    return{tipo:"erro", corpo:"Erro: " + erro}
  })
}

/**
 * Função que exclui um Aviso do Banco de Dados
 * @param {int} id ID do Aviso
 */
function excluir(id){
  return db.del().from('avisos').where('ID_avisos',id)
}

module.exports = {salvar, selecionarTodos, selecionarAviso, editar, excluir}