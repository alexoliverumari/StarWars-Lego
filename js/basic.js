// console.log('Olá, JavaScript!')

var userName = 'Alex Oliveira'

document.getElementById('user-name').innerHTML = userName

//      Variáveis       //
//var nome = 'Mestre Yoda'
//var idade = 100
//var jedi = true

//console.log(typeof nome)
//console.log(typeof idade)
//console.log(typeof jedi)


//      Operadores Matemáticos      //
// var n1 = 7
// var n2 = 2.5
// var total = n1 / n2

// total = n1 - n2
// total = n1 * n2
// total = n1 / n2 

// console.log(total)
// console.log(typeof total)


//      Operadores de comparação        //
// var v1 = 5
// var v2 = '5'

// var resultado = v1 !== v2
// console.log(resultado)
// console.log(typeof resultado)


//      Funções     //
// function soma(n1, n2) {
//     console.log(n1 + n2)
// }
// soma(5, 5)

// function boasVindas(nome) {
//     alert('Seja bem-vindo(a), '+nome+'!')
// }
// boasVindas('Alex')

// function soma(n1, n2) {
//     return n1 + n2
// }
// var resultado = soma(5, 5)
// console.log(resultado)


//      Controle de Fluxos      //

// Sendo um cliente correntista do banco                                            -- Quem?
// Posso sacar dinheiro em caixas eletônicos                                        -- O que?
// // Para poder comprar em lugares que não aceitam o cartão de débito ou crédito.     -- Por que?

// var saldo = 1000

// function saque(valor) {
    
//     if (valor > saldo) {
//         console.log('Valor do saque superior ao saldo!')
//     } else if (valor > 700) {
//         console.log('Valor do saque é superior ao máximo permitido por operação!')
//     } else {
//         saldo = saldo - valor
//     }

// }

// saque(701)
// console.log(saldo)

// BDD - Behavior Driven Development
// Cenário 1: Saque com sucesso
// Dado que meu saldo é de 1000 reais
// Quando faço um saque de 500 reais
// Então o valor do saque deve ser deduzido do meu saldo

// Cenário 2: Saque com valor superior ao saldo
// Dado que meu saldo é de 1000 reais
// Quando faço um saque de 1001 reais
// Então não deve deduzir do meu saldo
// E deve mostrar uma mensagem de alerta informando que o valor é superior ao saldo.

// Cenário 3: Saque com valor máximo
// Dado que meu saldo é de 1000 reais 
// E o valor máximo de operação é de 700 reais
// Quando faço um saque no valor de 701 reais 
// Então não deve deduzir do meu saldo
// E deve mostrar uma mensagem de alerta 
//   informando que o valor é superior ao máximo permitido por operação.


//      Arrays      // 
// var gaveteiro = ['Meias', 'Gravatas', 'Documentos', 'Salgadinhos']
// console.log(gaveteiro[0])

// var personagens = ['Mestre Yoda', 'Luke Skywalker', 'Princesa Leia', 'Darth Vader']
// personagens.push('C3pO')
// personagens.push('R2D2')

// console.log(personagens)

// // personagens.pop()

// personagens = personagens.filter(function(p){
//     return p !== 'Darth Vader'
// })

// mestre = personagens.filter(function(p){
//     return p === 'Mestre Yoda'
// })

// console.log(personagens)

// console.log(mestre)


//      Controles de Repetição - Loops      //
// var personagens = ['Mestre Yoda', 'Luke Skywalker', 'Princesa Leia', 'Darth Vader', 'R2D2']

// personagens.forEach(function(p){
//     console.log(p)
// })

// for (var i in personagens) {
//     console.log(personagens[i])
// }

// for (var i = 0; i<= 10; i++) {
//     console.log(i)
//     // Esse código vai ser executado até a condição retornar False
// }


//      Objetos     //
// var yoda = {
//     nome: 'Mestre Yoda',
//     idade: 100,
//     jedi: true,
//     mostraIdade: function() {
//         console.log(`A idade do ${this.nome} é ${this.idade} anos.`)
//     }
// }

// console.log(yoda)
// yoda.mostraIdade()


//      Constantes      //
// const nome = 'Darth Vader'
// console.log(nome)

// nome = 'Mestre Yoda'
// console.log(nome)