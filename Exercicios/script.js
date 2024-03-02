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
function trocaImg() {
    document.getElementById("image").src = "https://images.pexels.com/photos/38136/pexels-photo-38136.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1;"
}
///////////////////////////////////////////////////////////////////////////

