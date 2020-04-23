const dados = require('../Config/dados')

module.exports = {
  data (_req, res) {
    const data = {'Dados Pessoais: ': dados.dados()[0]}
    res.json(data)
  },

  resume (_req, res) {
    const data = {'Resumo: ': dados.dados()[1]}

    res.json(data)
  },

  college (_req, res) {
    const data = {'Formação Acadêmica: ': dados.college()}

    res.json(data)
  }
}