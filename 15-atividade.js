/* 15) Você é um ciclista profissional e pretende participar da competição "Volta à Ilha de Bike", revezamento em equipes, com equipes de 
4 integrantes. O percurso tem um total de 140km, sendo dividido em 4 partes: Trecho 1 Av. Beira-Mar até Cachoeira do Bom Jesus (30km), Trecho 
2 Cachoeira do Bom Jesus até Lagoa da Conceição (45km), Trecho 3 Lagoa da Conceição até Pântano do Sul (30km), Trecho 4 Pântano do Sul até Av. 
Beira-Mar (35km). Criar um programa que recebe o nome da equipe, em seguida o nome de cada um dos 4 integrantes e o tempo em horas que gastou
 pedalando o seu trecho. Ao final mostrar a velocidade média de cada trecho e a velocidade média geral (total dos 4 trechos) com duas casas 
 após a vírgula. Se a velocidade média geral ficar abaixo de 15km/h mostrar uma mensagem "Desempenho pode melhorar bastante!", caso a velocidade 
 média fique de 15 a 18km/h mostrar uma mensagem "Desempenho bom, mas ainda pode melhorar!" e se a média ficar acima de 18km/h mostrar uma mensagem 
 "Desempenho excelente. Parabéns!"
 */

let nomePessoaUm,nomePessoaDois,nomePessoaTres,nomePessoaQuatro
let nomeEquipe
let totalQuilometrosPercorridos=140
let horaPercusos

nomeEquipe=prompt('digite o nome da sua equipe')
nomePessoaUm=prompt('digite o nome do 1° paticipante:')
nomePessoaDois=prompt('digite o nome do 2° paticipante:')
nomePessoaTres=prompt('digite o nome do 3° paticipante:')
nomePessoaQuatro=prompt('digite o nome do 4° paticipante:')

horaPercusos=Number(prompt('quanto tem levou para terminar o trajeto'))


totalQuilometrosPercorridos=totalQuilometrosPercorridos/horaPercusos

if(totalQuilometrosPercorridos<15){
alert('desempenho pode melhorar bastante')
alert('desempenho excelente'+'velocidade:'+totalQuilometrosPercorridos)

}else if(totalQuilometrosPercorridos>=15 && totalQuilometrosPercorridos<=18){
    alert('desempenho bom,mas pode melhorar!'+'velocidade:'+totalQuilometrosPercorridos) 
}


else if(totalQuilometrosPercorridos>18){
    alert('desempenho excelente'+'velocidade:'+totalQuilometrosPercorridos)
}












