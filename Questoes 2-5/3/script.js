const fs = require('fs');

// Lê o arquivo JSON
fs.readFile('./3/dados.json', 'utf8', (err, data) => {
  if (err) throw err;

  // Parsing do JSON para um objeto
  const faturamentoMensal = JSON.parse(data);

  // Cálculo do menor valor de faturamento
  let menorFaturamento = faturamentoMensal[0].valor;
  for (let i = 1; i < faturamentoMensal.length; i++) {
    if (faturamentoMensal[i].valor < menorFaturamento) {
      menorFaturamento = faturamentoMensal[i].valor;
    }
  }

  // Cálculo do maior valor de faturamento
  let maiorFaturamento = faturamentoMensal[0].valor;
  for (let i = 1; i < faturamentoMensal.length; i++) {
    if (faturamentoMensal[i].valor > maiorFaturamento) {
      maiorFaturamento = faturamentoMensal[i].valor;
    }
  }

  // Cálculo da média mensal de faturamento (ignorando os dias sem faturamento)
  let somaFaturamento = 0;
  let diasComFaturamento = 0;
  for (let i = 0; i < faturamentoMensal.length; i++) {
    if (faturamentoMensal[i].valor > 0) {
      somaFaturamento += faturamentoMensal[i].valor;
      diasComFaturamento++;
    }
  }
  const mediaMensal = somaFaturamento / diasComFaturamento;

  // Número de dias com faturamento superior à média mensal
  let diasAcimaDaMedia = 0;
  for (let i = 0; i < faturamentoMensal.length; i++) {
    if (faturamentoMensal[i].valor > mediaMensal) {
      diasAcimaDaMedia++;
    }
  }

  // Resultados
  console.log(`Menor faturamento: R$ ${menorFaturamento.toFixed(2)}`);
  console.log(`Maior faturamento: R$ ${maiorFaturamento.toFixed(2)}`);
  console.log(`Média mensal: R$ ${mediaMensal.toFixed(2)}`);
  console.log(`Dias com faturamento acima da média: ${diasAcimaDaMedia}`);
});
