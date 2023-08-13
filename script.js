const html = document.querySelector("html");

const btn = document.getElementById("btn");

btn.addEventListener("change", function () {
  html.classList.toggle("dark-mode");
});

function insert(num) {
  const numero = document.getElementById("resultado").innerHTML;
  document.getElementById("resultado").innerHTML = numero + num;
}

function resetar() {
  document.getElementById("resultado").innerHTML = "";
}

function back() {
  const resultado = document.getElementById("resultado").innerHTML;
  document.getElementById("resultado").innerHTML = resultado.substring(
    0,
    resultado.length - 1
  );
}

function calcular() {
  const calculo = document.getElementById("resultado").innerHTML;

  if (calculo) {
    document.getElementById("resultado").innerHTML = eval(calculo);
  } else {
    document.getElementById("resultado").innerHTML = "";
  }
}
