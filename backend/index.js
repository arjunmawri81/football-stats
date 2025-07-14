const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 8080;

app.use(cors());

app.get("/getMatchStats", (req, res) => {
  const matchId = req.query.matchId;

  if (matchId === "1") {
    res.json({
      matchId: "1",
      date: "03-05-2023",
      stats: {
        teamA: {
          goals: "1",
          possession: "50%",
          passes: "50",
          shots: "5",
          shotsOnTarget: "3",
          corners: "6"
        },
        teamB: {
          goals: "1",
          possession: "50%",
          passes: "50",
          shots: "5",
          shotsOnTarget: "3",
          corners: "6"
        }
      }
    });
  } else {
    res.status(404).json({ message: "Match not found" });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
