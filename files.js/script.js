function tabuada() {
    let num1 = +prompt("Insira o valor que deseja descobrir a tabuada! obs: APENAS NÚMEROS INTEIROS!");
    num1 = parseFloat(num1)

    for (let i = 1; i <= 10; i++) {
        console.log(num1 + ' x ' + i + '  = ' + (num1 * i));
    }

}
///////////////////////////////////////////fatorial/////////////////////////////////////////////////////////////////////////////////////
function fatorial() {
    let numFator = +prompt("Insira o número para fazer o fatorial do número escolhido")
    numFator = parseFloat(numFator)
    let fator = numFator
    while (numFator > 1) {
        numFator--;
        fator = fator * numFator
    }
    alert(`O FATORIAL É ${fator}`)
    console.log(`O FATORIAL É ${fator}`);
}
///////////////////////////////////////////Bônus/////////////////////////////////////////////////////////////////////////////////////
let numAdivinha = 0;
let tentativas = 0;
function adivinhaNum() {
    numAdivinha = Math.floor(Math.random() * 100);
    
    while (aposta = numAdivinha) {

    
    let aposta = +prompt("Digite um número de 0 a 100! OBS: apenas números inteiros!")
    aposta = parseInt(aposta)
    /// // CASO DE APOSTA INVÁLIDA
    if (aposta > 100 || aposta < 1){
    alert("Insira um número válido!")
    return;
    }
////////////////////////////////////////

    if (aposta > numAdivinha) {
        tentativas++;
        alert(`O número secreto é menor que ${aposta}`)
    }
    else if (aposta < numAdivinha){
        tentativas++;
        alert(`O número secreto é maior que ${aposta}`)
    }
    else {
        alert(`Parabéns você acertou!!! com ${tentativas} tentativas!!!`)
    }
}
}
