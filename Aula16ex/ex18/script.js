var narray = []
var total = 0;
// tecla Enter
document.addEventListener("keypress", function(e){
    if(e.key === "Enter"){
        document.getElementById('botao').click();
    }
})

function adicionar(){
    let num = document.getElementById('num')
    let op = document.createElement('option')
    let numconvert = Number(num.value)
    //adicionando se o numero for entre 1 a 100 e tambem se nao for repetido.
    if(numconvert == 0 || numconvert > 100 || narray.includes(numconvert)){
        alert('Valor inválido ou já encontrado na lista.')
        num.value = ''
        num.focus()
    }else{
    let numeros = document.getElementById('numeros')
    narray.push(numconvert)
    op.value = `numc${narray.length}`
    numeros.appendChild(op)
    op.text = `Valor ${numconvert} adicionado.`
    //limpando o valor da caixa input e da div#res
    num.value =''
    res.innerHTML = ''
    num.focus()
    }
}

function finalizar(){
    var res = document.getElementById('res')
    var ultm = narray.length
    ultm -=1
    //for para somar todos os valores do array "narray"
    for(var pos =0; pos < narray.length; pos++){
        total += narray[pos]
    }
    let media = total / narray.length;
    narray.sort((a,b) => a - b)
    res.innerHTML =  `<p>Ao todo, temos ${narray.length} números cadastrados.</p>`
    res.innerHTML += `<p>O maior valor informado foi ${narray[ultm]}</p>`
    res.innerHTML += `<p>O menor valor informado foi ${narray[0]}</p>`
    res.innerHTML += `<p>Somando todos os valores, temos ${total}</p>`
    res.innerHTML += `<p>A média dos valores digitados é ${media}</p>`
    res.innerHTML += `${narray}`
}