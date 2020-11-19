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

// ul  неупорядоченный список / const это переменная ее потом можно куда-либо вставить 
const html = `  
    <ul> 
        <il> name: ${name} </il>
        <il> age : ${age} </il>
        <il> city: ${city} </il>
        <il> he ${commentary} </il>
        <il> ${drivinglicence} </il>
    </ul>

`;

document.body. innerHTML = html;