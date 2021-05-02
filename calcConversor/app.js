let valorTela = document.getElementById("telaEntrada");
let valorSaida = document.getElementById("telaSaida");
let calculo = 0;

// criação de arrays para function PopulacbMedidas()
let pacoteMedidas = {
  'Comprimento': ['Quilômetro','Milha','Metro','Pé','Centímetro','Polegada'],
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
  let valorBase = 0;
  
  if (primeiroSelect == segundoSelect)
  {
     valorSaida.value = valorTela.value;
  }  
  
  else if(primeiroSelect == "Quilômetro"){
    switch(segundoSelect){
      case "Milha":               
        valorBase = 1.609;
        conversorGenerico(flag,valorBase);
      break;
      case "Metro":   
        flag = true; 
        valorBase = 1000;   
        conversorGenerico(flag,valorBase);
      break;
      case "Pé":
        flag = true;
        valorBase = 3281;
        conversorGenerico(flag,valorBase);
      break;
      case "Centímetro":  
        flag = true;   
        valorBase = 100000;   
        conversorGenerico(flag,valorBase);
      break;
      case "Polegada":
        flag = true;
        valorBase = 39370;
        conversorGenerico(flag,valorBase);
      break;          
    }
  } 
  else if(primeiroSelect == "Milha"){
    switch(segundoSelect){
      case "Quilômetro":
        flag = true;
        valorBase = 1.609;
        conversorGenerico(flag,valorBase);
      break;
      case "Metro":
        flag = true;
        valorBase = 1609;
        conversorGenerico(flag,valorBase);
      break;
      case "Pé":
        flag = true;
        valorBase = 5280;
        conversorGenerico(flag,valorBase);
      break;
      case "Centímetro":
        flag = true;
        valorBase = 160934;
        conversorGenerico(flag,valorBase);
      break;
      case "Polegada":
        flag = true;
        valorBase = 63360;
        conversorGenerico(flag,valorBase);
      break;          
    }
  }  
  else if(primeiroSelect == "Metro"){
    switch(segundoSelect){
      case "Quilômetro":
        valorBase = 1000;
        conversorGenerico(flag);
      break;
      case "Milha":
        valorBase = 1609;
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
        valorBase = 3281;
        conversorGenerico(flag);
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

  else if(primeiroSelect == "Centímetro"){
    switch(segundoSelect){
      case "Quilômetro":
        valorBase = 100000;
        conversorGenerico(flag,valorBase);
      break;
      case "Milha":
        milhaECm(flag);
      break;
      case "Metro":        
        metroECm(flag);
      break;
      case "Pé":
        peECm(flag);
      break;
      case "Polegada":
        flag=true;
        cmEPolegada(flag);
      break;          
    }
  } 

  else if(primeiroSelect == "Polegada"){
    switch(segundoSelect){
      case "Quilômetro":
        QuilometroEPolegada(flag);
      break;
      case "Milha":
        milhaEPolegada(flag);
      break;
      case "Metro":        
        metroEPolegada(flag);
      break;
      case "Pé":
        peEPolegada(flag);
      break;
      case "Centímetro":        
        cmEPolegada(flag);
      break;          
    }
  } 
}

// funções relacionadas a unidades de comprimento
////funções relacionadas a conversão
function conversorGenerico(flag,valorBase){    
  if(flag){
    calculo = valorTela.value * valorBase;
    valorSaida.value = calculo; 
  }
  else{
    calculo = valorTela.value / valorBase;
    valorSaida.value = calculo;
  }
}