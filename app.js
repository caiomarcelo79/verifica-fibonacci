// Inicializador da sequência de Fibonacci
var fibo = [0, 1]
// Numero que você deseja consultar
var numeroInformado = 34

// Vai calcular a sequência de Fibonacci
while (fibo.slice(-1) < numeroInformado){
  let num = fibo.slice(-2)
  fibo.push(num.reduce((num1, num2) => num1+num2))
}

// Vai filtrar procurar dentro da sequência o valor informado
const resultado = (fibo.filter(num => num == numeroInformado))

// Se o valor informado bater com a sequência, vai resultar isso
if (resultado.length == 1) {
  console.log(`O numero ${numeroInformado} faz parte da sequencia de Fibonacci`)
}
// Caso contrário, isso irá acontecer
else{
  console.log(`O numero ${numeroInformado} nao faz parte da sequencia de Fibonacci, o proximo numero eh ${fibo.slice(-1)}`)
}
