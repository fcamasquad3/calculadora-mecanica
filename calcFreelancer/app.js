const nomeJob = document.getElementById("nomeJob");
const result = document.querySelector("#result");
const selectTable = document.querySelector("#selectTable");
const table = document.querySelector("#table");

const valorMes = document.getElementById("valorMes");
const valorHorasDia = document.getElementById("valorHorasDia");
const valorSemana = document.getElementById("valorSemana");
const horasJob = document.getElementById("horasJob");

const valorHoraTrabalho = document.getElementById("valorHoraTrabalho");
const valorJob = document.getElementById("ValorJob");

// Calcula valor das horas trabalhadas
function calcularValorHorasTrabalhadas(valorMes, valorHorasDia, valorSemana) {
  const valorHora = valorMes.value / valorHorasDia.value / valorSemana.value;
  return valorHora.toFixed(2);
}

// Calcula o valor do projeto input ValorJob
function calcularValorDoProjeto(valorHora, horasJob) {
  calcularValorHorasTrabalhadas(valorMes, valorHorasDia, valorSemana);
  const resultado = valorHora * horasJob.value;
  return resultado.toFixed(2).replace(".", ",");
}

// Mostra resultado nos inputs valorHoraTrabalho e ValorJob ao
// pressiona o botao CALCULAR
function mostrarResultado() {
  if (
    valorMes.value == "" ||
    valorHorasDia.value == "" ||
    valorSemana.value == "" ||
    horasJob.value == ""
  ) {
    swal(
      "🤭OPS!",
      "Por favor, preencha todos os campos antes de clicar em CALCULAR.",
    );
  } else {
    valorHoraTrabalho.value = calcularValorHorasTrabalhadas(
      valorMes,
      valorHorasDia,
      valorSemana,
    ).replace(".", ",");

    valorJob.value = calcularValorDoProjeto(
      calcularValorHorasTrabalhadas(valorMes, valorHorasDia, valorSemana),
      horasJob,
    );
    result.innerText = `Valor do projeto ${nomeJob.value.toUpperCase()} é de:`;
    // Pergunta para adição de Freelance na tabela
    selectTable.innerHTML =
      `Deseja incluir ${nomeJob.value.toUpperCase()} na tabela?` +
      '<div><button id ="addDep" value=" " onclick = "add()" >Sim</button>' +
      " ou " +
      '<button onclick="window.location.reload()">Não</button></div>';
  }
}

const tabela = (function () {
  const tab = localStorage.getItem("table");
  if (tab) {
    return (table.innerHTML = JSON.parse(tab));
  }

  return (table.innerHTML = `
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
      <td>R$ 3000</td>
      <td> <input type="button" id ="deleteDep" value=" " class="buttonExcluir" onclick = "deleteRow(this)"  </td>
    </tr>
 `);
})();

function add() {
  const linha = (table.innerHTML = `
      <tr>
        <td>4</td>
        <td>${nomeJob.value}</td>
        <td>R$ ${valorJob.value}</td>
        <td> <input type="button" id ="deleteDep" value=" " class="buttonExcluir" onclick = "deleteRow(this)"  </td>
      </tr>
  `);
  const newTable = tabela + linha;
  document.getElementById("table").innerHTML = newTable;
  localStorage.setItem("table", JSON.stringify(newTable));
}

function deleteRow(row) {
  const d = row.parentNode.parentNode.rowIndex;
  const tab = document.getElementById("dsTable");
  tab.deleteRow(d);
  localStorage.setItem("table", JSON.stringify(table.innerHTML));
}

// Funções do menu mobile

function abre() {
  document.getElementById("menu-mobile").style.right = `${"0"}`;
}

function fechar() {
  document.getElementById("menu-mobile").style.right = `${"-100vw"}`;
}

// Carregamento da load-page
document.addEventListener("DOMContentLoaded", function (event) {
  const estilo = document.getElementsByClassName("load-page");
  estilo[0].style.visibility = "hidden";
});
