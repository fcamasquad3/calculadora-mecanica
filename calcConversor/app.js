const valorTela = document.getElementById("cbMedida1");

// criação de arrays para function PopulacbMedidas()
let pacoteMedidas = {
  'Medidas': ['Quilômetro','Milhas','Metro','Pés','Centímetros','Polegadas'],
  'Temperaturas': ['Fahrenheit' , 'Celsius'],
  'Dados': ['Byte', 'Megabyte', 'Gigabyte', 'Terabyte']
}

//chamada da função e desenvolvimento da mesma, populando os selects top-tipo
$('#op-conversores').on('change', function() {

  let selectValue = $(this).val();

  $('#op-tipo1').empty();
  $('#op-tipo2').empty();
  
  for (i = 0; i < pacoteMedidas[selectValue].length; i++) {
    $('#op-tipo1').append("<option value='" + pacoteMedidas[selectValue][i] + "'>" + pacoteMedidas[selectValue][i] + "</option>");
  }
  for (i = 0; i < pacoteMedidas[selectValue].length; i++) {
    $('#op-tipo2').append("<option value='" + pacoteMedidas[selectValue][i] + "'>" + pacoteMedidas[selectValue][i] + "</option>");
  }
});

//adiciona na tela da calculadora o caractere (número/operação) selecionado
function adicionarNaTela (cbMedida1,caractere) {
  if (cbMedida1.value == null || cbMedida1.value == 0) {
    cbMedida1.value = caractere
  } else {
    cbMedida1.value += caractere
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



