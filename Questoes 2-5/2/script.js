
//Seqência de Fibonacci

function fibonacci(x) {
   
    //Numero negativo
    if(x<0) {
        return 0;
    }
    //0 ou 1 para as primeiras casas
    else if(x==0 || x==1){
        return x;
    }

    else{
        var pre1X=0;
        var pre2X=1;
        var fib=0;
        while (fib < x) {
        fib = pre1X+pre2X; // Calcular o valor atual
        pre1X = pre2X; // Atualizar o valor anterior 1
        pre2X = fib; // Atualizar o valor anterior 2
        }
        if (fib == x) {
            return "O número " + x + " pertence à sequência de Fibonacci.";
        } else {
            return "O número " + x + " não pertence à sequência de Fibonacci.";
        }



    }

    
}

//Testes
console.log(fibonacci(8)); // Retorna "O número 5 pertence à sequência de Fibonacci."
console.log(fibonacci(12)); // Retorna "O número 10 não pertence à sequência de Fibonacci."
console.log(fibonacci(-3)); // Retorna "null"