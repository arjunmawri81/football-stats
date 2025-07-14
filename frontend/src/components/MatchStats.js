// src/components/MatchStats.js
import React, { useEffect, useState } from "react";
import axios from "axios";

function MatchStats({ matchId }) {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:8080/getMatchStats?matchId=${matchId}`)
      .then((res) => {
        setData(res.data);
        setError("");
      })
      .catch((err) => {
        console.error("Error fetching match stats:", err);
        setError("Failed to fetch match data.");
      });
  }, [matchId]);

  if (error) return <p style={{ color: "red" }}>{error}</p>;
  if (!data) return <p>Loading...</p>;

  const { stats } = data;

  return (
    <div style={{ marginTop: "20px", padding: "20px", border: "1px solid #ccc", borderRadius: "8px" }}>
      <h2>Match ID: {data.matchId}</h2>
      <h3>Date: {data.date}</h3>
      <table border="1" cellPadding="10" style={{ borderCollapse: "collapse", width: "100%" }}>
        <thead>
          <tr>
            <th>Stat</th>
            <th>Team A</th>
            <th>Team B</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Goals</td><td>{stats.teamA.goals}</td><td>{stats.teamB.goals}</td></tr>
          <tr><td>Possession</td><td>{stats.teamA.possession}</td><td>{stats.teamB.possession}</td></tr>
          <tr><td>Passes</td><td>{stats.teamA.passes}</td><td>{stats.teamB.passes}</td></tr>
          <tr><td>Shots</td><td>{stats.teamA.shots}</td><td>{stats.teamB.shots}</td></tr>
          <tr><td>Shots on Target</td><td>{stats.teamA.shotsOnTarget}</td><td>{stats.teamB.shotsOnTarget}</td></tr>
          <tr><td>Corners</td><td>{stats.teamA.corners}</td><td>{stats.teamB.corners}</td></tr>
        </tbody>
      </table>
    </div>
  );
}

export default MatchStats;
