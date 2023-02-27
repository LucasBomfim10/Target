
// Faturamento de cada estado
const faturamentoSP = 67836.43;
const faturamentoRJ = 36678.66;
const faturamentoMG = 29229.88;
const faturamentoES = 27165.48;
const faturamentoOutros = 19849.53;

// calculando o total de faturamento
const totalFaturamento = faturamentoSP + faturamentoRJ + faturamentoMG + faturamentoES + faturamentoOutros;

// calculando a porcentagem de cada estado
const porcentagemSP = (faturamentoSP / totalFaturamento) * 100;
const porcentagemRJ = (faturamentoRJ / totalFaturamento) * 100;
const porcentagemMG = (faturamentoMG / totalFaturamento) * 100;
const porcentagemES = (faturamentoES / totalFaturamento) * 100;
const porcentagemOutros = (faturamentoOutros / totalFaturamento) * 100;

// Resultados
console.log(`Porcentagem de representação de cada estado:`);
console.log(`- SP: ${porcentagemSP.toFixed(2)}%`);
console.log(`- RJ: ${porcentagemRJ.toFixed(2)}%`);
console.log(`- MG: ${porcentagemMG.toFixed(2)}%`);
console.log(`- ES: ${porcentagemES.toFixed(2)}%`);
console.log(`- Outros: ${porcentagemOutros.toFixed(2)}%`);
