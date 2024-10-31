// Funktion som inte returnerar något, ange i så fall void som
// return typ...
const demoFn = (name: string, age: number) => {
  console.log(name, 25);
  // return name;
};

// Funktion som returnerar en sträng...
const sayHello = (name: string): string => {
  return `Tjena ${name}`;
};

demoFn('Kalle', 25);
sayHello('Kalle');

// Returtypen Never...
function mainLoop(): never {
  while (true) {
    console.log('Håll på tills jag dör...');
  }
}

// Felhantering...
const throwException = (error: string, errorCode: number): never => {
  throw new Error(error);
};
