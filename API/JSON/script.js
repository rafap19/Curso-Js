const obj = {
  nome: 'Rafael',
  idade: 22,
  hobbies: [
    'Fifa',
    'futebol',
    'ler',
    'programar',
  ],
}

const jsonData = JSON.stringify(obj)
console.log(jsonData)
const objData = JSON.parse(jsonData)
console.log(objData)

objData.map((pessoa) => {
  console.log(pessoa.nome)
})
  

