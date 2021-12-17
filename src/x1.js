const express = require('express');

const app = express();

//infromar o tipo que ele vai receber
app.use(express.json());

//query params = paginacao/filtro
///courses?page=3&order=ask
app.get("/courses", (request, response) =>{
  const query = request.query;
  console.log(query);
  return response.json(["curso 1", "curso 2", "curso 3"]);
});

//body params = insercao/alteracao
//ex: ele vem no corpo da requisisao (JSON)
app.post("/courses", (request, response) =>{
  const body = request.body;
  console.log(body);
  return response.json(["curso 1", "curso 2", "curso 3"]);
});

//routes params = identificar um recurso editar/deletar/buscar
//ex:  /courses/333
app.put("/courses/:id", (request, response) =>{
  const params = request.params;
  console.log(params);
  return response.json(["curso 1", "curso 2", "curso 3"]);
});

app.patch("/courses/:id", (request, response) =>{
  return response.json(["curso 1", "curso 2", "curso 3"]);
});

app.delete("/courses/:id", (request, response) =>{
  return response.json(["curso 1", "curso 2", "curso 3"]);
});


app.listen(3333);
