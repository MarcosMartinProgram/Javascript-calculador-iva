function calcularIVA() {
  const numero = document.getElementById("numero").value;

  const iva = numero * 0.21;
  
  const total = parseFloat(numero) + parseFloat(iva);

  
  const resultadoDiv = document.getElementById("resultado");
  const totalP = document.getElementById("total");
  const ivaP = document.getElementById("iva");

  totalP.textContent = `Total: $${total.toFixed(2)}`;
  ivaP.textContent = `IVA (21%): $${iva.toFixed(2)}`;

  resultadoDiv.style.display = "block";
}


