var primeiroValor = parseInt(prompt("Digite o Primeiro Valor: "))
var segundoValor = parseInt(prompt("Digite o Segundo Valor: "))



var operacao = prompt("Digite 1 para fazer uma Divisão, 2 para Multiplicação, 3 para Soma e 4 para Subtração: ")

if (operacao == 1)  {
  var resultado = primeiroValor / segundoValor;
  document.write ("<h2>" + primeiroValor+ " / " + segundoValor + " = " + resultado + "</h2>")
}
  else if (operacao == 2) {
    var resultado = primeiroValor * segundoValor;
    document.write ("<h2>" + primeiroValor+ " x " + segundoValor + " = " + resultado + "</h2>")
  }
  else if (operacao == 3) {
    var resultado = primeiroValor + segundoValor;
    document.write ("<h2>" + primeiroValor+ " + " + segundoValor + " = " + resultado + "</h2>")
  }
else if (operacao == 4){
  var resultado = primeiroValor - segundoValor;
  document.write ("<h2>" + primeiroValor+ " - " + segundoValor + " = " + resultado + "</h2>")
} 
else {
  document.write("<h2> Opção Inválida</h2>")
}
