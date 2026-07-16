const express = require("express");
const { get } = require("../redis");

const router = express.Router();

router.get("/", async (_req, res) => {
  const addedTodos = await get("added_todos");

  res.send({
    added_todos: Number(addedTodos || 0),
  });
});

module.exports = router;
