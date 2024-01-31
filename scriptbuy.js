function calcular1() {
  var valor = parseFloat(document.getElementById("valor").value)
  var limiteInferior = 137347.32
  var porcentagem1 = 0.015
  var porcentagem2 = 0.03

  var resultado
  var resultado2
  /* cálculo do ITBI*/
  if (valor <= limiteInferior) {
    resultado = valor * porcentagem1
  } else {
    var parte1 = limiteInferior * porcentagem1
    var parte2 = (valor - limiteInferior) * porcentagem2
    resultado = parte1 + parte2
  }
  /* Cálculo da Tabela de SC 2024*/
  if (valor >= 0 && valor <= 12581) {
    resultado2 = 199.29
  } else if (valor >= 12582 && valor <= 18872) {
    resultado2 = 229.81
  } else if (valor >= 18873 && valor <= 26421) {
    resultado2 = 326.24
  } else if (valor >= 26422 && valor <= 32712) {
    resultado2 = 425.87
  } else if (valor >= 32713 && valor <= 40261) {
    resultado2 = 531.93
  } else if (valor >= 40262 && valor <= 49068) {
    resultado2 = 641.22
  } else if (valor >= 49069 && valor <= 56617) {
    resultado2 = 755.32
  } else if (valor >= 56618 && valor <= 65424) {
    resultado2 = 872.62
  } else if (valor >= 65425 && valor <= 72973) {
    resultado2 = 994.76
  } else if (valor >= 72974 && valor <= 83039) {
    resultado2 = 1121.72
  } else if (valor >= 83040 && valor <= 91846) {
    resultado2 = 1255.13
  } else if (valor >= 91847 && valor <= 101911) {
    resultado2 = 1391.71
  } else if (valor >= 101912 && valor <= 111977) {
    resultado2 = 1534.71
  } else if (valor >= 11978 && valor <= 122042) {
    resultado2 = 1682.59
  } else if (valor >= 122043 && valor <= 133366) {
    resultado2 = 1835.27
  } else if (valor >= 133367 && valor <= 144689) {
    resultado2 = 1949.36
  } else if (valor >= 144690 && valor <= 156013) {
    resultado2 = 2063.47
  } else if (valor >= 156014 && valor <= 168594) {
    resultado2 = 2174.36
  } else if (valor >= 168595 && valor <= 181176) {
    resultado2 = 2283.64
  } else if (valor >= 181177 && valor <= 193758) {
    resultado2 = 2291.29
  } else if (valor >= 193759 && valor <= 206339) {
    resultado2 = 2497.36
  } else if (valor >= 206340) resultado2 = 2600.22

  // Verifica se a opção de dividir por 2 está selecionada
  var opcaoSelecionada = document.getElementById("opcaoDivisao").value
  if (opcaoSelecionada === "dividir") {
    resultado /= 2 // Divide por 2
  }

  // Resultado do ITBI
  document.getElementById("calculoResult").innerHTML =
    "R$" + resultado.toFixed(2)

  // Resultado da tabela de SC
  document.getElementById("calculoResult2").innerHTML =
    "R$" + resultado2.toFixed(2)

  // Resultado final
  document.getElementById("calculoResult3").innerHTML =
    "R$" + (resultado + resultado2).toFixed(2)
}
document.getElementById("valor").addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    calcular1()
  }
})
