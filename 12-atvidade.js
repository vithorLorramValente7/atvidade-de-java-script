/*2) Em um jogo de tabuleiro com combinação de moeda e dado, temos possibilidades de cara ou coroa
 (moeda) e números de 1 a 6 (dado). Criar um programa que pergunte ao usuário qual foi o resultado 
 da moeda e do dado, em seguida determinar o que acontece na rodada. Caso o resultado da moeda tenha
  sido cara, o jogador perde a vez, independente do dado. Mostrar mensagem de "Você perdeu sua vez!".
   Caso a moeda tenha sido coroa, o jogador pulará o número de casas no tabuleiro que sair na jogada do dado. 
Mostrar mensagens "Avance X casas no tabuleiro!", sendo X o número que saiu no dado. */


let numeroDado
let ResultadoMoeda

numeroDado=parseInt(prompt('digite qual numero o dado caiu:'))
ResultadoMoeda=prompt('qual lado da moeda caiu:')


if(ResultadoMoeda=='cara'){
    alert('avance:'+numeroDado+' casas')
}


else{
    alert('voce perdeu a vez :(')
}














