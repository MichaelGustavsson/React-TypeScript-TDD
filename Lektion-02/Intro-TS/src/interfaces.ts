/*
  Ett interface är vårt objekts struktur
  Interface definierar vårt objekt
  Interface bestämmer vilka egenskaper, dess namn och typ samt åtkomlighet
  dessutom bestämmer vilka metoder/funktioner som ska finnas
  vad ska ta för argument, dess typ och retur.

  OBSERVERA!
  Ett interface tillhandahåller INGEN implementering/logik!!!
*/

// Vi skapar en enum för olika film kategorier...
enum MovieCategoryEnum {
  ACTION,
  DRAMA,
  COMEDY,
  HORROR,
  THRILLER,
}

// Skapa ett interface som beskriver vad en film består av
interface IMovie {
  // Properties...
  readonly id: number;
  title: string;
  director: string;
  releaseYear: number | string;
  length?: number;
  categories: MovieCategoryEnum[];
  // Methods
  displayInfo(): string;
}

// Implementera/realisera ett interface...
const taken: IMovie = {
  id: 1,
  title: 'Taken',
  director: 'Pierre Morel',
  releaseYear: 2008,
  categories: [],
  displayInfo: function (): string {
    return `Filmtitel ${this.title} premiär år ${this.releaseYear}`;
  },
};

taken.categories.push(MovieCategoryEnum.ACTION);
taken.categories.push(MovieCategoryEnum.THRILLER);

taken.displayInfo();

// Reopening an interface
interface IMovie {
  language?: string;
  subTitles?: boolean;
}

taken.subTitles = true;
taken.language = 'English';

/*
  Ett bättre sätt att utöka ett interface på
  skapa ett nytt interface utökar ett befintlig interface
  Arv mellan interface...
  interface har ett begrepp som man kallar för
  Har-ett/en-förhållande
  Arv är egentligen frågan är jag en typ av det där...
*/

// Utökning av interface...
// IVehicle allt som alla typer av fordon har!
interface IVehicle {
  readonly id: number;
  manufacturer: string;
  modelYear: number;
}

// Definiera vad en cykel har...
interface IBike extends IVehicle {
  hasFootBreak: boolean;
}

// Interface för bilar/Cars
interface ICar extends IVehicle {
  regNo: string;
  mileage: number;
  model: string;
}

const fordon: IVehicle = {
  id: 0,
  manufacturer: '',
  modelYear: 0,
};

const ford: ICar = {
  regNo: '',
  mileage: 0,
  model: '',
  id: 0,
  manufacturer: '',
  modelYear: 0,
};

const bike: IBike = {
  hasFootBreak: false,
  id: 0,
  manufacturer: '',
  modelYear: 0,
};

interface ITruck extends IVehicle, ICar {
  tara: number;
}

const truck: ITruck = {
  tara: 0,
  id: 0,
  manufacturer: '',
  modelYear: 0,
  regNo: '',
  mileage: 0,
  model: '',
};
