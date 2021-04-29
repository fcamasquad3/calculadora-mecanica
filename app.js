//IDEIA INICIAL

let nomeJob = document.getElementById("nomeJob")

let valorMes = document.getElementById("valorMes")
let valorHorasDia = document.getElementById("valorHorasDia")
let valorSemana = document.getElementById("valorSemana")
let horasJob = document.getElementById("horasJob")
let valorHoraTrabalho = document.getElementById("valorHoraTrabalho")


// ex: 4000 = 6 / 4 / 4
valorHoraTrabalho = valorMes.value / valorHorasDia.value / valorSemana.value


function calculate () {
  let resultado = 0;

  resultado = valorHoraTrabalho * horasJob;

  return resultado                                   
} 

//Novas alterações
// valor do Job ${nome.Job}: