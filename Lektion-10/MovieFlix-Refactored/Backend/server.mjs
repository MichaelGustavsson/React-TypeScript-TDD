// Steg 1. Importera alla beroenden...
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import movies from './routes/movies-routes.mjs';
import shows from './routes/shows-routes.mjs';

// Steg 2. Starta upp tillgång till .env filens konfiguration...
dotenv.config();

// Globala variabler...
const PORT = process.env.PORT || 5010;

// Steg 3. Få tag i express applikationen...
const app = express();

// Steg 4. Aktivera middleware...
app.use(cors());
app.use('/api/movies', movies);
app.use('/api/shows', shows);

// Steg 5. Starta upp servern och lyssna på anrop...
app.listen(PORT, () =>
  console.log(`Server är startad och lyssnar på port: ${PORT}`)
);
