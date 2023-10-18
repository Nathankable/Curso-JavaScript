function parimpar(n){
    if(n % 2 == 0){
        return 'Pár'
    }else{
        return 'Ímpar'
    }
}
let retorno = parimpar(12)
console.log(`O numero do paramêtro é ${retorno}!`)