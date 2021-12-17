const express = require("express");
const { v4: uuidv4 } = require("uuid");

const app = express();

app.use(express.json());

const customers = [];

app.post("/account", (request, response) => {
  const { cpf, name } = request.body;

  const customerAlredyExists = customers.some(
    (custumer) => custumer.cpf === cpf
  );

  if (customerAlredyExists) {
    return response.status(404).json({ error: "Custumer alredy exists!" });
  }

  customers.push({
    cpf,
    name,
    id: uuidv4(),
    statement: [],
  });

  return response.status(201).send();
});

app.get("/account", (request, response) => {
  response.json(customers);
});

app.listen(3333);
