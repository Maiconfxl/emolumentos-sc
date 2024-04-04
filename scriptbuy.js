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
    resultado2 = 2391.29
  } else if (valor >= 193759 && valor <= 206339) {
    resultado2 = 2497.36 // adição da nova tabela incluia pela lei complementar nº 846 de 20/12/2023
  } else if (valor >= 206340 && valor <= 256339) {
    resultado2 = 2561.23 // 2.005,19 + 455,78 + 100,26
  } else if (valor >= 256340 && valor <= 306339) {
    resultado2 = 2625.1 //2.055,19 + 467,14 + 102,76
  } else if (valor >= 306340 && valor <= 356339) {
    resultado2 = 2688.96 // 2105,19 + 478,51 + 105,26
  } else if (valor >= 356340 && valor <= 406339) {
    resultado2 = 2752.82 //2.155,19 + 489.87 + 107.76
  } else if (valor >= 406340 && valor <= 456339) {
    resultado2 = 2816.68 // 2.205,19 + 501,24 + 110,26
  } else if (valor >= 456340 && valor <= 506339) {
    resultado2 = 2880.55 // 2.255,19 + 512,60 + 112,76
  } else if (valor >= 506340 && valor <= 556339) {
    resultado2 = 2944.41 // 2.305,19 + 523,97 + 115,26
  } else if (valor >= 556340 && valor <= 606339) {
    resultado2 = 3008.28 // 2.355,19 + 535,33 + 117,76
  } else if (valor >= 606340 && valor <= 656339) {
    resultado2 = 3072.15 // 2.405,19 + 546,70 + 120,26
  } else if (valor >= 656340 && valor <= 706339) {
    resultado2 = 3136.01 // 2.455,19 + 558,06 + 122,76
  } else if (valor >= 706340 && valor <= 756339) {
    resultado2 = 3199.88 // 2.505,19 + 569,43 + 125,26
  } else if (valor >= 756340 && valor <= 806339) {
    resultado2 = 3263.14 //2.555,19 + 580,79 + 127,76
  } else if (valor >= 806340 && valor <= 856339) {
    resultado2 = 3327.61 //2.605,19 + 592,16 + 130,26
  } else if (valor >= 856340 && valor <= 906339) {
    resultado2 = 3391.47 // 2.655,19 + 603,52 + 132,76
  } else if (valor >= 906340 && valor <= 956339) {
    resultado2 = 3455.34 // 2705,19 + 614,89 + 135,26
  } else if (valor >= 956340 && valor <= 1006339) {
    resultado2 = 3519.2 // 2.755,19 + 626,25 + 137,76
  } else if (valor >= 1006340 && valor <= 1056339) {
    resultado2 = 3583.07 // 2.805,19 + 637,62 + 140,26
  } else if (valor >= 1056340 && valor <= 1106339) {
    resultado2 = 3646.93 // 2855,19 + 648,98 + 142,76
  } else if (valor >= 1106340 && valor <= 1156339) {
    resultado2 = 3710.8 // 2.905,19 + 660,35 + 145,26
  } else if (valor >= 1156340 && valor <= 1206339) {
    resultado2 = 3774.09 //2955,19 + 671,14 + 147,76
  } else if (valor >= 1206340 && valor <= 1256339) {
    resultado2 = 3808.53 // 3.005,19 + 683,08 + 150,26
  } else if (valor >= 1256340 && valor <= 1306339) {
    resultado2 = 3902.39 // 3.055,19 + 694,44 + 152,76
  } else if (valor >= 1306340 && valor <= 1356339) {
    resultado2 = 3966.26 // 3.105,19 + 705,81 + 155,26
  } else if (valor >= 1356340 && valor <= 1406339) {
    resultado2 = 4030.12 //3.155,19 + 717,17 + 157,76
  } else if (valor >= 1406340 && valor <= 1456339) {
    resultado2 = 4093.99 //3.205,19 + 728,54 + 160,26
  } else if (valor >= 1456340 && valor <= 1506339) {
    resultado2 = 4157.65 //3.255,19 + 739,70 + 162,76
  } else if (valor >= 1506340 && valor <= 1556339) {
    resultado2 = 4221.72 // 3.305,19 + 751,27 + 165,26
  } else if (valor >= 1556340 && valor <= 1606339) {
    resultado2 = 4285.58 // 3.355,19 + 762,63 + 167,76
  } else if (valor >= 1606340 && valor <= 1656339) {
    resultado2 = 4319.45 // 3.405,19 + 774,00 + 170,26
  } else if (valor >= 1656340 && valor <= 1706339) {
    resultado2 = 4413.31 // 3.455,19 + 785,36 + 172,76
  } else if (valor >= 1706340 && valor <= 1756339) {
    resultado2 = 4477.17 // 3.505,19 + 796,73 + 175,26
  } else if (valor >= 1756340 && valor <= 1806339) {
    resultado2 = 4541.04 //3.555,19 + 808,09 + 177,76
  } else if (valor >= 1806340 && valor <= 1856339) {
    resultado2 = 4604.91 // 3.605,19 + 819,46 + 180,26
  } else if (valor >= 1856340 && valor <= 1906339) {
    resultado2 = 4668.77 // 3.655,19 + 830,82 + 182,76
  } else if (valor >= 1906340 && valor <= 1956339) {
    resultado2 = 4732.64 // 3.705,19 + 842,19 + 185,26
  } else if (valor >= 1956340 && valor <= 2006339) {
    resultado2 = 4796.5 // 3.755,19 + 853,55 + 187,76
  } else if (valor >= 2006340 && valor <= 2056339) {
    resultado2 = 4860.37 // 3.805,19 + 864,92 + 190,26
  } else if (valor >= 2056340 && valor <= 2106339) {
    resultado2 = 4924.23 //3.855,19 + 876,28 + 192,76
  } else if (valor >= 2106340 && valor <= 2156339) {
    resultado2 = 4988.1 // 3.905,19 + 887,65 + 195,26
  } else if (valor >= 2156340 && valor <= 2206339) {
    resultado2 = 5051.96 // 3.955,19 + 899,01 + 197,76
  } else if (valor >= 2206340 && valor <= 2256399) {
    resultado2 = 5115.83 // 4.005,19 + 910,38 + 200,26
  } else if (valor >= 2256340 && valor <= 2306399) {
    resultado2 = 5179.69 // 4.055,19 + 921,74 + 202,76
  } else if (valor >= 2306340 && valor <= 2356399) {
    resultado2 = 5243.56 // 4.105,19 + 933,11 + 205,26
  } else if (valor >= 2356340 && valor <= 2406399) {
    resultado2 = 5307.42 // 4.155,19 + 944,47 + 207,76
  } else if (valor >= 2406340 && valor <= 2456399) {
    resultado2 = 5371.29 // 4.205,19 + 955,84 + 210,26
  } else if (valor >= 2456340 && valor <= 2506399) {
    resultado2 = 5439.15 // 4.255,19 + 967,20 + 212,76
  } else if (valor >= 2506340 && valor <= 2556399) {
    resultado2 = 5499.02 // 4.305,19 + 978,57 + 215,26
  } else if (valor >= 2556340 && valor <= 2606399) {
    resultado2 = 5562.88 // 4.355,19 + 989,93 + 217,76
  } else if (valor >= 2606340 && valor <= 2656399) {
    resultado2 = 5726.75 // 4.405,19 + 1.101,30 + 220,26
  } else if (valor >= 2656340 && valor <= 2706399) {
    resultado2 = 5690.61 // 4.455,19 + 1.012,66 + 222,76
  } else if (valor >= 2706340 && valor <= 2756399) {
    resultado2 = 3754.48 // 4.505,19 + 1.024,03 + 225,26
  } else if (valor >= 2756340 && valor <= 2806399) {
    resultado2 = 5818.34 // 4.555,19 + 1.035,39 + 227,76
  }

  // Verifica se a opção de dividir por 2 está selecionada
  var opcaoSelecionada = document.getElementById("opcaoDivisao").value
  if (opcaoSelecionada === "dividir") {
    resultado /= 2 // Divide por 2
  }

  // Resultado do ITBI
  document.getElementById("calculoResult").innerHTML =
    "R$" +
    resultado.toLocaleString("pt-BR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })

  // Resultado da tabela de SC
  document.getElementById("calculoResult2").innerHTML =
    "R$" +
    resultado2.toLocaleString("pt-BR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })

  // Resultado final
  document.getElementById("calculoResult3").innerHTML =
    "R$" +
    (resultado + resultado2).toLocaleString("pt-BR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })
}
document.getElementById("valor").addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    calcular1()
  }
})
