function convertir() {
  const celsius = parseFloat(document.getElementById("celsius").value);
  if (isNaN(celsius)) {
    alert("Por favor, ingresa un valor válido.");
    return;
  }

  const marin = ((100 / 37) * (celsius + 2)).toFixed(2);
  document.getElementById("resultado").innerText = `${celsius} °C = ${marin} °Mn`;
}