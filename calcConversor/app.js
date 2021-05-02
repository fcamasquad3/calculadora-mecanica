let valorTela = document.getElementById("telaEntrada");
let valorSaida = document.getElementById("telaSaida");
let calculo = 0;

// criação de arrays para function PopulacbMedidas()
let pacoteMedidas = {
  'Medidas': ['Quilômetro','Milhas','Metro','Pés','Centímetros','Polegadas'],
  'Temperaturas': ['Fahrenheit' , 'Celsius'],
  'Dados': ['Byte', 'Megabyte', 'Gigabyte', 'Terabyte']
}

//chamada da função e desenvolvimento da mesma, populando os selects top-tipo
$('#opConversores').on('change', function() {

  let selectValue = $(this).val();

  $('#opTipo1').empty();
  $('#opTipo2').empty();
  
  for (i = 0; i < pacoteMedidas[selectValue].length; i++) {
    $('#opTipo1').append("<option value='" + pacoteMedidas[selectValue][i] + "'>" + pacoteMedidas[selectValue][i] + "</option>");
  }
  for (i = 0; i < pacoteMedidas[selectValue].length; i++) {
    $('#opTipo2').append("<option value='" + pacoteMedidas[selectValue][i] + "'>" + pacoteMedidas[selectValue][i] + "</option>");
  }
});

//adiciona na tela da calculadora o caractere (número/operação) selecionado
function adicionarNaTela (telaEntrada,caractere) {
  if (telaEntrada.value == null || telaEntrada.value == 0) {
    telaEntrada.value = caractere
  } else {
    telaEntrada.value += caractere
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
  valorSaida.value = null;
}

function deletarConteudo() {
  valorTela.value = 0;
  valorSaida.value = 0;
}

function converte() {

  let primeiroSelect = document.getElementById("opTipo1").value;
  let segundoSelect = document.getElementById("opTipo2").value; 
  
  if (primeiroSelect == segundoSelect)
  {
     valorSaida.value = valorTela.value;
  }  
  
  else if(primeiroSelect == "Quilômetro"){
    switch(segundoSelect){
      case "Milhas":
        KmParaMilhas();
      break;
      case "Metro":
        KmParaMetro();
      break;
      case "Pés":
        KmParaPes();
      break;
      case "Centímetros":
        KmParaCm();
      break;
      case "Polegadas":
        KmParaPolegadas();
      break;          
    }
  } 
  
}

function KmParaMilhas(){   
  calculo = valorTela.value / 1.609;
  valorSaida.value = calculo.toFixed(4);  
}

function KmParaMetro(){
  calculo = valorTela.value * 1000;
  valorSaida.value = calculo;
}

function KmParaPes(){
  calculo = valorTela.value * 3281;
  valorSaida.value = calculo;
}

function KmParaCm(){
  calculo = valorTela.value * 100000;
  valorSaida.value = calculo;
}

function KmParaPolegadas(){
  calculo = valorTela.value * 39370;
  valorSaida.value = calculo;
}


