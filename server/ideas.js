const express = require("express");
const ideasRouter = express.Router();
const { getAllFromDatabase } = require("./db");

ideasRouter.get("/", (req, res, next) => {
  let ideas = getAllFromDatabase("ideas");
  res.send(ideas);
});
// GET /api/ideas to get an array of all ideas.
// POST /api/ideas to create a new idea and save it to the database.
// GET /api/ideas/:ideaId to get a single idea by id.
// PUT /api/ideas/:ideaId to update a single idea by id.
// DELETE /api/ideas/:ideaId to delete a single idea by id.

module.exports = ideasRouter;
