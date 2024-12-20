"use client"
import React, { useState } from "react";
import Draw from "../components/Draw";


const Game: React.FC = () => {
  const [totalScore, setTotalScore] = useState(0);

  const handleScoreUpdate = (score: number) => {
    setTotalScore((prev) => prev + score);
    console.log("現在の合計得点:", totalScore + score);
  };

  return (
    <div>
      <h1>ダーツゲーム</h1>
      <p>合計得点: {totalScore}</p>
      <Draw onScoreUpdate={handleScoreUpdate} />
    </div>
  );
};

export default Game;
