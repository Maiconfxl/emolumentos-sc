function calcular() {
  var valor = parseFloat(document.getElementById("valor").value)

  var limiteInferior = 131202.81
  var porcentagem1 = 0.015
  var porcentagem2 = 0.03

  var resultado

  if (valor <= limiteInferior) {
    resultado = valor * porcentagem1
  } else {
    var parte1 = limiteInferior * porcentagem1
    var parte2 = (valor - limiteInferior) * porcentagem2
    resultado = parte1 + parte2
  }

  document.getElementById("calculoResult").innerHTML =
    "R$" + resultado.toFixed(2)
}
