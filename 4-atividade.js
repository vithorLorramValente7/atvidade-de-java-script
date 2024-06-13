/*4) Faça um programa que solicite o salário e os anos de serviço de um funcionário. Se ele tiver mais de 5 anos de serviço, dê um bônus de 5% sobre o salário. */


let digiteSalario
let digiteAnosServico
let bonusSalario=5
let salarioBonus
digiteSalario=Number(prompt('digite seu salario:'))
digiteAnosServico=Number(prompt('digite os quantos anos voce trabalhou na empressa:'))

if(digiteAnosServico>=5){


salarioBonus=(digiteSalario/100)*bonusSalario

alert('voce recebeu o bonus :)'+'\nseu salario:'+digiteSalario+'\nseu bonus foi:'+salarioBonus)

}else{
    alert ('voce nao recebeu o bonus :('+'salario:'+digiteSalario)
}





















