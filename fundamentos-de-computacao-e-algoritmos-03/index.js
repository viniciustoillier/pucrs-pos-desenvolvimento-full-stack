function avaliaParidade(limiteSuperior) {
    for(i=0; i<limiteSuperior; i++){
        if(i%2==1)
            console.log(i + " é um numero ímpar ")
        else
            console.log(i + " é um numero par ")
    }
}

avaliaParidade(10)