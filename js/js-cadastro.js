var dados = []
var aux = []

function pegardados() {
  aux = []
  aux.push(document.getElementById('nome').value)
  aux.push(document.getElementById('sobrenome').value)
  aux.push(document.getElementById('gmail').value)
  aux.push(document.getElementById('senha').value)
  aux.push(true)

  dados.push(aux)

  adicionarnolocal()
}

function adicionarnolocal() {
  window.localStorage.setItem('login', JSON.stringify(dados))
  window.location.href = './login.html'
}
