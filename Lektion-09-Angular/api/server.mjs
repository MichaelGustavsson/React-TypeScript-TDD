import express from "express";
import cors from "cors";
import fs from "node:fs/promises";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(express.static("images"));
app.use(express.json());
app.use(cors());

// endpoints...
app.get("/api/vehicles", async (req, res) => {
  const fileContent = await fs.readFile("./data/vehicles.json");
  const vehicles = JSON.parse(fileContent);

  res.status(200).json({ vehicles: vehicles });
});

const port = process.env.PORT;
app.listen(port, () => console.log(`Server is running on port ${port}`));
