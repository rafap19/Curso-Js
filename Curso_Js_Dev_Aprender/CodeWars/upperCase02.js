/*Write a function which converts the first position of the input string to uppercase and the other elements it's all lowercase. */

let string = 'rafael'

upperCase = () => {

    /*metódo upper case que aplica letra maiúscula na posição 0 da string.
    
      método "Substring" aplicado na posição 1 da string,oque faz
      com que o resto da string seja minúscula
    */
    string = string[0].toUpperCase() + string.substring(1)
        return string
}
console.log(upperCase())