"use client";
import React, { useState } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import PlayerScoreBoards from "../components/PlayerScoreBoards";
import ModeTitle from "../components/ModeTitle";
import DartsBoard from "../components/DartsBoard";
import RoundScoreBoard, { ScoreProps } from "../components/RoundScoreBoard";
import Draw from "../components/Draw";

const CountUp = () => {
  const modeName = "COUNT\nUP";
  const maxRound = 8; // 最大ラウンド数

  const searchParams = useSearchParams();
  const players = Number(searchParams.get("players")) || 1;

  // State
  const [roundScore, setRoundScore] = useState<ScoreProps["RoundScore"]>([]);
  const [playerScores, setPlayerScores] = useState<number[]>(Array(players).fill(0));
  const [currentPlayer, setCurrentPlayer] = useState<number>(0);
  const [currentRound, setCurrentRound] = useState<number>(1);
  const [isGameOver, setIsGameOver] = useState<boolean>(false);

  // スコアの更新
  const handleRelease = (coords: { num: number; mul: number }) => {
    if (roundScore.length < 3 && !isGameOver) {
      const score = coords.num * coords.mul;

      setPlayerScores((prevScores) => {
        const newScores = [...prevScores];
        newScores[currentPlayer] += score;
        return newScores;
      });

      setRoundScore((prev) => [...prev, coords]);
    }
  };

  // 次のラウンド・プレイヤーへ進行
  const handleNextRound = () => {
    if (roundScore.length === 3 && !isGameOver) {
      setRoundScore([]);

      // 全員が1ラウンドを終えた場合、ラウンドを進める
      if (currentPlayer === players - 1) {
        if (currentRound === maxRound) {
          determineWinner(); // 最終ラウンド終了
        } else {
          setCurrentRound((prevRound) => prevRound + 1); // 次のラウンド
        }
      }

      // 次のプレイヤーに進む
      setCurrentPlayer((prevPlayer) => (prevPlayer + 1) % players);
    }
  };

  // 勝者の判定
  const determineWinner = () => {
    const highestScore = Math.max(...playerScores);
    const winnerIndexes = playerScores
      .map((score, index) => (score === highestScore ? index : -1))
      .filter((index) => index !== -1);

    setIsGameOver(true);

    if (winnerIndexes.length === 1) {
      alert(`Player ${winnerIndexes[0] + 1} が優勝しました！スコア: ${highestScore}`);
    } else {
      alert(
        `引き分けです！ 勝者: ${winnerIndexes
          .map((idx) => `Player ${idx + 1}`)
          .join(", ")} スコア: ${highestScore}`
      );
    }
  };

  return (
    <section>
      <ModeTitle modeName={modeName} currentRound={currentRound} maxRound={maxRound} />
      <div className="flex">
        {/* ドローエリア */}
        <div className="w-1/4 flex justify-center items-center">
          {!isGameOver && <Draw onRelease={handleRelease} />}
        </div>

        {/* ダーツボード */}
        <div className="w-1/2 py-5">
          <DartsBoard />
        </div>

        {/* スコアボード */}
        <div className="w-1/4 flex justify-center items-center">
          <div>
            <RoundScoreBoard RoundScore={roundScore} />
            {roundScore.length === 3 && !isGameOver && (
              <button onClick={handleNextRound}>
                <img className="m-auto" src="/images/next_button.png" alt="Next Round" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* プレイヤースコアボード */}
      <PlayerScoreBoards playerScores={playerScores} currentPlayer={currentPlayer} />

      {/* ゲーム終了メッセージ */}
      {isGameOver && (
        <div className="text-center mt-5 text-2xl font-bold text-green-600">
          ゲーム終了！お疲れ様でした！
        </div>
      )}
    </section>
  );
};

export default CountUp;
