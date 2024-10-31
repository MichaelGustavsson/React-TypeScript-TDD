/*
  Enum, namngivna konstanter som består av key-value pair
*/
// Exempel 1:
// BAD BAD BAD!!!
/*
const NEW: string = 'new';
const PENDING: string = 'pending';
const SOLVED: string = 'solved';
const CLOSED: string = 'closed';
*/

// Exempel 2:
// Skapa en namngiven lista eller grupp av konstanterna
// det vill säga en enum
/*
enum SupportStatus {
  NEW,
  PENDING,
  SOLVED,
  CLOSED,
}

let supportStatus: SupportStatus = SupportStatus.NEW;

supportStatus = SupportStatus.PENDING;
*/

// Exempel 3:
/*
enum SupportStatus {
  NEW = 10,
  PENDING,
  SOLVED,
  CLOSED,
}
  */

// Exempel 4:
/*
enum SupportStatus {
  NEW = 10,
  PENDING = 15,
  SOLVED = 20,
  CLOSED = 25,
}
  */

// Exempel 5:
enum SupportStatus {
  NEW = 'new',
  PENDING = 'pending',
  SOLVED = 'solved',
  CLOSED = 'closed',
}

const supportStatus: SupportStatus = SupportStatus.NEW;

const isSolved = (status: SupportStatus): boolean => {
  return status === SupportStatus.SOLVED;
};

const areWeDone: boolean = isSolved(SupportStatus.PENDING);
// isSolved('Finito');
