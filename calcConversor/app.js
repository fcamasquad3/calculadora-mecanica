let valorTela = document.getElementById("telaEntrada");
let valorSaida = document.getElementById("telaSaida");
let calculo = 0;
let resultado;
let aux;

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
  'Dado': ['Byte', 'Megabyte', 'Gigabyte', 'Terabyte'],
  'Moeda': ['Dólar americano', 'Euro', 'Real', 'Iene', 'Libra esterlina']
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
  if (telaEntrada.value == null) {
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
  valorTela.value = null;
  valorSaida.value = null;
}

//// objeto que mantém os dados necessários para as funções de conversão
let unidadesDeMedida = {

    Comprimento : {
      "Quilômetro": [
        {"Medida": 'Milha', "primeiroInput":false, 'valorBase':1.609},
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
        {"Medida": 'Terabyte', "primeiroInput":false, "valorBase":12}],

      "Megabyte" :[
        {"Medida": 'Byte', "primeiroInput":true, "valorBase":6},
        {"Medida": 'Gigabyte', "primeiroInput":false, "valorBase":3},
        {"Medida": 'Terabyte', "primeiroInput":false, "valorBase":6}],
      "Gigabyte" : [
        {"Medida": 'Byte', "primeiroInput":true, "valorBase":9},
        {"Medida": 'Megabyte', "primeiroInput":true, "valorBase":3},
        {"Medida": 'Terabyte', "primeiroInput":false, "valorBase":3}],
      "Terabyte" : [
        {"Medida": 'Byte', "primeiroInput":true, "valorBase":12},
        {"Medida": 'Megabyte', "primeiroInput":true, "valorBase":6},
        {"Medida": 'Gigabyte', "primeiroInput":true, "valorBase":3}]
      },

      Moeda: {
        "Dólar americano":[
          {"Medida": 'Real', "valorBase":5.24},
          {"Medida": 'Euro', "valorBase":0.82},
          {"Medida": 'Iene', "valorBase":108.65},
          {"Medida": 'Libra esterlina', "valorBase":0.71}],
        "Real":[
          {"Medida": 'Dólar americano', "valorBase":0.19},
          {"Medida": 'Euro', "valorBase":0.16},
          {"Medida": 'Iene', "valorBase":20.77},
          {"Medida": 'Libra esterlina', "valorBase":0.14}],
        "Euro":[
          {"Medida": 'Real', "valorBase":6.37},
          {"Medida": 'Dólar americano', "valorBase":1.22},
          {"Medida": 'Iene', "valorBase":132.13},
          {"Medida": 'Libra esterlina', "valorBase":0.87}],
        "Iene":[
          {"Medida": 'Real', "valorBase":0.048},
          {"Medida": 'Dólar americano', "valorBase":0.0092},
          {"Medida": 'Euro', "valorBase":0.0076},
          {"Medida": 'Libra esterlina', "valorBase":0.0066}],
        "Libra esterlina":[ 
          {"Medida": 'Real', "valorBase":7.32},
          {"Medida": 'Dólar americano', "valorBase":1.40},
          {"Medida": 'Euro', "valorBase":1.15},
          {"Medida": 'Iene', "valorBase":152.04}]
      }
  }

// função que encaminha os parametros necessários para realizar cada calculo
function terminalDeFunction(){
    let primeiroSelect = document.getElementById("opTipo1").value;
    let segundoSelect = document.getElementById("opTipo2").value;

    let selectMedidas = document.getElementById("opConversores").value;

    if (primeiroSelect == segundoSelect)
    {
      valorSaida.value = valorTela.value;
    }
    else {
      unidadesDeMedida[selectMedidas][primeiroSelect].forEach(element => {
        console.log(unidadesDeMedida[selectMedidas]);
        if(element.Medida == segundoSelect && selectMedidas == "Comprimento"){
          conversorGenerico({primeiroInput:element.primeiroInput,valorBase:element.valorBase});
        }
        else if (element.Medida == segundoSelect && selectMedidas == "Dado"){
          conversorDadosGenerico({primeiroInput:element.primeiroInput, valorBase:element.valorBase});
        }
        else if (element.Medida == segundoSelect && selectMedidas == "Temperatura"){
          controleConversorTemperatura(primeiroSelect,segundoSelect)
        }
        else if (element.Medida == segundoSelect && selectMedidas == "Moeda"){
          conversorMoedasGenerico({valorBase:element.valorBase})
        }
      });
    }
  }

////função extra por conta da quantidade de funções para converter as temperaturas
function controleConversorTemperatura(primeiroSelect,segundoSelect){
  unidadesDeMedida.Temperatura[primeiroSelect].forEach(element => {
    if(element.Medida == segundoSelect && element.Medida == "Fahrenheit"){
      converteFahrenheit({primeiroInput:element.primeiroInput})
    }
    else if(element.Medida == segundoSelect && element.Medida == "Kelvin"){
      converteKelvin({primeiroInput:element.primeiroInput})
    }
    else if(element.Medida == segundoSelect && element.Medida == "Celsius"){
      converteCelsius({primeiroInput:element.primeiroInput})
    }});
  }

////função relacionada a conversão unidades de comprimento
function conversorGenerico({primeiroInput,valorBase}){
  if(primeiroInput){
    calculo = valorTela.value * valorBase;     
    resultado = calculo.toString();
    valorSaida.value = formataResultado(resultado);
  }
  else{
    calculo = valorTela.value / valorBase;
    resultado = calculo.toString();
    valorSaida.value = formataResultado(resultado);
  }
}

////funções relacionadas a conversão de temperatura
function converteFahrenheit({primeiroInput}){
  if(primeiroInput){
    calculo = (valorTela.value - 32) * 5/9 + 273.15
    resultado = calculo.toString();
    valorSaida.value = formataResultado(resultado);
  }else{
    calculo = (valorTela.value - 32) * 5/9;
    resultado = calculo.toString();
    valorSaida.value = formataResultado(resultado);
  }
}

function converteCelsius({primeiroInput}){
  if(primeiroInput){
    calculo = +valorTela.value + 273.15;
    resultado = calculo.toString();
    valorSaida.value = formataResultado(resultado);
  }else {
    calculo = (valorTela.value * 9/5) + 32;
    resultado = calculo.toString();
    valorSaida.value = formataResultado(resultado);
  }
}

function converteKelvin({primeiroInput}){
  if(primeiroInput) {
    calculo = +valorTela.value - 273.15;
    resultado = calculo.toString();
    valorSaida.value = formataResultado(resultado);
  }else{
    calculo = (valorTela.value - 273.15) * 9/5 + 32;
    resultado = calculo.toString();
    valorSaida.value = formataResultado(resultado);
  }
}

////função relacionada a conversão de dados
function conversorDadosGenerico ({primeiroInput,valorBase}){
  if(primeiroInput){
    calculo = valorTela.value * (1 * (Math.pow(10,valorBase)));
    resultado = calculo.toString();
    valorSaida.value = formataResultado(resultado);
  }
  else {
    calculo = valorTela.value / (1 * (Math.pow(10,valorBase)));
    resultado = calculo.toString();
    valorSaida.value = formataResultado(resultado);
  }
}

////função de conversão de moedas
function conversorMoedasGenerico({valorBase}){
  calculo = valorTela.value * valorBase;
  resultado = calculo.toLocaleString('pt-BR', { minimumFractionDigits: 2});	
  valorSaida.value = resultado;
}
 
////função para cortar 0 desnecessarios 
function formataResultado(resultado) {  
  if(resultado.includes('.'))
  {
    resultado = (parseFloat(resultado)).toFixed(6);
    resultado = resultado.replace(/(^0+(?=\d))|(,?0+$)/g, ''); 
  }
  
  return resultado;
}

// Carregamento da load-page
document.addEventListener("DOMContentLoaded", function(event) {
  var estilo = document.getElementsByClassName('load-page');
  estilo[0].style.visibility = "hidden";
});