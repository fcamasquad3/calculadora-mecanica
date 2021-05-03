var nomeJob = document.getElementById("nomeJob")
var result = document.querySelector('#result');

var valorMes = document.getElementById("valorMes")
var valorHorasDia = document.getElementById("valorHorasDia")
var valorSemana = document.getElementById("valorSemana")
var horasJob = document.getElementById("horasJob")              

var valorHoraTrabalho = document.getElementById("valorHoraTrabalho")
var valorJob = document.getElementById("ValorJob")

// Calcula valor das horas trabalhadas
function calcularValorHorasTrabalhadas(valorMes,valorHorasDia,valorSemana ){
  let valorHora = valorMes.value /  valorHorasDia.value / valorSemana.value
  return valorHora.toFixed(2)
}

// Calcula o valor do projeto input ValorJob
function calcularValorDoProjeto(valorHora, horasJob){
  calcularValorHorasTrabalhadas(valorMes,valorHorasDia,valorSemana)
  let resultado = valorHora    * horasJob.value
  return resultado.toFixed(2).replace(".", ",")
}

// Mostra resultado nos inputs valorHoraTrabalho e ValorJob ao 
// pressiona o botao CALCULAR 
function mostrarResultado() {
  if (valorMes.value == '' || valorHorasDia.value == '' || valorSemana.value == '' || horasJob.value == '') {
    alert("Por favor preencha todos os campos.")
  } else {
    valorHoraTrabalho.value = calcularValorHorasTrabalhadas(valorMes,valorHorasDia,valorSemana)

    valorJob.value = calcularValorDoProjeto(
    calcularValorHorasTrabalhadas(valorMes,valorHorasDia,valorSemana),horasJob)
    result.innerText = `Valor do projeto ${nomeJob.value.toUpperCase()} é de:`;
  }
}