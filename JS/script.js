function escreverNaPagina() {
    document.write("Olá, São Lucas!");
    document.write("<br> <a href='index.html'>Voltar</a>"); alert("fim!");
}

function solicitarNome() {
    let nome = prompt("Qual é o seu nome?");
    document.getElementById("res1").innerHTML = "Seu nome é " + nome;
}

function mostrarTexto() {
    let texto = document.getElementById("entrada").value;
    document.getElementById("res2").innerHTML = "Você digitou: " + texto;
}

function somar() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    if (isNaN(num1) || isNaN(num2)) {
        alert("Por favor, insira números válidos.");
    } else {
        let resultado = num1 + num2;
        document.getElementById("res3").innerHTML = "A soma é: "
            + resultado;
    }
}

function calcularMedia() {
    let nota1 = parseFloat(document.getElementById("nota1").value);
    let nota2 = parseFloat(document.getElementById("nota2").value);
    let nota3 = parseFloat(document.getElementById("nota3").value);

    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
        document.getElementById("res4").innerHTML = "Preencha todas as notas!";
        return;
    }

    let media = (nota1 + nota2 + nota3) / 3;
    let resultado = "";

    if (media >= 7) {
        resultado = "Aprovado";
    } else {
        resultado = "Reprovado";
    }

    document.getElementById("res4").innerHTML = "Média: " + media.toFixed(2) + " - " + resultado;
}

function converter() {
    let reais = parseFloat(document.getElementById("reais").value);
    let cotacao = parseFloat(document.getElementById("cotacao").value);

    if (isNaN(reais) || isNaN(cotacao) || cotacao === 0) {
        document.getElementById("res5").innerText = "Preencha os valores corretamente!";
        return;
    }

    let dolar = reais / cotacao;

    document.getElementById("res5").innerHTML =
        "Valor em Dólar: $ " + dolar.toFixed(2);
}

function calcularArea() {
    let altura = parseFloat(document.getElementById("altura").value);
    let largura = parseFloat(document.getElementById("largura").value);

    if (isNaN(altura) || isNaN(largura)) {
        document.getElementById("res6").innerText = "Preencha os valores corretamente!";
        return;
    }

    let area = altura * largura;

    document.getElementById("res6").innerHTML =
        "A área total do terreno é: " + area.toFixed(1) + "m²";

}

function mostrarAntecessorSucessor() {
    let numero = parseFloat(document.getElementById("numero").value);

    if (isNaN(numero)) {
        document.getElementById("res7").innerText = "Preencha o valor corretamente!";
        return;
    }

    let antecessor = numero - 1;
    let sucessor = numero + 1;

    document.getElementById("res7").innerHTML =
        antecessor + " " + numero + " " + sucessor;
}

function mostrarParOuImpar() {
    let numero = parseFloat(document.getElementById("numero10").value);

    if (isNaN(numero)) {
        document.getElementById("res8").innerText = "Preencha o valor corretamente!";
        return;
    }

    if (numero % 2 == 0) {
        document.getElementById("res8").innerHTML =
            "Este número é par";
    } else {
        document.getElementById("res8").innerHTML =
            "Este número é ímpar";
    }
}

function avaliarVelocidade() {
    let velocidade = parseFloat(document.getElementById("velocidade").value);

    if (isNaN(velocidade)) {
        document.getElementById("res9").innerText = "Preencha a velocidade corretamente!";
        return;
    }

    if (velocidade > 80 && velocidade <= 120) {
        document.getElementById("res9").innerHTML =
            "MULTADO!";
    } else if (velocidade > 120) {
        document.getElementById("res9").innerHTML =
            "INFRAÇÃO GRAVÍSSIMA!";
    } else {
        document.getElementById("res9").innerHTML =
            "Velocidade dentro do limite.";
    }

}

function verificarIdade() {
    let nascimento = parseInt(document.getElementById("anoNascimento").value);
    let atual = parseInt(document.getElementById("anoAtual").value);

    if (isNaN(nascimento) || isNaN(atual)) {
        document.getElementById("res12").innerText = "Preencha os valores corretamente!";
        return;
    }

    let idade = atual - nascimento;

    if (idade >= 18) {
        document.getElementById("res12").innerText = "Você já pode dirigir!";
    } else {
        document.getElementById("res12").innerText = "Você ainda não tem idade para dirigir.";
    }
}

function calcularIMC() {
    let peso = parseFloat(document.getElementById("peso").value);
    let altura = parseFloat(document.getElementById("alturaImc").value);

    console.log(peso, altura); // DEBUG

    if (isNaN(peso) || isNaN(altura) || altura === 0) {
        document.getElementById("res11").innerText = "Preencha os valores corretamente!";
        return;
    }

    let imc = peso / (altura * altura);

    if (imc < 25) {
        document.getElementById("res11").innerText =
            "IMC: " + imc.toFixed(2) + " - Você está no peso ideal.";
    } else {
        document.getElementById("res11").innerText =
            "IMC: " + imc.toFixed(2) + " - Atenção: Você está acima do peso ideal.";
    }
}

function calcularDesconto() {
    let valor = parseFloat(document.getElementById("valorCompra").value);

    if (isNaN(valor) || valor <= 0) {
        document.getElementById("res12").innerText = "Preencha o valor corretamente!";
        return;
    }

    let desconto;

    if (valor > 500) {
        desconto = valor * 0.15;
    } else {
        desconto = valor * 0.05;
    }

    let valorFinal = valor - desconto;

    document.getElementById("res12").innerText =
        "O valor final da sua compra é R$ " + valorFinal.toFixed(2);
}

function compararNumeros(){
    let numA = parseFloat(document.getElementById("numA").value);
    let numB = parseFloat(document.getElementById("numB").value);

    if (isNaN(numA) || isNaN(numB)){
        document.getElementById("res13").innerText = "Preencha os valores corretamente!";
        return;
    }

    if (numA === numB){
        document.getElementById("res13").innerText = "Os números são iguais.";
    } else if (numA > numB){
        document.getElementById("res13").innerText =
            "O número " + numA + " é maior que o número " + numB + ".";
    } else {
        document.getElementById("res13").innerText =
            "O número " + numB + " é maior que o número " + numA + ".";
    }
}