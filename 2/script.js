const numeroVerificar = 6; // Altere este número para o número que deseja verificar

let anterior = 0;
let atual = 1;

while (atual < numeroVerificar) {
  let proximo = anterior + atual;
  anterior = atual;
  atual = proximo;
}

if (atual === numeroVerificar) {
  console.log(numeroVerificar + " PERTENCE à sequência de Fibonacci.");
} else {
  console.log(numeroVerificar + " NÃO PERTENCE à sequência de Fibonacci.");
}
