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

  .catch(err =>{
    return{tipo:"erro", corpo:"Erro: " + err}
  })
}//fim do método salvar

module.exports = {salvar}