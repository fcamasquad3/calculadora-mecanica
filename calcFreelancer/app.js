var nomeJob = document.getElementById("nomeJob")
var result = document.querySelector('#result');
var selectTable = document.querySelector('#selectTable');
var table = document.querySelector('#table');

var valorMes = document.getElementById("valorMes")
var valorHorasDia = document.getElementById("valorHorasDia")
var valorSemana = document.getElementById("valorSemana")
var horasJob = document.getElementById("horasJob")              

var valorHoraTrabalho = document.getElementById("valorHoraTrabalho")
var valorJob = document.getElementById("ValorJob")

// Calcula valor das horas trabalhadas
function calcularValorHorasTrabalhadas(valorMes,valorHorasDia,valorSemana ){
  let valorHora = valorMes.value /  valorHorasDia.value / valorSemana.value
  return valorHora.toFixed(2)
}

// Calcula o valor do projeto input ValorJob
function calcularValorDoProjeto(valorHora, horasJob){
  calcularValorHorasTrabalhadas(valorMes,valorHorasDia,valorSemana)
  let resultado = valorHora    * horasJob.value
  return resultado.toFixed(2).replace(".", ",")
}

// Mostra resultado nos inputs valorHoraTrabalho e ValorJob ao 
// pressiona o botao CALCULAR 
function mostrarResultado() {
  if (valorMes.value == '' || valorHorasDia.value == '' || valorSemana.value == '' || horasJob.value == '') {
    swal("🤭OPS!", "Por favor, preencha todos os campos antes de clicar em CALCULAR.");
  } else {
    valorHoraTrabalho.value = calcularValorHorasTrabalhadas(valorMes,valorHorasDia,valorSemana).replace(".", ",")

    valorJob.value = calcularValorDoProjeto(
    calcularValorHorasTrabalhadas(valorMes,valorHorasDia,valorSemana),horasJob)
    result.innerText = `Valor do projeto ${nomeJob.value.toUpperCase()} é de:`;
    // Pergunta para adição de Freelance na tabela
    selectTable.innerHTML = `Deseja incluir ${nomeJob.value.toUpperCase()} na tabela?`
     + '<div><button><input type="button" id ="addDep" value="Add" onclick = "add()">Sim</button>' + ' ou ' + '<button onclick="window.location.reload()">Não</button></div>';
  }
}

function add() {
  
  table.innerHTML = `
    <tbody>  
      <tr>
        <td>4</td>
        <td>Calculadora Freelance</td>
        <td>R$3000</td>
        <td> <input type="button" id ="deleteDep" value=" " class="buttonExcluir" onclick = "deleteRow(this)"  </td>
      </tr>
    </tbody>
  `
}

  table.innerHTML = `
<table id = "dsTable" class="selectTable">
  <thead>
    <tr>
      <th class="idNumber">Id</th>
      <th>Freelance</th>
      <th>Valor</th>
      <th>Excluir</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Calculadora Freelance</td>
      <td>R$3000</td>
      <td> <input type="button" id ="deleteDep" value=" " class="buttonExcluir" onclick = "deleteRow(this)"  </td>
    </tr>
  <tr>
    <td>2</td>
    <td>daHora Bank</td>
    <td>R$8000</td>
    <td> <input type="button" id ="deleteDep" value=" " class="buttonExcluir" onclick = "deleteRow(this)"  </td>
  </tr>
  <tr>
    <td>3</td>
    <td>Super Trunfão</td>
    <td>R$2500</td>
    <td> <input type="button" id ="deleteDep" value=" " class="buttonExcluir" onclick = "deleteRow(this)"  </td>
  </tr>
  </tbody>
</table>`

function deleteRow(row){
  var d = row.parentNode.parentNode.rowIndex;
  document.getElementById("dsTable").deleteRow(d);
  }

// Funções do menu mobile

function abre() {
  document.getElementById("menu-mobile").style.right = `${'0'}`
}

function fechar() {
  document.getElementById("menu-mobile").style.right = `${'-100vw'}`
}

// Carregamento da load-page
document.addEventListener("DOMContentLoaded", function(event) { 
  var estilo = document.getElementsByClassName('load-page');
  estilo[0].style.visibility = "hidden";
});
