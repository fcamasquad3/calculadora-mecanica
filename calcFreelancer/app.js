let nomeJob = document.createElementById('nomeJob');

let valorMes = document.createElementById('valorMes');
let valorHorasDia = document.createElementById('valorHorasDia');
let valorSemana = document.createElementById('valorSemana');
let horasJob = document.createElementById('horasJob');
let valorHoraTrabalho = document.createElementById('valorHoraTrabalho');

// ex: 4000 / 6 / 6 / 4
valorHoraTrabalho.value = valorMes.value / valorHorasDia.value / valorSemanaSemana.value

function calculate () {
  let resultado = 0;

  resultado = valorHoraTrabalho * horasJob;

  return resultado
}

//valor do Job: ${nome.Job}