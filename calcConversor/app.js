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
        flag=true;
        QuilometroEMilha(flag);
      break;
      case "Metro":   
        flag=true;    
        QuilometroEMetro(flag);
      break;
      case "Pé":
        flag=true;
        QuilometroEPe(flag);
      break;
      case "Centímetro":  
        flag=true;      
        QuilometroECm(flag);
      break;
      case "Polegada":
        flag=true;
        QuilometroEPolegada(flag);
      break;          
    }
  } 
  else if(primeiroSelect == "Milha"){
    switch(segundoSelect){
      case "Quilômetro":
        QuilometroEMilha(flag);
      break;
      case "Metro":
        flag=true;
        milhaEMetro(flag);
      break;
      case "Pé":
        flag=true;
        milhaEPe(flag);
      break;
      case "Centímetro":
        flag=true;
        milhaECm(flag);
      break;
      case "Polegada":
        flag=true;
        milhaEPolegada(flag);
      break;          
    }
  }  
  else if(primeiroSelect == "Metro"){
    switch(segundoSelect){
      case "Quilômetro":
        QuilometroEMetro(flag);
      break;
      case "Milha":
        milhaEMetro(flag);
      break;
      case "Pé":
        flag = true;
        metroEPe(flag);
      break;
      case "Centímetro":
        flag = true;
        metroECm(flag);
      break;
      case "Polegada":
        flag = true;
        metroEPolegada(flag);
      break;          
    }
  } 

  else if(primeiroSelect == "Pé"){
    switch(segundoSelect){
      case "Quilômetro":
        QuilometroEPe(flag);
      break;
      case "Milha":
        milhaEPe(flag);
      break;
      case "Metro":        
        metroEPe(flag);
      break;
      case "Centímetro":
        flag = true;
        peECm(flag);
      break;
      case "Polegada":
        flag = true;
        peEPolegada(flag);
      break;          
    }
  } 
}

// funções relacionadas a unidades de comprimento
////funções relacionadas a conversão a partir de quilômetro
function QuilometroEMilha(flag){    
  if(flag){
    calculo = valorTela.value / 1.609;
    valorSaida.value = calculo.toFixed(4); 
  }
  else{
    calculo = valorTela.value * 1.690;
    valorSaida.value = calculo;
  }
}

function QuilometroEMetro(flag){
  if(flag){
  calculo = valorTela.value * 1000;
  valorSaida.value = calculo;
  }
  else {
    calculo = valorTela.value / 1000;
    valorSaida.value = calculo;
  }
}

function QuilometroEPe(flag){
  if(flag){
    calculo = valorTela.value * 3281;
    valorSaida.value = calculo;
  }
  else{
    calculo = valorTela.value / 3281;
    valorSaida.value = calculo.toFixed(7);
  }
  
}

function QuilometroECm(flag){
  if(flag){
    calculo = valorTela.value * 100000;
    valorSaida.value = calculo;
  }
  else {
    calculo = valorTela.value / 100000;
    valorSaida.value = calculo;
  }
}

function QuilometroEPolegada(flag){
  if(flag){
    calculo = valorTela.value * 39370;
    valorSaida.value = calculo;
  }
  else{
    calculo = valorTela.value / 39370;
    valorSaida.value = calculo;
  }
}



////funções relacionadas a conversão a partir de milha

function milhaEMetro(flag){
  if(flag){
  calculo = valorTela.value * 1609;
  valorSaida.value = calculo;
  }
  else {
    calculo = valorTela.value / 1609;
    valorSaida.value = calculo.toFixed(4);
  }
}

function milhaECm(flag){
  if(flag){
  calculo = valorTela.value * 160934;
  valorSaida.value = calculo;
  }
  else {
    calculo = valorTela.value / 160934;
    valorSaida.value = calculo;
  }
}

function milhaEPolegada(flag){ 

  if(flag){
    calculo = valorTela.value * 63360;
    valorSaida.value = calculo;
  }
  else {
    calculo = valorTela.value / 63360;
    valorSaida.value = calculo;
  }
}

function milhaEPe(flag){
  if(flag){
    calculo = valorTela.value * 5280;
    valorSaida.value = calculo;
  }
  else {
    calculo = valorTela.value / 5280;
    valorSaida.value = calculo.toFixed(9);
  } 
}


////funções relacionadas a conversão a partir de metro
function metroECm(flag){
  if(flag){
    calculo = valorTela.value * 100 ;
    valorSaida.value = calculo;
  }
  else {
    calculo = valorTela.value / 100;
    valorSaida.value = calculo;
  }   
}
function metroEPolegada(flag){
  if(flag){
    calculo = valorTela.value * 39.37;
    valorSaida.value = calculo;
  }
  else {
    calculo = valorTela.value / 39.37;
    valorSaida.value = calculo;
  } ;
}
function metroEPe(flag){
  if(flag){
    calculo = valorTela.value * 3.281;
    valorSaida.value = calculo;
  }
  else {
    calculo = valorTela.value / 3.281;
    valorSaida.value = calculo.toFixed(4);
  } 
}

////funções relacionadas a conversão a partir de pé


function peECm(flag){
  if(flag){
    calculo = valorTela.value * 30.48;
    valorSaida.value = calculo;
  }
  else {
    calculo = valorTela.value / 30.48;
    valorSaida.value = calculo;
  } 
}

function peEPolegada(flag){
  if(flag){
    calculo = valorTela.value * 12;
    valorSaida.value = calculo;
  }
  else {
    calculo = valorTela.value / 12;
    valorSaida.value = calculo;
  } 
}