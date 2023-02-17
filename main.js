function calcularIMC() {
    var peso = document.getElementById("peso").value;
    var altura = document.getElementById("altura").value;
    var resultado = peso / (altura * altura);
    document.getElementById("resultado").value = resultado.toFixed(2);
  }
  