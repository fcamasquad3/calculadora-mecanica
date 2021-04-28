let valorTela = document.getElementById("tela")
let calculo

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
  if (valorTela.value.includes("%")) {   
    valorTela.value = eval(porcento())
  } else if (valorTela.value.includes("!")) {
    valorTela.value = eval(fatorial())
  } else {
    valorTela.value = eval(valorTela.value)
  }
  
}

//deletar o último caractere inserido
function deletar() {
  let ultimo = valorTela.value.length - 1
  valorTela.value = valorTela.value.slice(0, ultimo)
}

function mudarSinal() {
  tela.value = -tela.value
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
        end = i
        break
      }
    }
    contaPorcento = contaPorcento.split("").reverse().join("")
    valorPorcento = parseInt(total) * (parseInt(contaPorcento) / 100)
    calculo = valorTela.value.slice(0, end) + "+" + valorPorcento

    return calculo
  }
}

function fatorial() {
  if (valorTela.value.includes("!")) {
    let numero = ""
    let resultado = 1;

    for (let char of valorTela.value) {
      console.log(char)
      if (isNaN(parseInt(char)) ===  false) {
        numero += char 
      } else {
        break
      }
    }

    for(let count = 1 ; count <= parseInt(numero); count++) {
      resultado *= count;
    }
    
    return resultado.toString()
  }
}