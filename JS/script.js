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