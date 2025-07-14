// src/App.js
import React from "react";
import MatchStats from "./components/MatchStats";

function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Football Match Stats</h1>
      <MatchStats matchId={1} />
    </div>
  );
}

export default App;
