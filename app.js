//adiciona na tela da calculadora o caractere (número/operação) selecionado
function adicionarNaTela (tela,caractere) {
  if (tela.value == null || tela.value == 0) {
    tela.value = caractere
  } else {
    tela.value += caractere
  }
}