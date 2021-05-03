var  valorHorasDia = document.getElementById("valorHorasDia")
var valorSemana = document.getElementById("valorSemana")
var valorMes = document.getElementById("valorMes")
var valorHoraTrabalho = document.getElementById("valorHoraTrabalho")
var horasJob = document.getElementById("horasJob")              
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
  return resultado.toFixed(2)
}

// Mostra resultado nos inputs valorHoraTrabalho e ValorJob ao 
// pressiona o botao CALCULAR 
function mostrarResultado() {
  valorHoraTrabalho.value = calcularValorHorasTrabalhadas(valorMes,valorHorasDia,valorSemana)

  valorJob.value = calcularValorDoProjeto(
  calcularValorHorasTrabalhadas(valorMes,valorHorasDia,valorSemana),horasJob)
}