let valorTela = document.getElementById("telaEntrada");
let valorSaida = document.getElementById("telaSaida");
let calculo = 0;

// criação de arrays para function PopulacbMedidas()
let pacoteMedidas = {
  'Medidas': ['Quilômetro','Milha','Metro','Pé','Centímetro','Polegada'],
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
  let flag = false;
  
  if (primeiroSelect == segundoSelect)
  {
     valorSaida.value = valorTela.value;
  }  
  
  else if(primeiroSelect == "Quilômetro"){
    switch(segundoSelect){
      case "Milha":        
        kmParaMilha();
      break;
      case "Metro":
        flag=true;
        kmParaMetro();
      break;
      case "Pé":
        kmParaPe();
      break;
      case "Centímetro":        
        kmEParaCm();
      break;
      case "Polegada":
        kmParaPolegada();
      break;          
    }
  } 
  else if(primeiroSelect == "Milha"){
    switch(segundoSelect){
      case "Quilômetro":
        kmParaMilha();
      break;
      case "Metro":
        milhaParaMetro();
      break;
      case "Pé":
        milhaParaPe();
      break;
      case "Centímetro":
        milhaParaCm();
      break;
      case "Polegada":
        milhaParaPolegada();
      break;          
    }
  } 

  
}

// funções relacionadas a unidades de comprimento
////funções relacionadas a conversão a partir de quilômetro
function kmParaMilha(){    
    calculo = valorTela.value / 1.609;
    valorSaida.value = calculo.toFixed(4); 
}

function kmParaMetro(){
  calculo = valorTela.value * 1000;
  valorSaida.value = calculo;
}

function kmParaPe(){
  calculo = valorTela.value * 3281;
  valorSaida.value = calculo;
}

function kmParaCm(){
  calculo = valorTela.value * 100000;
  valorSaida.value = calculo;
}

function kmParaPolegada(){
  calculo = valorTela.value * 39370;
  valorSaida.value = calculo;
}

////funções relacionadas a conversão a partir de milha
function milhaParaKM(){
  calculo = valorTela.value * 1.609;
  valorSaida.value = calculo;
}
function milhaParaMetro(){
  calculo = valorTela.value * 1690
  valorSaida.value = calculo;
}
function milhaParaCm(){
  calculo = valorTela.value * 160934;
  valorSaida.value = calculo;
}
function milhaParaPolegada(){
  calculo = valorTela.value * 63360;
  valorSaida.value = calculo;
}
function milhaParaPe(){
  calculo = valorTela.value * 5280;
  valorSaida.value = calculo;
}





