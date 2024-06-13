/*8) Criar um programa para calcular a densidade demográfica (habitantes por quilômetro quadrado) 
de uma região. Sendo, densidade igual a população (total de habitantes) dividida pela área (quilômetros quadrados). Mostrar mensagens 
para densidade alta (maior ou igual a 100), média (entre 25 e 100), baixa (menor que 25). */

let quantidadeHabitantes
let quilometrosQuadrados
let densidade

quantidadeHabitantes=Number(prompt('digite a quantidade de de habitantes:'))
quilometrosQuadrados=Number(prompt('digite o tamanho da cidade(em quilometros):'))


densidade=quantidadeHabitantes/quilometrosQuadrados





if(densidade>=100){
alert('densidade alta'+'\ndensidade:'+densidade)
}else if(densidade>=25 && densidade,100){
    alert('densidade media'+'\ndensidade:'+densidade)
}else if(densidade<25){
    alert('densidade baixa'+'\ndensidade:'+densidade)
}












