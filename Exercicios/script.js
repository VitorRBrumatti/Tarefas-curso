let botao = document.getElementById('button')
function TrocaTexto() {
   botao.innerText = "Clicou"
}
///////////////////////////////////////////////////////////////////////////
let color = document.body;
function Cor() {
    let userColor = document.querySelector("#colorUser").value;
    color.style.background = userColor
}
///////////////////////////////////////////////////////////////////////////
let resultado = document.querySelector("#result")
function Validade() {
    let numberUser = document.querySelector("#parImpar").value
    if(numberUser & 1){
        resultado.innerText = `O número ${numberUser} é Ímpar!`;
  } 
  else {
        resultado.innerText = `O número ${numberUser} é Par!`;
    }
    }

///////////////////////////////////////////////////////////////////////////
let resultAno = document.querySelector("#resposta")
let Ano = document.querySelector("#userAno")

function Submit() {
    let numAno = parseInt(userAno.value)
    if (numAno === 1946){
        resultAno.innerText = "Parabéns! Você acertou";
    }
    else {
        resultAno.innerText = "Errado! Você não acertou!";
    }
 }
 ///////////////////////////////////////////////////////////////////////////
 let comparar = document.querySelector("#compare")
 let comparacao = document.querySelector("#comparacao")   
 function maiorMenor() {
        let num1 = document.querySelector("#num1").value
        let num2 = document.querySelector("#num2").value
        if (num1 > num2) {
            comparacao.innerText = `${num1} é Maior que o ${num2}`
        } else if (num1 < num2) {
            comparacao.innerText = `${num1} é Menor que o ${num2}`
        }
        else {
            comparacao.innerText = `${num1} é igual a ${num2}`
        }
    }
 ///////////////////////////////////////////////////////////////////////////
 let botaoMostrar = document.querySelector("#mostrarBotao");
 let botaoEsconder = document.querySelector("#esconderBotao");
 let img = document.querySelector("#imgOlhar");

function mostraImg() {
    img.style.display = 'block';
};
function escondeImg() {
    img.style.display = 'none';
}
///////////////////////////////////////////////////////////////////////////
function calculoIniciado() {
    let textImc = document.querySelector("#imcResult")
    let altura = parseFloat(document.querySelector("#altura").value)
    let peso = parseFloat(document.querySelector("#peso").value)
    let imc = peso / (altura * altura);
    
    if (imc <= 18.5) {
        textImc.innerText = `Atenção! Você está abaixo do peso seu imc é ${imc}`
    } 
    else if (imc >= 18.6 && imc <= 24.9) {
        textImc.innerText = `Você está com peso normal e seu imc é ${imc}`
    }
    else if (imc >= 25 && imc <= 29.9) {
        textImc.innerText = `Você está com sobrepeso e seu imc é ${imc}`
    }
    else if (imc >= 30 && imc <= 34.9) {
        textImc.innerText = `Você está em Obesidade 1 e seu imc é ${imc}`
    }
    else if (imc >= 35 && imc <= 39.9) {
        textImc.innerText = `Cuidado! Você está em Obesidade 2 e seu imc é ${imc}`
    }
    else if (imc >= 40 ) {
        textImc.innerText = `Atenção! Você está em Obesidade 3!! e seu imc é ${imc}`
    }
    else {
        textImc.innerText = `Insira um valor válido!`
    }

}
