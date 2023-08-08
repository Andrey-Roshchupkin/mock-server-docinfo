import express from "express";
const app = express();
const port = 3000;
import cors from "cors";
import { clinics } from "./clinics.js";
import { doctors } from "./doctors.js";

const usersData = [111];

app.use(cors());

app.get("/", (req, res) => {
  res.json("I'm alive");
});

app.get("/clinics", (req, res) => {
  res.json(clinics);
});

app.get("/doctors", (req, res) => {
  res.json(doctors);
});

app.get("/users", (req, res) => {
  res.json(usersData);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
