document.addEventListener("keypress", function (e){
    if(e.key === "Enter"){
        document.getElementById('botao').click();
    }
})
function contar(){
    var inicio = document.getElementById('inicio');
    var fim = document.getElementById('fim');
    var passo = document.getElementById('passo');
    var res = document.getElementById('res');
    var inicio1 = Number(inicio.value)
    var fim1 = Number(fim.value)
    var passo1 = Number(passo.value)
    if (inicio1 == '' || fim1 == ''){
        res.innerHTML = 'Impossivel contar!!!'
    }else{
        res.innerHTML = `<p>Contando:</p>`
        if (!passo1){
            alert('Passo Invalido Considerando PASSO valor 1!!!')
            passo1 = 1
        }
    if (inicio1 < fim1){
        res.innerHTML = `<p>Contando:</p>`
for(var contagem = inicio1; contagem <= fim1; contagem += passo1){
    res.innerHTML += `${contagem} &#x1F449 `
}
    } else{
        for(var contagem = inicio1; contagem >= fim1; contagem -= passo1){
            res.innerHTML += `${contagem} &#x1F449 `
        }
    }
    res.innerHTML += `&#x1F3C1`
}
}