let valorTela = document.getElementById("tela")

//adiciona na tela da calculadora o caractere (número/operação) selecionado
function adicionarNaTela (tela,caractere) {
  if (tela.value == null || tela.value == 0) {
    tela.value = caractere
  } else {
    tela.value += caractere
  }
}

//pega a string formada na tela e computa o resultado
function mostrarResultado() {
  valorTela.value = eval(valorTela.value)
}

//deletar o último caractere inserido
function deletar() {
  let ultimo = valorTela.value.length - 1
  valorTela.value = valorTela.value.slice(0, ultimo)
}

function porcento() {
  let total = ""
  let contaPorcento = ""
  let valorPorcento = ""
  
  if (valorTela.value.includes("%")) {
    for (let i = valorTela.value.length - 2; i >= 0; i--) {
      if (isNaN(parseInt(valorTela.value[i])) === false) {
        contaPorcento += valorTela.value[i]
      } else {
        break
      }
    }

    for (let i = 0; i >= 0; i++) {
      if (isNaN(parseInt(valorTela.value[i])) === false) {
        total += valorTela.value[i]
      } else {
        break
      }
    }
    contaPorcento = contaPorcento.split("").reverse().join("")
    valorPorcento = parseInt(total) * (parseInt(contaPorcento) / 100)
  }

  return valorPorcento
}