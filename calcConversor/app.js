const valorTela = document.getElementById("tela");
// const cbMedidas = document.getElementById("op-conversores")

// criação de arrays para function PopulacbMedidas()
let pacoteMedidas = {
  'Medidas': ['Quilômetro','Milhas','Metro','Pés','Centímetros','Polegadas'],
  'Temperaturas': ['Fahrenheit' , 'Celsius'],
  'Dados': ['Byte', 'Megabyte', 'Gigabyte', 'Gigabyte']
}

$('#op-conversores').on('change', function() {

  let selectValue = $(this).val();

  $('#op-tipo1').empty();
  
  for (i = 0; i < pacoteMedidas[selectValue].length; i++) {
    $('#op-tipo1').append("<option value='" + pacoteMedidas[selectValue][i] + "'>" + pacoteMedidas[selectValue][i] + "</option>");
  }
});




// function Teste(){
//   // let option = cbMedidas.value.options[cbMedidas.selectedIndex];
//   const tipoMedidas = document.getElementById("op-tipo1");
//   let option = tipoMedidas.options[0];

//   // const tipoMedidas2 = document.getElementById("op-tipo2");
//   // let option = tipoMedidas2.options[0];
  
//   if (cbMedidas.value=="Medidas") {   

//     option.innerText = "Quilômetro"
//     let option2 = option.nextElementSibling
//     option2.innerText = "Milhas"
//     let option3 = option2.nextElementSibling
//     option3.innerText = "Metro"
//     let option4 = option3.nextElementSibling
//     option4.innerText = "Centímetros"
//     let option5 = option4.nextElementSibling
//     option5.innerText = "Pés"
//     let option6 = option5.nextElementSibling
//     option6.innerText = "Polegadas"   
//   }
  
//   else if (cbMedidas.value=="Temperatura"){   

//     option.innerText = "Celsius"
//     let option2 = option.nextElementSibling
//     option2.innerText = "Fahrenheit"
//     let option3 = option2.nextElementSibling
//     option3.innerText = ""
//     let option4 = option3.nextElementSibling
//     option4.innerText = ""
//     let option5 = option4.nextElementSibling
//     option5.innerText = ""
//     let option6 = option5.nextElementSibling
//     option6.innerText = "" 
   
//   }
//   else {  
//     option.innerText = "Byte"
//     let option2 = option.nextElementSibling
//     option2.innerText = "Megabyte"
//     let option3 = option2.nextElementSibling
//     option3.innerText = "Gigabyte"
//     let option4 = option3.nextElementSibling
//     option4.innerText = "Terabyte"
//   }

  
// }



//adiciona na tela da calculadora o caractere (número/operação) selecionado
function adicionarNaTela (tela,caractere) {
  if (tela.value == null || tela.value == 0) {
    tela.value = caractere
  } else {
    tela.value += caractere
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


