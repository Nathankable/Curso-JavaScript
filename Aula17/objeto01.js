let amigo = {nome:'José', sexo:'M', peso: 92.5,engordar(p = 0){
    this.peso += p
}}
amigo.engordar(12.4)
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)