# Quick Intro till TypeScript Lektion 1

Vi har i denna lektion haft en snabb introduktion till TypeScript.
Vi har installerat typescript kompilatorn lokalt med kommandot: `npm i -D typescript`
Eller så kunde vi installera kompilatorn globalt på vara maskiner med kommandot: `npm i -g typescript`.

### Vad tillför TypeScript?

I första hand får vi datatyps skydd. Vi deklarerar variabler, argument med att ange vilken datatyp som behövs. T ex så använde vi name: string där vi sade att name variabeln ska endast kunna innehålla ett sträng värde.
Vi gjorde samma sak för funktioners argument. Dessutom definierade vi retur typen som funktionen förväntas returnera. Om funktionen inte returnerar något så sa vi att vi _kan_ använde returtypen _void_.

### tsconfig.json

Vi initierade vårt projekt med kommandot `tsc --init`.
Vilket adderade en konfigurationsfil _tsconfig.json_ till vårt projekt.
Med hjälp av tsconfig.json kunde vi styra vilken version av EcmaScript vill vi använda för konverteringen ifrån TypeScript till JavaScript. Vi kunde och styra om JavaScript filen/filerna skulle placeras i en egen katalog.

För att kompilera/konvertera så körde vi kommandot `tsc` i terminalfönstret.
