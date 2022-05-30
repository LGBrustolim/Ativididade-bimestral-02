// ATIVIDADE 1
function atividade_01 () 
{
    window.alert("Você clicou no botão 1");
}   

function atividade_01_2 () 
{
    window.alert("Você clicou no botão 2");
} 

function atividade_01_3 () 
{
    window.alert("Você clicou no botão 3");
} 


// ATIVIDADE 2
function atividade_02 () 
{
    var nome = String(window.prompt("Nome do usuário"));
    var idade = Number(window.prompt("Idade do usuário"));

    document.getElementById("resultado").textContent = ("Olá, acabei de conhecer o (a) " + nome + ", que tem " + idade + " ano de idade.");

}   

// ATIVIDADE 3
function atividade_03 () 
{
    var number = Number
        (
            window.prompt("Digite o número")
        );

    var before = (number - 1);
    var after = (number + 1);

    window.alert("Anterior: " + before + ", Número: " + number + ", Posterior: " + after + ".");
    document.getElementById("resultado").textContent = ("Anterior: " + before + ", Número: " + number + ", Posterior: " + after + ".");
}   
// ATIVIDADE 4
function atividade_04 () 
{

    var nomeProduto = String(window.prompt("Nome do produto"));
    var precoProduto = Number(window.prompt("Informe o preço do produto"));
    var valorRecebido = Number(window.prompt("Informe o valor recebido"));

    var troco = Number(valorRecebido - precoProduto);

    document.getElementById("resultado").textContent = ("Você comprou '" + nomeProduto +
        "' por R$ " + precoProduto.toFixed(2).replace(".", ",") +
        "e entregou ao vendador R$ " + valorRecebido.toFixed(2).replace(".", ",") +
        " em dinheiro. Você vai receber R$ " + troco.toFixed(2).replace(".", ",") +
        "de troco. Volte sempre!");
}   

// ATIVIDADE 5
function atividade_05 ()
{
    var celsiusInformados = Number ( window.prompt("Informe a quantidade em Celsius") );

    var resultado = Number ((celsiusInformados * 1.8) + 32);

    document.getElementById("resultado").textContent = ("Conversão: ºF " + resultado + ".");
}   

// ATIVIDADE 06
function atividade_06 () 
{
    var valor = Number
        (
            window.prompt("Informe o valor que deseja")
        );
    var dolar = Number
        (
            window.prompt("Informe o valor da cotação do dolar")
        );

    var real = dolar * valor;

    document.getElementById("resultado").textContent = ("Valor em reais R$: " + real.toFixed(2).replace(".", ",") + ".");

}   

// ATIVIDADE 07
function atividade_07 ()
{

    var nomeProduto = String ( window.prompt("Nome do produto") );
    var valorProduo = Number ( window.prompt("Valor do produto") );

    var desconto = Number ( valorProduo - ((valorProduo * 10) / 100) );

    document.getElementById("resultado").textContent = ("Você comprou um produto (" + nomeProduto + ") por R$ " + valorProduo.toFixed(2).replace(".", ",") + 
    " e acaba de ganhar um desconto de 10%. Assim você vai pagar apenas R$ "+ desconto.toFixed(2). replace(".", ",") + " pelo seu produto. Volte sempre!");

}   

// ATIVIDADE 08
function atividade_08 ()
{
    var tempo = Number ( window.prompt("Tempo da viagem e horas") );
    var valMed = Number ( window.prompt("Velocidade médida durante a viagem") );

    travelCalc = () => { return (valMed * tempo) / 12 };

    document.getElementById("resultado").textContent = ("Quantidade de litros gastos na viagem: " + travelCalc().toFixed(2).replace(".", ","));

}   

// ATIVIDADE 9

    var count = 0;
  
    addCount = () => { showCount( count +=1 ); }

  
    resetCount = () => { showCount(count = 0); } 

  
    showCount = (valor) => { return document.getElementById("resultado").innerHTML = (valor); }

// ATIVIDADE 10
    quad = () => 
    {
        var valor = Number (window.prompt ("Informe o valor."));

        calc = () => { return Math.pow(valor, 2); }

        document.getElementById("resQuad").innerHTML = calc();
    }   // Fim quad

    cub = () =>
    {
        var valor = Number (window.prompt("Informe o valor."));

        calc = () => { return Math.pow(valor, 3); }

        document.getElementById("resCub").innerHTML = calc();
    }   // Fim cub
    
    rzQuad = () =>
    {
        var valor = Number (window.prompt("Informe o valor."));

        calc = () => { return Math.sqrt(valor); }

        document.getElementById("resRzQuad").innerHTML = calc();
    }   // Fim rzQuad

    rzCub = () =>
    {
        var valor = Number (window.prompt("Informe o valor."));

        calc = () => { return Math.cbrt(valor); }

        document.getElementById("resRzCub").innerHTML = calc();
    }   // Fim rzQuad