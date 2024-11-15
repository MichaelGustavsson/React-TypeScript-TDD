// Steg 1. Importera alla beroenden...
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import movies from './routes/movies-routes.mjs';

// Steg 2. Starta upp tillgång till .env filens konfiguration...
dotenv.config();

// Globala variabler...
const PORT = process.env.PORT || 5010;
const baseUrl = process.env.BASE_URL;
const apiKey = process.env.API_KEY;

// Steg 3. Få tag i express applikationen...
const app = express();

// Steg 4. Aktivera middleware...
app.use(cors());
app.use('/api/movies', movies);

// Endpoint för get anrop...
app.get('/api/shows', async (req, res) => {
  const url = `${baseUrl}/discover/tv?api_key=${apiKey}&language=sv-SE`;

  try {
    const response = await fetch(url);

    if (response.ok) {
      const result = await response.json();
      res.status(200).json({ success: true, result: result });
      return;
    }
  } catch (error) {
    res.status(500).json({ success: false, message: error });
  }
});

app.get('/api/shows/:id', async (req, res) => {
  const param = req.params.id;
  const url = `${baseUrl}/tv/${param}?api_key=${apiKey}&language=sv-SE`;

  try {
    const response = await fetch(url);

    if (response.ok) {
      const result = await response.json();
      res.status(200).json({ success: true, result: result });
      return;
    }
  } catch (error) {
    res.status(500).json({ success: false, message: error });
  }
});

// Steg 5. Starta upp servern och lyssna på anrop...
app.listen(PORT, () =>
  console.log(`Server är startad och lyssnar på port: ${PORT}`)
);
