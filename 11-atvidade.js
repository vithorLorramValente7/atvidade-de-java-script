/*11) Desenvolva um programa que pergunte ao usuário o número da sua conta bancária e o tipo
 de operação a ser realizada: 1) Saldo 2) Depósito 3) Saque. Nas opções de depósito e saque, 
 perguntar o valor a ser depositado ou sacado e mostrar o saldo atualizado na tela. Na opção 
 saldo, apenas mostrar o saldo atual na tela. Considere que um saque só pode ser realizado
 caso haja saldo suficiente. Criar uma variável com um valor que represente o saldo inicial. */

let digiteNumeroConta
let OpcaoPessoa
let saldo=2000
let saque
let deposito
let saldoAtualizado

digiteNumeroConta=Number(prompt('digite o numero da sua conta:'))
OpcaoPessoa=prompt('digite (1) caso queira ver o saldo:'+'\ndigite (2) caso queira depositar:'+'\ndigite (3) caso queira sacar:')


if(OpcaoPessoa==1)(

    alert('saldo:'+saldo)
)

else if(OpcaoPessoa==2){

    deposito=Number(prompt('digite a quantia de dinhero:'))

saldoAtualizado=saldo+deposito

alert('saldo atual:'+saldoAtualizado)
}

else if(OpcaoPessoa==3){

saque=Number(prompt('digite a quantia que deseja sacar:'))

saldoAtualizado=saldo-saque


if(saldoAtualizado<0)
{alert('voce nao tem saldo o suficiente para sacar essa quantia')

}else if(saldoAtualizado>=0){
    saldoAtualizado=saldo-saque

    alert('saldo:'+saldoAtualizado)

}

}








