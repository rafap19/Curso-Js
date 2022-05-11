
let string = 'javascript'

addZ = () => {

    let stringResult;

    for(let i = 0;i < string.length;i++){

        if((i) % 2 == 0) {

            

            stringResult = stringResult + string.replace(string[i],'Z')
        }
    }
            return stringResult
      
}

console.log(addZ())