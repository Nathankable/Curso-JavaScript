//Recursividade... a função chama ela mesma.
function fatorial(n){
     if(n == 1){
        return 1
     }else{
        return n * fatorial(n - 1)
     }
}

console.log(fatorial(7))


//7! = 7 x 6 x 5 x 4 x 3 x 2 x 1