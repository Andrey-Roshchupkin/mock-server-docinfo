import express from "express";
const app = express();
const port = 3000;
import cors from "cors";
import { clinics } from "./clinics.js";
import { doctors } from "./doctors.js";
import { clinicsReviews, doctorsReviews } from "./reviews.js";
import { requests } from "./requests.js";
import { users } from "./users.js";
import { getByID } from "./utils.js";

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json("I'm alive");
});

app.get("/clinics", (req, res) => {
  res.json(clinics);
});

app.get("/clinics/:id", (req, res) => {
  const data = getByID(req, clinics);
  if (data) {
    res.json(data);
  } else {
    res.status(404).json("this ID not found");
  }
});

app.get("/doctors", (req, res) => {
  res.json(doctors);
});

app.get("/doctors/:id", (req, res) => {
  const data = getByID(req, doctors);
  if (data) {
    res.json(data);
  } else {
    res.status(404).json("this ID not found");
  }
});

app.get("/users", (req, res) => {
  res.json(users);
});

app.get("/users/:id", (req, res) => {
  const data = getByID(req, users);
  if (data) {
    res.json(data);
  } else {
    res.status(404).json("this ID not found");
  }
});

app.get("/clinicsreviews", (req, res) => {
  res.json(clinicsReviews);
});

app.get("/doctorsreviews", (req, res) => {
  res.json(doctorsReviews);
});

app.get("/requests", (req, res) => {
  res.json(requests);
});

app.post("/login", (req, res) => {
  console.log(req.body);
  const { login, password } = req.body;
  const user = users.find((user) => (user.login = login));
  user.password == password
    ? res.status(200).json(user)
    : res.status(400).send("Invalid Credentials");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
