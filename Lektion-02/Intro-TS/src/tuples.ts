/* 
  Tuple är en ny datatyp som finns i andra programspråk 
  t ex Apples Swift och C#
  Tuple är en typ som låter oss skapa en variabel
  som kan hålla 2 värden med olika datatyper...
  MAN KAN SE DET SOM key-value pair(dictionary)
*/
// Exempel 1:
// Den mest enkla varianten av en tuple
type HttpResponse = [number, string];

const okResponse: HttpResponse = [200, 'OK'];
const createdResponse: HttpResponse = [201, 'Created'];
const notFoundResponse: HttpResponse = [404, 'NotFound'];
const badRequestResponse: HttpResponse = [400, 'Bad Request'];

const responses: HttpResponse[] = [[200, 'OK']];

// responses.push(500, 'Internal Server Error');

// Exempel 2:
const rgbColor: [number, number, number] = [255, 0, 0];
rgbColor.push(0, 255, 255);
