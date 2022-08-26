const ul = document.querySelector('#ul')

function fazGet(url){
 let request = new XMLHttpRequest()
 request.open("GET",url,false)
 request.send()
 return request.responseText
}


function main(){
    const data = fazGet(`https://servicodados.ibge.gov.br/api/v2/censos/nomes/`)
    const usuarios = JSON.parse(data)
    usuarios.forEach((usuario)=>{
        const div = document.createElement('div')
            div.setAttribute('class','flex')
        const li = document.createElement('li')
        li.textContent = usuario.nome 
        const x = document.createElement('li')
        x.textContent = 'X'
        x.addEventListener("click",()=>{
            ul.removeChild(div)
            const index = indexOf(usuario)
            usuarios.splice(index,1)
            localStorage.setItem('itens',JSON.stringify(usuarios))
        })
        x.setAttribute('class','x')
        div.appendChild(li)
        div.appendChild(x)
        ul.appendChild(div)
       
    })
}
main()