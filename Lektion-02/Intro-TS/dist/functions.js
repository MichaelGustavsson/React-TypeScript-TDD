"use strict";
// Funktion som inte returnerar något, ange i så fall void som
// return typ...
const demoFn = (name, age) => {
    console.log(name, 25);
    // return name;
};
// Funktion som returnerar en sträng...
const sayHello = (name) => {
    return `Tjena ${name}`;
};
demoFn('Kalle', 25);
sayHello('Kalle');
// Returtypen Never...
function mainLoop() {
    while (true) {
        console.log('Håll på tills jag dör...');
    }
}
// Felhantering...
const throwException = (error, errorCode) => {
    throw new Error(error);
};
