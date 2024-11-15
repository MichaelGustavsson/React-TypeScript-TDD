import express from 'express';
import cors from 'cors';
// import dotenv from 'dotenv';

const app = express();

// Middleware...
app.use(express.json());

app.get('/', async (req, res) => {
  const response = await fetch('http://localhost:5021/vehicles');

  if (response.ok) {
    const result = await response.json();
    res.status(200).json({ success: true, data: result });
  }
});

app.post('/', async (req, res) => {
  const newVehicle = req.body;

  const response = await fetch('http://localhost:5021/vehicles', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newVehicle),
  });

  console.log(response);
  res.status(201).json({ success: true, data: newVehicle });
});

app.listen(5020, () => console.log('Server is running on port 5020'));
