// JS sets 

const rbl = new Set(['ahmed',' nafis','rahman','himel'])
console.log(rbl.values())

rbl.add('tisam')
rbl.add('shuvo')

rbl.delete(' nafis')

console.log(rbl)

let text= ''

rbl.forEach(function(value){
    text += value
})

console.log(text)