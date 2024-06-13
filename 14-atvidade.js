/*14) Um nutricionista precisa controlar a dieta para pacientes celíacos (intolerantes à glúten)
 e pacientes com intolerância à lactose. Criar um programa onde o paciente deve digitar seu nome
  e em seguida responder se é celíaco (primeira pergunta) e se é intolerante à lactose (segunda pergunta).
   Validar as respostas de SIM e NÃO para letras maiúsculas e minúsculas. Em seguida coletar os dados de
    3 alimentos, sendo digitado o nome do alimento, se ele contém glúten ou não e se ele contém lactose 
    ou não. Ao final, informar se o paciente pode comer os 3 alimentos digitados "Dieta adequada!" 
ou não pode "Dieta inadequada, contém alimentos aos quais o paciente é intolerante!". */

//sim ou nao
let intoleranteGluten
let intolerantelactose
let digiteNome
let alimentoUm,alimentoDois,alimentoTres
let alimentoContemGlutem
let alimentoContemlactose









digiteNome=prompt('digite seu nome:')
intoleranteGluten=prompt('voce è celiaco? '+' sim/nao')
intolerantelactose=prompt('voce e intolerante a lactose:')

if(intoleranteGluten=='sim'&& intolerantelactose=='sim'){

alimentoUm=prompt('digite um alimento que esta na sua dieta:')
alimentoDois=prompt('digite um segundo alimento da sua dieta:')
alimentoTres=prompt('digite o terceiro alimento da sua dieta:')

alimentoContemGlutem=prompt('alguns dos alimento contem glutem?')

alimentoContemlactose=prompt('alguns dos alimentos contem lactose?')

if(alimentoContemGlutem=='sim '&& alimentoContemlactose=='sim'){
    alert('dieta inadequada, contem alimentos os quais o paciente e intolerante')

}

else(alert('dieta adequada'))


}else if(intoleranteGluten=='sim'){

    alimentoUm=prompt('digite um alimento que esta na sua dieta:')
    alimentoDois=prompt('digite um segundo alimento da sua dieta:')
    alimentoTres=prompt('digite o terceiro alimento da sua dieta:')
    
    alimentoContemGlutem=prompt('alguns dos alimento contem glutem?')


if(alimentoContemGlutem=="sim"){
    alert('dieta inadequada, contem alimentos os quais o paciente e intolerante')


}else(alert('dieta adequada'))

}else if(intolerantelactose=='sim'){


    alimentoUm=prompt('digite um alimento que esta na sua dieta:')
    alimentoDois=prompt('digite um segundo alimento da sua dieta:')
    alimentoTres=prompt('digite o terceiro alimento da sua dieta:')
    
    alimentoContemlactose=prompt('alguns dos alimento contem lactose?')



if(alimentoContemlactose=='sim'){

    alert('dieta inadequada, contem alimentos os quais o paciente e intolerante')



}else(alert('dieta adequada'))


}else(alert('voce pode comer oque voce quiser :)'))

























