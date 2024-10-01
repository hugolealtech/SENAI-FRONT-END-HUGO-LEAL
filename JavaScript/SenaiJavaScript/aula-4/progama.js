//string
const nome = "predro"
const sobrenome = "silva"
const idade = 27
const apresentação = "Meu nome é "+ nome + " "+sobrenome+ " tenho "+idade +" anos de idade "  
console.log(apresentação)
//template de string
const apresentação2 = `Meu nome é ${nome} ${sobrenome} e tenho ${idade} anos de idade.`;
console.log(apresentação2);
const s = "Olá mundo";

// Corrigindo o erro de sintaxe: length é uma propriedade, não uma função
console.log(s.length); // Imprime 9 (número de caracteres)

console.log(s.toUpperCase()); // Imprime "OLÁ MUNDO"