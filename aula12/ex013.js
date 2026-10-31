var agora = new Date()
var diaSem = agora.getDay()

diaSem = 1
/*
0 = Domingo
1 = Segunda
2 = Terça
3 = Quarta
4 = Quinta
5 = Sexta
6 = Sábado.
*/

//console.log(diaSem)

switch(diaSem) {
    case 0: Domingo
        console.log('Domingo')
        break
    case 1: Segunda
        console.log('Segunda')
        break
    case 2: Terça
        console.log('Terça')
        break
    case 3: Quarta
        console.log('Quarta')
        break
    case 4: Quinta 
        console.log('Quinta')
        break
    case 5: Sexta 
        console.log('Sexta')
        break
    case 6: Sábado
        console.log('Sábado')
        break
    default:
        console.log('[ERRO] Dia inválido!')
        break
    
}