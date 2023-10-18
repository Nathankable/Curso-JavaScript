let num = [10,20,30,40,50,60,70,80,90,100]

num[10]=110
num.push(120)
/*
for(let pos = 0; pos < num.length; pos++){
    console.log(`Posição ${pos} o valor é ${num[pos]}`)
}
*/

for(let pos in num){
    console.log(`Posição ${pos} o valor é ${num[pos]}`)
}