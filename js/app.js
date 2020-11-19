console.log("hello, World!");
// Задать переменные, именна переменных должны быть уникальными 
let name = "Harry potter";
let age = 18;
let survived = true;
let city = "London";
let commentary = "";
let drivinglicence = "";
// console.log("Character: " , name , ". Age: ", age, ". city: ", city);
console.log(`Character: ${name}. Age: ${age}. City: ${city}.`);

if(survived){ //if = true
    commentary = "survived the battle for Hogwarts.";
} else { // else = false
    commentary = "died in the battle for Hogwarts.";
}

console.log(`Character ${name} ${commentary} `);

if(age < 18) {
    drivinglicence = ` ${name} is too young to drive a car`;
} else {
    drivinglicence = ` ${name} is old enought to drive a car`;
}

console.log(drivinglicence);

// ul  неупорядоченный список / const это переменная ее потом можно куда-либо вставить / li - Список
const html = `  
    <ul> 
        <li> name: ${name} </il>
        <li> age : ${age} </il>
        <li> city: ${city} </il>
        <li> he ${commentary} </il>
        <li> ${drivinglicence} </il>
    </ul>

`;

document.body. innerHTML = html;