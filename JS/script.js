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

function classificarTriangulo() {
    let a = Number(document.getElementById("lado1").value);
    let b = Number(document.getElementById("lado2").value);
    let c = Number(document.getElementById("lado3").value);

    if (a === b && b === c) {
        document.getElementById("res14").innerHTML = "Triângulo Equilátero";
    } else if (a === b || a === c || b === c) {
        document.getElementById("res14").innerHTML = "Triângulo Isósceles";
    } else {
        document.getElementById("res14").innerHTML = "Triângulo Escaleno";
    }
}

function menuBebidas() {
    let bebida = Number(document.getElementById("bebida").value);

    switch (bebida) {
        case 1:
            document.getElementById("res15").innerHTML = "Você escolheu Suco";
            break;
        case 2:
            document.getElementById("res15").innerHTML = "Você escolheu Refrigerante";
            break;
        case 3:
            document.getElementById("res15").innerHTML = "Você escolheu Água";
            break;
        default:
            document.getElementById("res15").innerHTML = "Opção inválida";
    }
}

function vogalOuConsoante() {
    let letra = document.getElementById("letra").value.toLowerCase();

    if ("aeiou".includes(letra)) {
        document.getElementById("res16").innerHTML = "Vogal";
    } else {
        document.getElementById("res16").innerHTML = "Consoante";
    }
}

function calculadora() {
    let n1 = Number(document.getElementById("calc1").value);
    let n2 = Number(document.getElementById("calc2").value);
    let op = document.getElementById("operacao").value;
    let resultado;

    switch (op) {
        case "+":
            resultado = n1 + n2;
            break;
        case "-":
            resultado = n1 - n2;
            break;
        case "*":
            resultado = n1 * n2;
            break;
        case "/":
            resultado = n1 / n2;
            break;
        default:
            resultado = "Operação inválida";
    }

    document.getElementById("res17").innerHTML = resultado;
}

function converterMoeda() {
    let reais = Number(document.getElementById("valorReal").value);
    let opcao = Number(document.getElementById("tipoMoeda").value);

    switch (opcao) {
        case 1:
            document.getElementById("res18").innerHTML =
                "US$ " + (reais / 5.5).toFixed(2);
            break;
        case 2:
            document.getElementById("res18").innerHTML =
                "€ " + (reais / 6.2).toFixed(2);
            break;
        case 3:
            document.getElementById("res18").innerHTML =
                "$ARS " + (reais * 70).toFixed(2);
            break;
        default:
            document.getElementById("res18").innerHTML = "Opção inválida";
    }
}

function contagemProgressiva() {
    let texto = "";

    for(let i = 1; i <= 50; i++){
        texto += i + " ";
    }

    document.getElementById("res19").innerHTML = texto;
}

function tabuada() {
    let num = Number(document.getElementById("tabuadaNum").value);
    let resultado = "";

    for(let i = 1; i <= 10; i++){
        resultado += `${num} x ${i} = ${num*i}<br>`;
    }

    document.getElementById("res20").innerHTML = resultado;
}

function somarCinco() {
    let soma = 0;

    for(let i = 1; i <= 5; i++){
        soma += Number(prompt(`Digite o ${i}º número:`));
    }

    document.getElementById("res21").innerHTML = "Soma = " + soma;
}

function mostrarPares() {
    let resultado = "";

    for(let i = 2; i <= 100; i += 2){
        resultado += i + " ";
    }

    document.getElementById("res22").innerHTML = resultado;
}

function calcularFatorial() {
    let num = Number(document.getElementById("fatorialNum").value);
    let fat = 1;

    for(let i = num; i >= 1; i--){
        fat *= i;
    }

    document.getElementById("res23").innerHTML = "Fatorial = " + fat;
}

function validarNota() {
    let nota;

    do{
        nota = Number(prompt("Digite uma nota entre 0 e 10"));
    }while(nota < 0 || nota > 10);

    document.getElementById("res24").innerHTML =
        "Nota válida: " + nota;
}

function mediaIdades() {
    let soma = 0;
    let qtd = 0;
    let idade;

    do{
        idade = Number(prompt("Digite uma idade (0 para sair)"));

        if(idade !== 0){
            soma += idade;
            qtd++;
        }

    }while(idade !== 0);

    document.getElementById("res25").innerHTML =
        "Média = " + (soma / qtd).toFixed(2);
}

function listarNomes() {
    let nomes = ["Ana", "Carlos", "João", "Maria", "Pedro"];

    document.getElementById("res26").innerHTML =
        nomes.join("<br>");
}

function maiorValor() {
    let numeros = [];

    for(let i = 0; i < 10; i++){
        numeros.push(Number(prompt("Digite um número")));
    }

    document.getElementById("res27").innerHTML =
        "Maior valor: " + Math.max(...numeros);
}

function inverterOrdem() {
    let numeros = [];

    for(let i = 0; i < 5; i++){
        numeros.push(Number(prompt("Digite um número")));
    }

    document.getElementById("res28").innerHTML =
        numeros.reverse().join(" - ");
}

function localizarNome() {
    let nomes = ["Ana", "Carlos", "João", "Maria", "Pedro"];
    let busca = document.getElementById("nomeBusca").value;

    if(nomes.includes(busca)){
        document.getElementById("res29").innerHTML =
            "Nome encontrado!";
    } else {
        document.getElementById("res29").innerHTML =
            "Nome não encontrado!";
    }
}

function filtroNotas() {
    let notas = [];
    let contador = 0;

    for(let i = 0; i < 10; i++){
        notas.push(Number(prompt("Digite uma nota")));
    }

    for(let nota of notas){
        if(nota > 7){
            contador++;
        }
    }

    document.getElementById("res30").innerHTML =
        "Notas acima de 7: " + contador;
}

function loginAcesso() {
    let usuarios = ["admin", "kaua", "joao"];
    let login = document.getElementById("login").value;

    if(usuarios.includes(login)){
        document.getElementById("res31").innerHTML =
            "Acesso Liberado";
    } else {
        document.getElementById("res31").innerHTML =
            "Acesso Negado";
    }
}

function mediaVendas() {
    let vendas = [1200,1500,1800,2200,2500,3000,2800,2600,2400,2100,1900,1700];

    let total = 0;

    for(let venda of vendas){
        total += venda;
    }

    let media = total / vendas.length;

    document.getElementById("res32").innerHTML =
        `Total anual: R$ ${total}<br>Média mensal: R$ ${media.toFixed(2)}`;
}

function carrinhoCompras() {
    let produtos = [];
    let precos = [];
    let total = 0;
    let nota = "<strong>NOTA FISCAL</strong><br><br>";

    for(let i = 0; i < 3; i++){
        produtos.push(prompt("Nome do produto"));
        precos.push(Number(prompt("Preço do produto")));
    }

    for(let i = 0; i < 3; i++){
        nota += `${produtos[i]} - R$ ${precos[i].toFixed(2)}<br>`;
        total += precos[i];
    }

    nota += `<br><strong>Total: R$ ${total.toFixed(2)}</strong>`;

    document.getElementById("res33").innerHTML = nota;
}