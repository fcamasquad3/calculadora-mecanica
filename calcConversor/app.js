let valorTela = document.getElementById("telaEntrada");
let valorSaida = document.getElementById("telaSaida");
let calculo = 0;

// criação de arrays para function PopulacbMedidas()
let pacoteMedidas = {
  'Comprimento': ['Quilômetro','Milha','Metro','Pé','Centímetro','Polegada'],
  'Temperaturas': ['Fahrenheit' , 'Celsius', 'Kelvin'],
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
      case "Milha":
        conversorGenerico({primeiroInput:false,valorBase:1.609});
      break;
      case "Metro":           
        conversorGenerico({primeiroInput:true,valorBase:1000});
      break;
      case "Pé":        
        conversorGenerico({primeiroInput:true,valorBase:3281});
      break;
      case "Centímetro":           
        conversorGenerico({primeiroInput:true,valorBase:100000});
      break;
      case "Polegada":        
        conversorGenerico({primeiroInput:true,valorBase:39370});
      break;          
    }
  } 
  else if(primeiroSelect == "Milha"){
    switch(segundoSelect){
      case "Quilômetro":       
        conversorGenerico({primeiroInput:true,valorBase: 1.609});
      break;
      case "Metro":      
        conversorGenerico({primeiroInput:true,valorBase: 1609});
      break;
      case "Pé":      
        conversorGenerico({primeiroInput:true,valorBase: 5280});
      break;
      case "Centímetro":        
        conversorGenerico({primeiroInput:true,valorBase: 160934});
      break;
      case "Polegada":       
        conversorGenerico({primeiroInput:true,valorBase: 63360});
      break;          
    }
  }  
  else if(primeiroSelect == "Metro"){
    switch(segundoSelect){
      case "Quilômetro":        
        conversorGenerico({primeiroInput:false,valorBase: 1000});
      break;
      case "Milha":
        conversorGenerico({primeiroInput:false,valorBase: 1609});
      break;
      case "Pé":       
        conversorGenerico({primeiroInput:true,valorBase:3.281});
      break;
      case "Centímetro":
        conversorGenerico({primeiroInput:true,valorBase:100});
      break;
      case "Polegada":       
        conversorGenerico({primeiroInput:true,valorBase:39.37});
      break;          
    }
  } 

  else if(primeiroSelect == "Pé"){
    switch(segundoSelect){
      case "Quilômetro":
        conversorGenerico({primeiroInput:false,valorBase: 3281});
      break;
      case "Milha":
        conversorGenerico({primeiroInput:false,valorBase: 5280});
      break;
      case "Metro":        
        conversorGenerico({primeiroInput:false,valorBase: 3.281});
      break;
      case "Centímetro":      
        conversorGenerico({primeiroInput:true,valorBase: 30.48});
      break;
      case "Polegada":      
        conversorGenerico({primeiroInput:true,valorBase: 12});
      break;          
    }
  } 

  else if(primeiroSelect == "Centímetro"){
    switch(segundoSelect){
      case "Quilômetro":
        conversorGenerico({primeiroInput:false,valorBase: 100000});
      break;
      case "Milha":
        conversorGenerico({primeiroInput:false,valorBase: 160934});
      break;
      case "Metro":        
        conversorGenerico({primeiroInput:false,valorBase: 100});
      break;
      case "Pé":
        conversorGenerico({primeiroInput:false,valorBase: 30.48});
      break;
      case "Polegada":
        conversorGenerico({primeiroInput:false,valorBase: 2.54});
      break;          
    }
  } 

  else if(primeiroSelect == "Polegada"){
    switch(segundoSelect){
      case "Quilômetro":
        conversorGenerico({primeiroInput:false,valorBase: 39370});
      break;
      case "Milha":
        conversorGenerico({primeiroInput:false,valorBase: 63360});
      break;
      case "Metro":        
        conversorGenerico({primeiroInput:false,valorBase:39.37});
      break;
      case "Pé":
        conversorGenerico({primeiroInput:false,valorBase: 12});
      break;
      case "Centímetro":        
        conversorGenerico({primeiroInput:true,valorBase: 2.54});
      break;          
    }
  } 
  else if(primeiroSelect == "Fahrenheit"){
    switch(segundoSelect){
      case "Kelvin":
        fahrenheitParaKelvin();
        break;
      case "Celsius":
        fahrenheitParaCelsius();
        break;
    }
  }
  else if(primeiroSelect == "Celsius"){
    switch(segundoSelect){
      case "Kelvin":
        celsiusParaKelvin();
        break;
      case "Fahrenheit":
        celsiusParaFahrenheit();
        break;
    }
  }
  else if(primeiroSelect == "Kelvin"){
    switch(segundoSelect){
      case "Celsius":
        kelvinParaCelsius();
        break;
      case "Fahrenheit":
        kelvinParaFahrenheit();
        break;
    }
  }
  else if(primeiroSelect == "Byte"){
    switch(segundoSelect){
      case "Megabyte":
        byteParaMegabyte();
        break;
      case "Gigabyte":
        byteParaGigabyte();
        break;
      case "Terabyte":
        byteParaTerabyte();
        break;        
    }
  }
}

////funções relacionadas a conversão unidades de comprimento
function conversorGenerico({primeiroInput,valorBase}){    
  if(primeiroInput){
    calculo = valorTela.value * valorBase;
    valorSaida.value = calculo; 
  }
  else{
    calculo = valorTela.value / valorBase;
    valorSaida.value = calculo;
  }
}

////funções relacionadas a conversão de temperatura
function fahrenheitParaKelvin(){    
  calculo = (valorTela.value - 32) * 5/9 + 273.15
  valorSaida.value = calculo;
}

function fahrenheitParaCelsius(){    
  calculo = (valorTela.value - 32) * 5/9;
  valorSaida.value = calculo;
}

function celsiusParaKelvin(){    
  calculo = +valorTela.value + 273.15; 
  valorSaida.value = calculo;
}

function celsiusParaFahrenheit(){    
  calculo = (valorTela.value * 9/5) + 32;
  valorSaida.value = calculo;
}

function kelvinParaCelsius(){    
  calculo = +valorTela.value - 273.15;
  valorSaida.value = calculo;
}

function kelvinParaFahrenheit(){    
  calculo = (valorTela.value - 273.15) * 9/5 + 32;
  valorSaida.value = calculo;
}

////funções relacionadas a conversão de dados
function byteParaMegabyte(){
  calculo = valorTela.value / (1 * (Math.pow(10,6)));
  valorSaida.value = calculo;
}
function byteParaGigabyte(){
  calculo = valorTela.value / (1 * (Math.pow(10,9)));
  valorSaida.value = calculo;
}
function byteParaTerabyte(){
  calculo = valorTela.value / (1 * (Math.pow(10,12)));
  valorSaida.value = calculo;
}