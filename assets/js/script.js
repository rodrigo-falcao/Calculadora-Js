// Variável para o visor no input
let inputResultado =document.getElementById("inputCalculadora")

// Objeto que registra os valores e funções do cálculo
let calculo = {
    valorSalvo: null,
    funcaoParaCalcular:null
};

// Ao carregar a página, atribui eventos aos botôes por meio das IDS
window.addEventListener("load", function () {
    atribuirEventos();
})

function atribuirEventos() {
    // atribuir eventos para os botões 
    document.getElementById("btnValor0").addEventListener("click", inserirNumero);
    document.getElementById("btnValor1").addEventListener("click", inserirNumero);
    document.getElementById("btnValor2").addEventListener("click", inserirNumero);
    document.getElementById("btnValor3").addEventListener("click", inserirNumero);
    document.getElementById("btnValor4").addEventListener("click", inserirNumero);
    document.getElementById("btnValor5").addEventListener("click", inserirNumero);
    document.getElementById("btnValor6").addEventListener("click", inserirNumero);
    document.getElementById("btnValor7").addEventListener("click", inserirNumero);
    document.getElementById("btnValor8").addEventListener("click", inserirNumero);
    document.getElementById("btnValor9").addEventListener("click", inserirNumero);

    document.getElementById("btnPonto").addEventListener("click", inserirNumero);
    document.getElementById("btnSoma").addEventListener("click", clicarOperador);
    document.getElementById("btnDividir").addEventListener("click", clicarOperador);
    document.getElementById("btnMultiplicar").addEventListener("click", clicarOperador);
    document.getElementById("btnSubtrair").addEventListener("click", clicarOperador);
    document.getElementById("btnLimpar").addEventListener("click", limparDados);
    document.getElementById("btnResultado").addEventListener("click", clicarResultado);
}

// Adiciona o número no input
function inserirNumero() {
    // validação do número, se não for o npumero substitui pelo valor do button
    if(isNaN(inputResultado.value)) {
        inputResultado.value = event.target.textContent;
        // senão, adiciona o valor aos demais
    }else {
        if(inputResultado.value == 0) {
            inputResultado.value = event.target.textContent;
        }else {
            inputResultado.value += event.target.textContent;
        }
    }
}

// Operação de soma
function somar(valor1, valor2) {
    return valor1 + valor2;
}

// função de subatração
function subtrair(valor1, valor2) {
    return valor1 - valor2;
}

// função de multiplicação
function multiplicar(valor1, valor2) {
    return valor1 * valor2;
}

// função de divisão
function dividir(valor1, valor2) {
    if(valor2 === 0){
        return "Erro, não é possível dividir um número por zero!"
    }else {
        return valor1 / valor2;
    }
}

// função C (limpar dados)
function limparDados() {
    inputResultado.value = "";
    calculo.valorSalvo = null;
    calculo.funcaoParaCalcular = null;
}

// função para inserir o ponto nas casas decimais
function inserirPonto(){
    if(inputResultado.value === "" || isNaN(inputResultado.value)){
        inputResultado.value = "0.";
    }else if (!inputResultado.value.includes(".")){
        inputResultado.value = inputResultado.value + ".";
    }
}

// Vai atribuir a função conforme o operador pressionado
function atribuirOperacao(operador){
    if(operador === "+"){
        calculo.funcaoParaCalcular = somar;
    } else if(operador === "-"){
        calculo.funcaoParaCalcular = subtrair;
    }else if(operador === "*") {
        calculo.funcaoParaCalcular = multiplicar;
    }else {
        calculo.funcaoParaCalcular = dividir;
    }
}

// Atualiza valores de cálculo
function clicarOperador() {
    if(!isNaN(inputResultado.value)){
        if(calculo.valorSalvo == null){
            calculo.valorSalvo = Number(inputResultado.value);
        }else if(calculo.funcaoParaCalcular != null){
            calculo.valorSalvo = calculo.funcaoParaCalcular(calculo.valorSalvo, Number
            (inputResultado.value));
        }
    }
    let operador = event.target.textContent;
    atribuirOperacao(operador);
    inputResultado.value = operador
}

// Função vai exibir o resultado no input
function clicarResultado() {
    if(!isNaN(inputResultado.value) && calculo.funcaoParaCalcular != null) {
        let resultado = calculo.funcaoParaCalcular(calculo.valorSalvo, Number
        (inputResultado.value));
        inputResultado.value = resultado;
        calculo.valorSalvo = resultado;
        calculo.funcaoParaCalcular = null;
    }
}