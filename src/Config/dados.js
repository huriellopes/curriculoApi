dados = () => {
  const dados = [
    {
      'name': 'Huriel Correia Lopes',
      'email': 'huriellopes1996@gmail.com',
      'city': 'Brasília/DF',
      'phone': '+55 61 9 8299-0477',
      'linkedin': 'https://www.linkedin.com/in/huriellopes/'
    },
    {
      'description': 'Profissional com aproximadamente 2 anos de experiência na área de TI. Possui experiência com análise, manutenção e desenvolvimento de sistemas. Utiliza as tecnologias: HTML5, CSS3, Bootstrap, Javascript, Jquery, Ajax, Json, PHP, Laravel, MVC, SQL, POO, Git, Docker e entre outras tecnologias.'
    }
  ]

  return dados;
}

college = () => {
  const college = [
    {
      'college': 'Faculdade Unyleya',
      'course': 'Pós-Graduação em Banco de Dados',
      'period': '02/19 - Em Andamento'
    },
    {
      'college': 'Centro Universitário do Distrito Federal - UDF',
      'course': 'Análise e Desenvolvimento de Sistemas',
      'period': '08/15 - 07/18'
    }
  ]

  return college;
}

module.exports = {
  dados,
  college
}