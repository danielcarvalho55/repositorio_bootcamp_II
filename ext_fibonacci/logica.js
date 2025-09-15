const botao = document.getElementById("butao");
botao.addEventListener("click", clicar);

function clicar(){
    const input = document.getElementById("indice");
    const numero = parseFloat(input.value);
    
    if (isNaN(numero)){
        document.getElementById("label_1").innerHTML = "Não foi digitado um número!<br>Digite o índice do número da sequência de Fibonacci:"
        document.getElementById("indice").value = "";
    }
    else {
        if (numero < 1 || !(numero%1 === 0)){
        document.getElementById("label_1").innerHTML = "O número deve ser inteiro e maior que zero!<br>Digite o índice do número da sequência de Fibonacci:"
        document.getElementById("indice").value = "";
        }
        else {
            let resposta = fibonacci(numero);
            document.getElementById("saida").innerHTML = "O "+numero+"º número da sequência de Fibonacci é "+resposta;
            document.getElementById("label_1").innerHTML = "Digite o índice do número da sequência de Fibonacci:"
            document.getElementById("indice").value = "";
        }
    }
}

function fibonacci(number){
    if (number == 1){return 1;}
    if (number == 2){return 1;}
    else return (fibonacci(number - 1) + fibonacci(number - 2));
}