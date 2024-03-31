function calcularITCMD() {
  var valor = parseFloat(document.getElementById("valor").value)
  var resultado

  var opcaoSelecionada = document.getElementById("opcaoDivisao").value
  if (opcaoSelecionada === "dividir") {
    valor /= 2 // Divide por 2
  }

  //cálculo do ITCMD

  if (valor >= 0 && valor <= 20000.0) {
    resultado = valor * 0.01
  } else if (valor >= 20000.01 && valor <= 50000.0) {
    resultado = (valor - 20000.0) * 0.03 + 200
  } else if (valor >= 50000.01 && valor <= 150000.0) {
    resultado = (valor - 50000.0) * 0.05 + 900 + 200
  } else if (valor >= 150000.01)
    resultado = (valor - 150000.0) * 0.07 + 200 + 900 + 5000

  document.getElementById("calcdonation").innerHTML =
    "R$ " +
    resultado.toFixed(2)
}

function calcularEmolumentos() {
  var valor = parseFloat(document.getElementById("valor").value)
  var resultado2

  //Cálculo da Tabela de SC 2024
  if (valor >= 0 && valor <= 88700.99) {
    resultado2 = 701.48
  } else if (valor >= 88701.00 && valor <= 188725.50) {
    resultado2 = 1423.55
  } else if (valor >= 188725.51 && valor <= 503267.98) {
    resultado2 = 2805.92    
  } 

  document.getElementById("calcdonation2").innerHTML =
    "R$" +
    resultado2.toFixed(2)
}

function calcularTudo() {
  // Chama as duas funções para calcular ITCMD e Emolumentos
  calcularITCMD()
  calcularEmolumentos()

  // Obtém os resultados das duas funções
  var resultadoITCMD = parseFloat(
    document.getElementById("calcdonation").innerText.replace("R$", "")
  )
  var resultadoEmolumentos = parseFloat(
    document.getElementById("calcdonation2").innerText.replace("R$", "")
  )

  // Soma os resultados
  var resultadoTotal = resultadoITCMD + resultadoEmolumentos

  // Exibe o resultado total na página
  document.getElementById("calcdonation3").innerHTML =
    "R$" +
    resultadoTotal.toFixed(2)
}
document.getElementById("valor").addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    calcularTudo()
  }
})
