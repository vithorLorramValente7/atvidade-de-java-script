/*7) Fazer um programa no qual o usuário digite a sua altura e o seu peso, ao final mostre
 o IMC (índice de massa corporal) e uma mensagem se está abaixo do peso (IMC menor que 18), 
 na faixa de peso ideal (IMC de 18 a 25) ou acima do peso (IMC maior 25). */

let digitePesoPessoa
let digiteAlturaPessoa
let indiceMassaCorporal



digitePesoPessoa=Number(prompt('digite seu peso:'))
digiteAlturaPessoa=Number(prompt('digite sua altura:'))

indiceMassaCorporal=(digitePesoPessoa/digiteAlturaPessoa)/digiteAlturaPessoa



if(indiceMassaCorporal<18){
    alert('esta abaixo do peso'+'\nIMC:'+indiceMassaCorporal)
}else if(indiceMassaCorporal>=18){
    alert('peso ideal'+'\nIMC:'+indiceMassaCorporal)
}else if(indiceMassaCorporal>25){
    alert('acima do peso'+'\nIMC:'+indiceMassaCorporal)
}














