/*9) Elabore um programa que converta uma quantidade de dólares para reais. Devem ser solicitados
 o valor em dólares e a cotação do dólar. Mostre a conversão para reais na tela. Se a cotação do dólar estiver acima de 5 reais, exiba uma mensagem 
informando que está caro, senão exiba uma mensagem de que está barato. */

let digiteQuantidadeDolar
let digiteCotacaoDolar
let valorReais

digiteQuantidadeDolar=Number(prompt('digite a quantidade de dolares que voce quer converter:'))
digiteCotacaoDolar=Number(prompt('quanto esta a cotaçao do dolar:'))

valorReais=digiteQuantidadeDolar*digiteCotacaoDolar




if(digiteCotacaoDolar>5){
    alert('o dolar esta caro'+'\nvoce tem:'+valorReais+'reais $')
}

else{alert('o dolar esta barato:'+'\nvoce tem:'+valorReais+'reais $')}










