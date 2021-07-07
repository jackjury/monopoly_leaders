const express = require("express");
const fs = require("fs");
const LEADER_BOARD_FILE = "./leaderboardDataForExternal.json";

const cors = require("cors");

const app = express();

app.use(cors());

const PORT = 3000;

app.get("/", (req, res) => {
  let data = fs.readFileSync(LEADER_BOARD_FILE);
  let leaderBoard = JSON.parse(data);
  res.json(leaderBoard);
});

app.listen(PORT, () => {
  console.log("App is listening on http://localhost:" + PORT);
});
