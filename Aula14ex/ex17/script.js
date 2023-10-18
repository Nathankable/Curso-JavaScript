function gerar(){
    var numero = document.getElementById('numero')
    var numero1 = Number(numero.value)
    var tabua = document.getElementById('tabua')

    if(!numero1){
        alert('Por favor, digite um número!')
    }else {
        let vezes = 1

        //para limpar a tabuada e nao emendar a tabuada com outra
        tabua.innerHTML = ''

        while ( vezes <=10){
            //o createElement  esta sendo usado para criar o tab <option> no HTML
            let item = document.createElement('option')
            item.text = `${numero1} X ${vezes} = ${numero1*vezes}`

            //como a tag option esta sendo criada automaticamente entao ela precisa do value, pra caso se utilizar o php.
            item.value = `tabua${vezes}`

            tabua.appendChild(item)
            vezes++
        }
    }

}