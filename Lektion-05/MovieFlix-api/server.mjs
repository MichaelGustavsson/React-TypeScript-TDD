// Steg 1. Importera alla beroenden...
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

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

// Fulkod, vi sätter upp våra routings endpoints...
// app.get('/', (req, res) => {
//   res.send('<H1>Node is awesome!!!</H1>');
// });

// Endpoint för get anrop...
app.get('/api/movies', async (req, res) => {
  const url = `${baseUrl}/discover/movie?api_key=${apiKey}&language=sv-SE`;

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

app.get('/api/movies/:id', async (req, res) => {
  const param = req.params.id;
  const url = `${baseUrl}/movie/${param}?api_key=${apiKey}&language=sv-SE`;

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

app.get('/api/shows', (req, res) => {
  res.status(200).json({ success: true, result: 'Det funkar!' });
});

app.get('/api/shows/:id', (req, res) => {
  res
    .status(200)
    .json({ success: true, result: `Show id funkar! ${req.params.id}` });
});

// Steg 5. Starta upp servern och lyssna på anrop...
app.listen(PORT, () =>
  console.log(`Server är startad och lyssnar på port: ${PORT}`)
);
