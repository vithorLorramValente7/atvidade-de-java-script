/*10) Faça um programa que verifique a idade de uma pessoa e forneça um desconto no cinema. Deve ser 
perguntado o valor do ingresso e a idade. Se ela tiver 12 anos ou menos, conceda um desconto de 50% 
no ingresso do cinema. Se ela tiver de 13 a 17 anos, conceda um desconto de 25%. Caso contrário (18 anos ou mais),
 não conceda nenhum desconto. Mostrar ao final o valor que a pessoa deve pagar. */


let digiteIdade
let valorDescontoAlto=50
let valorDescontoMedio=25
let valorIngreso=15
let valorIngresoDesconto


digiteIdade=Number(prompt('digite sua idade:'))


if(digiteIdade<=12){
valorIngresoDesconto=(valorIngreso*valorDescontoAlto)/100
alert('voce deve pagar:'+valorIngresoDesconto+'reais $')


}


else if(digiteIdade>12 && digiteIdade<=17){
valorIngresoDesconto=(valorIngreso*valorDescontoMedio)/100
valorIngresoDesconto=valorIngreso-valorIngresoDesconto

alert('voce deve pagar:'+valorIngresoDesconto+'reais $')
valorIngresoDesconto=valorIngreso-valorIngresoDesconto


}

else if(digiteIdade>=18){
    alert('voce de deve pagar:'+valorIngreso+'reais $')
}






