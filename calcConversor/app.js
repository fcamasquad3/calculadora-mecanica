let valorTela = document.getElementById("telaEntrada");
let valorSaida = document.getElementById("telaSaida");
let calculo = 0;

// Funções do menu mobile

function abreMenu() {
  document.getElementById("menu-mobile").style.right = `${'0'}`
}

function fecharMenu() {
  document.getElementById("menu-mobile").style.right = `${'-100vw'}`
}

// criação de arrays para function que popula o pacoteMedidas
let pacoteMedidas = {
  'Comprimento': ['Quilômetro','Milha','Metro','Pé','Centímetro','Polegada'],
  'Temperatura': ['Fahrenheit' , 'Celsius', 'Kelvin'],
  'Dado': ['Byte', 'Megabyte', 'Gigabyte', 'Terabyte']
}

//chamada da função e desenvolvimento da mesma, populando os selects op-tipo
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

// // inicio da refatoração da function converte()
let unidadesDeMedida = {
  
    Comprimento : {
      "Quilômetro": [
        {"Medida":'Milha', "primeiroInput":false, 'valorBase':1.609},
        {"Medida": 'Metro', "primeiroInput":true, "valorBase":1000},
        {"Medida": 'Pé', "primeiroInput":true, "valorBase":3281},
        {"Medida": 'Centímetro', "primeiroInput":true, "valorBase":100000},
        {"Medida": 'Polegada', "primeiroInput":true, "valorBase":39370}],

      "Milha" : [
        {"Medida": 'Quilômetro', "primeiroInput":true, "valorBase":1.609},
        {"Medida": 'Metro', "primeiroInput":true, "valorBase":1609},
        {"Medida": 'Pé', "primeiroInput":true, "valorBase":5280},
        {"Medida": 'Centímetro', "primeiroInput":true, "valorBase":160934},
        {"Medida": 'Polegada', "primeiroInput":true, "valorBase":63360}],

      "Centímetro": [
        {"Medida": 'Quilômetro', "primeiroInput":false, "valorBase":100000},
        {"Medida": 'Milha', "primeiroInput":false, "valorBase":160934},
        {"Medida": 'Metro', "primeiroInput":false, "valorBase":100},
        {"Medida": 'Pé', "primeiroInput":false, "valorBase":30.48},
        {"Medida": 'Polegada', "primeiroInput":false, "valorBase":2.54}],  
        
       "Polegada" : [
        {"Medida": 'Quilômetro', "primeiroInput":false, "valorBase":39370},
        {"Medida": 'Milha', "primeiroInput":false, "valorBase":63360},
        {"Medida": 'Metro', "primeiroInput":false, "valorBase":39.37},
        {"Medida": 'Pé', "primeiroInput":false, "valorBase":12},
        {"Medida": 'Centímetro', "primeiroInput":true, "valorBase":2.54}],
      
      "Metro": [
        {"Medida": 'Quilômetro', "primeiroInput":false, "valorBase":1000},
        {"Medida": 'Milha', "primeiroInput":false, "valorBase":1609},
        {"Medida": 'Pé', "primeiroInput":true, "valorBase":3.281},
        {"Medida": 'Polegada', "primeiroInput":true, "valorBase":39.37},
        {"Medida": 'Centímetro', "primeiroInput":true, "valorBase":100}],
      "Pé" : [
        {"Medida": 'Quilômetro', "primeiroInput":false, "valorBase":3281},
        {"Medida": 'Milha', "primeiroInput":false, "valorBase":5280},
        {"Medida": 'Metro', "primeiroInput":false, "valorBase":3.281},
        {"Medida": 'Centímetro', "primeiroInput":true, "valorBase":30.48},
        {"Medida": 'Metro', "primeiroInput":true, "valorBase":12}]  
        },  
       
    Temperatura: {
      "Fahrenheit" : [
        {"Medida": 'Celsius', "primeiroInput": false},
        {"Medida": 'Kelvin', "primeiroInput": true}],
      "Kelvin" : [
        {"Medida": 'Celsius',"primeiroInput": true},
        {"Medida": 'Fahrenheit', "primeiroInput": false}],  
      "Celsius" : [
        {"Medida": 'Fahrenheit', "primeiroInput": false},
        {"Medida": 'Kelvin', "primeiroInput": true}]     
      },
      
    Dado: {
      "Byte" : [
        {"Medida": 'Megabyte', "primeiroInput":false, "valorBase":6},
        {"Medida": 'Gigabyte', "primeiroInput":false, "valorBase":9},
        {"Medida": 'Terabyte', "primeiroInput":false, "valorBase":12},],

      "Megabyte" :[
        {"Medida": 'Byte', "primeiroInput":true, "valorBase":6},
        {"Medida": 'Gigabyte', "primeiroInput":false, "valorBase":3},
        {"Medida": 'Terabyte', "primeiroInput":false, "valorBase":6},],
      "Gigabyte" : [ 
        {"Medida": 'Byte', "primeiroInput":true, "valorBase":9},
        {"Medida": 'Megabyte', "primeiroInput":true, "valorBase":3},
        {"Medida": 'Terabyte', "primeiroInput":false, "valorBase":3},],
      "Terabyte" : [          
        {"Medida": 'Byte', "primeiroInput":true, "valorBase":12},
        {"Medida": 'Megabyte', "primeiroInput":true, "valorBase":6},
        {"Medida": 'Gigabyte', "primeiroInput":true, "valorBase":3},]  
      } 
  }

  
  function terminalDeFunction()
  {
    let primeiroSelect = document.getElementById("opTipo1").value;
    let segundoSelect = document.getElementById("opTipo2").value;   

    let x = document.getElementById("opConversores").value;    
     
    if (primeiroSelect == segundoSelect)
    {
      valorSaida.value = valorTela.value;
    }      
    else {
      unidadesDeMedida[x][primeiroSelect].forEach(element => {
        console.log(unidadesDeMedida[x]);
        if(element.Medida == segundoSelect && x == "Comprimento"){    
                 
          conversorGenerico({primeiroInput:element.primeiroInput,valorBase:element.valorBase}); 
        }
        else if (element.Medida == segundoSelect && x == "Dado"){
          conversorDadosGenerico({primeiroInput:element.primeiroInput,valorBase:element.valorBase});
        }
        else {
          controleConversorTemperatura()
        }
      });   
    }
  }

function controleConversorTemperatura(){
  unidadesDeMedida.Temperatura[primeiroSelect].forEach(element => {
    if(element.Medida == segundoSelect && element.Medida == "Fahrenheit"){

    }
    
  });

    } 

// funcoes que recebe o objeto balor valor 
function converte() {
  let primeiroSelect = document.getElementById("opTipo1").value;
  let segundoSelect = document.getElementById("opTipo2").value;   

    if (primeiroSelect == segundoSelect)
  {
     valorSaida.value = valorTela.value;
  }  

  
  // else if(primeiroSelect == "Quilômetro"){
  //   switch(segundoSelect){
  //     case "Milha":
  //       conversorGenerico({primeiroInput:false,valorBase:1.609});
  //     break;
  //     case "Metro":           
  //       conversorGenerico({primeiroInput:true,valorBase:1000});
  //     break;
  //     case "Pé":        
  //       conversorGenerico({primeiroInput:true,valorBase:3281});
  //     break;
  //     case "Centímetro":           
  //       conversorGenerico({primeiroInput:true,valorBase:100000});
  //     break;
  //     case "Polegada":        
  //       conversorGenerico({primeiroInput:true,valorBase:39370});
  //     break;          
  //   }
  // } 
  // else if(primeiroSelect == "Milha"){
  //   switch(segundoSelect){
  //     case "Quilômetro":       
  //       conversorGenerico({primeiroInput:true,valorBase: 1.609});
  //     break;
  //     case "Metro":      
  //       conversorGenerico({primeiroInput:true,valorBase: 1609});
  //     break;
  //     case "Pé":      
  //       conversorGenerico({primeiroInput:true,valorBase: 5280});
  //     break;
  //     case "Centímetro":        
  //       conversorGenerico({primeiroInput:true,valorBase: 160934});
  //     break;
  //     case "Polegada":       
  //       conversorGenerico({primeiroInput:true,valorBase: 63360});
  //     break;          
  //   }
  // }  
  // else if(primeiroSelect == "Metro"){
  //   switch(segundoSelect){
  //     case "Quilômetro":        
  //       conversorGenerico({primeiroInput:false,valorBase: 1000});
  //     break;
  //     case "Milha":
  //       conversorGenerico({primeiroInput:false,valorBase: 1609});
  //     break;
  //     case "Pé":       
  //       conversorGenerico({primeiroInput:true,valorBase:3.281});
  //     break;
  //     case "Centímetro":
  //       conversorGenerico({primeiroInput:true,valorBase:100});
  //     break;
  //     case "Polegada":       
  //       conversorGenerico({primeiroInput:true,valorBase:39.37});
  //     break;          
  //   }
  // } 
  // else if(primeiroSelect == "Pé"){
  //   switch(segundoSelect){
  //     case "Quilômetro":
  //       conversorGenerico({primeiroInput:false,valorBase: 3281});
  //     break;
  //     case "Milha":
  //       conversorGenerico({primeiroInput:false,valorBase: 5280});
  //     break;
  //     case "Metro":        
  //       conversorGenerico({primeiroInput:false,valorBase: 3.281});
  //     break;
  //     case "Centímetro":      
  //       conversorGenerico({primeiroInput:true,valorBase: 30.48});
  //     break;
  //     case "Polegada":      
  //       conversorGenerico({primeiroInput:true,valorBase: 12});
  //     break;          
  //   }
  // } 
  // else if(primeiroSelect == "Centímetro"){
  //   switch(segundoSelect){
  //     case "Quilômetro":
  //       conversorGenerico({primeiroInput:false,valorBase: 100000});
  //     break;
  //     case "Milha":
  //       conversorGenerico({primeiroInput:false,valorBase: 160934});
  //     break;
  //     case "Metro":        
  //       conversorGenerico({primeiroInput:false,valorBase: 100});
  //     break;
  //     case "Pé":
  //       conversorGenerico({primeiroInput:false,valorBase: 30.48});
  //     break;
  //     case "Polegada":
  //       conversorGenerico({primeiroInput:false,valorBase: 2.54});
  //     break;          
  //   }
  // } 
  // else if(primeiroSelect == "Polegada"){
  //   switch(segundoSelect){
  //     case "Quilômetro":
  //       conversorGenerico({primeiroInput:false,valorBase: 39370});
  //     break;
  //     case "Milha":
  //       conversorGenerico({primeiroInput:false,valorBase: 63360});
  //     break;
  //     case "Metro":        
  //       conversorGenerico({primeiroInput:false,valorBase:39.37});
  //     break;
  //     case "Pé":
  //       conversorGenerico({primeiroInput:false,valorBase: 12});
  //     break;
  //     case "Centímetro":        
  //       conversorGenerico({primeiroInput:true,valorBase: 2.54});
  //     break;          
  //   }
  // } 
  // else if(primeiroSelect == "Fahrenheit"){
  //   switch(segundoSelect){
  //     case "Kelvin":
  //       fahrenheitParaKelvin();
  //       break;
  //     case "Celsius":
  //       fahrenheitParaCelsius();
  //       break;
  //   }
  // }
  // else if(primeiroSelect == "Celsius"){
  //   switch(segundoSelect){
  //     case "Kelvin":
  //       celsiusParaKelvin();
  //       break;
  //     case "Fahrenheit":
  //       celsiusParaFahrenheit();
  //       break;
  //   }
  // }
  // // else if(primeiroSelect == "Kelvin"){
  //   switch(segundoSelect){
  //     case "Celsius":
  //       kelvinParaCelsius();
  //       break;
  //     case "Fahrenheit":
  //       kelvinParaFahrenheit();
  //       break;
  //   }
  // }
  // else if(primeiroSelect == "Byte"){
  //   switch(segundoSelect){
  //     case "Megabyte":
  //       conversorDadosGenerico({primeiroInput:false,valorBase:6});
  //       break;
  //     case "Gigabyte":
  //       conversorDadosGenerico({primeiroInput:false,valorBase:9});
  //       break;
  //     case "Terabyte":
  //       conversorDadosGenerico({primeiroInput:false,valorBase:12});
  //       break;        
  //   }
  // }
  // else if(primeiroSelect == "Megabyte"){
  //   switch(segundoSelect){
  //     case "Byte":
  //       conversorDadosGenerico({primeiroInput:true,valorBase:6});
  //       break;
  //     case "Gigabyte":
  //       conversorDadosGenerico({primeiroInput:false,valorBase:3});
  //       break;
  //     case "Terabyte":
  //       conversorDadosGenerico({primeiroInput:false,valorBase:6});
  //       break;        
  //   }
  // }
  // else if(primeiroSelect == "Gigabyte"){
  //   switch(segundoSelect){
  //     case "Byte":
  //       conversorDadosGenerico({primeiroInput:true,valorBase:9});
  //       break;
  //     case "Megabyte":
  //       conversorDadosGenerico({primeiroInput:true,valorBase:3});
  //       break;
  //     case "Terabyte":
  //       conversorDadosGenerico({primeiroInput:false,valorBase:3});
  //       break;        
  //   }
  // }
  // else if(primeiroSelect == "Terabyte"){
  //   switch(segundoSelect){
  //     case "Byte":
  //       conversorDadosGenerico({primeiroInput:true,valorBase:12});
  //       break;
  //     case "Megabyte":
  //       conversorDadosGenerico({primeiroInput:true,valorBase:6});
  //       break;
  //     case "Gigabyte":
  //       conversorDadosGenerico({primeiroInput:true,valorBase:3});
  //       break;        
  //   }
  // }
}

////função relacionada a conversão unidades de comprimento
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
function converteFahrenheit(){  
  if(primeiroInput){
    calculo = (valorTela.value - 32) * 5/9 + 273.15
    valorSaida.value = calculo;
  }else{
    calculo = (valorTela.value - 32) * 5/9;
    valorSaida.value = calculo;
  }
}

function converteCelsius(){    
  if(primeiroInput){
  calculo = +valorTela.value + 273.15; 
  valorSaida.value = calculo;
  }else {
    calculo = (valorTela.value * 9/5) + 32;
    valorSaida.value = calculo;
  }
}

function converteKelvin(){ 
  if(primeiroInput) {  
  calculo = +valorTela.value - 273.15;
  valorSaida.value = calculo;
  }else{
    calculo = (valorTela.value - 273.15) * 9/5 + 32;
    valorSaida.value = calculo;
  }
}


////função relacionada a conversão de dados
function conversorDadosGenerico ({primeiroInput,valorBase}){
  if(primeiroInput){
    calculo = valorTela.value * (1 * (Math.pow(10,valorBase)));
    valorSaida.value = calculo;    
  }
  else {    
    calculo = valorTela.value / (1 * (Math.pow(10,valorBase)));
    valorSaida.value = calculo;
  }  
}

// Carregamento da load-page
document.addEventListener("DOMContentLoaded", function(event) { 
  var estilo = document.getElementsByClassName('load-page');
  estilo[0].style.visibility = "hidden";
});