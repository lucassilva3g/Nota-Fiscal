function calcularImpostos(valor) {
  // Exemplo: 10% de imposto
  return valor * 0.10;
}

function gerarNotaFiscal() {
  const servico = document.getElementById('servico').value;
  const valor = parseFloat(document.getElementById('valor').value);
  const impostos = calcularImpostos(valor);
  const total = valor + impostos;

  const notaFiscalDiv = document.getElementById('notaFiscal');
  notaFiscalDiv.innerHTML = `
      <p><strong>Descrição do Serviço:</strong> ${servico}</p>
      <p><strong>Valor do Serviço:</strong> R$ ${valor.toFixed(2)}</p>
      <p><strong>Impostos:</strong> R$ ${impostos.toFixed(2)}</p>
      <p><strong>Valor Total:</strong> R$ ${total.toFixed(2)}</p>
  `;
}
