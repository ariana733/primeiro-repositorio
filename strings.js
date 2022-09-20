//delimitação de strings

const aspasSimples = 'Olá, Mundo'
console.log(aspasSimples)

//caracteres de escape

const aspasDuplas = "Olá eu sou o \n Javascript. Eu sou melhor que o \n Python" //Java só aceita strings com aspas duplas
console.log(aspasDuplas)

const textoComCrase = `Olá eu sou o
Javascript. Eu sou melhor 
que 
o Python`
console.log(textoComCrase) //apresenta no código a maneira literal que o texto é escrito

//métodos das strings
//Obs: espaço também é caractere, dentro da programação se começa com o número 0
const texto = 'O Javascript foi criado alguns anos após o Python. Entretanto, o javascript(Javascript) é bem mais bacana.'
console.log(texto)
console.log(texto.toUpperCase()) //necessário botar ()
console.log(texto.toLowerCase())
console.log(texto.concat(' A linguagem C é a mãe de todas as linguagens.'))
//console.log(texto[5],[7])
console.log(texto.substring(2, 12)) //"Javascript"
//case sensitive
console.log(texto.replace('Javascript','Rust')) //substitui a primeira aparição
console.log(texto.replaceAll('Javascript', 'Kotlin')) // substituí todas as aparições

console.log(texto.replace(/Javascript/g, 'PHP')) //expressão regular
console.log(texto.replace(/Javascript/gi, 'PHP')) //'gi' ignora o "case sensitive"

const html = '<!DOCTYPE html>\n<html>'

console.log(html.startsWith('<!DOCTYPE html')) //valor booleano true or false
console.log(html.endsWith("</body>"))

const mensagem = '                      Olá, Mundo!                       '
console.log(mensagem)
console.log(mensagem.trim())//"trim" remove os espaços no começo e final da mensagem.

//lenght -> saber números de caracteres
let senha = 'sonic'
console.log(senha.length)
console.log(senha.length >= 8)