"use client";

import React, { useState } from "react";
import { useSearchParams } from "next/navigation";
import ModeTitle from "../../components/ModeTitle";
import PlayerScoreBoards from "../../components/PlayerScoreBoards";
import RoundScoreBoard from "../../components/RoundScoreBoard";
import DartsBoard from "../../components/DartsBoard";
import Draw from "../../components/Draw";
import DisplayChangeButton from "@/app/components/DiplayChangeButton";

type ScoreProps = {
  RoundScore: { num: number; mul: number }[];
};

// 陣地データ型
type TerritoryState = {
  [key: number]: number[]; // プレイヤーごとに数字ごとのヒット数を記録
};

// CricketMarksBord コンポーネント
const CricketMarksBord = () => {
  return (
    <section className="flex justify-center">
      <div>
        <div className="border-2 px-5">
          <MarkBar />
        </div>
        <div className="p-5">
          <p className="text-7xl mb-2">20</p>
          <p className="text-7xl mb-3">19</p>
          <p className="text-7xl mb-3">18</p>
          <p className="text-7xl mb-3">17</p>
          <p className="text-7xl mb-3">16</p>
          <p className="text-7xl mb-3">15</p>
          <p className="text-4xl mb-3">BULL</p>
        </div>
        <div className="border-2 px-5">
          <MarkBar />
        </div>
      </div>
    </section>
  );
};

type MarkProps = {
  mark: number;
};

const MarkBar = () => {
  return (
    <div>
      <Mark mark={3} />
      <Mark mark={0} />
      <Mark mark={2} />
      <Mark mark={3} />
      <Mark mark={3} />
      <Mark mark={0} />
      <Mark mark={1} />
    </div>
  );
};

const Mark = ({ mark }: MarkProps) => {
  let path: string;
  switch (mark) {
    case 1:
      path = "/images/1mark.png";
      break;
    case 2:
      path = "/images/2mark.png";
      break;
    case 3:
      path = "/images/3mark.png";
      break;
    default:
      path = "/images/0mark.png";
  }

  return <img className="w-3/4 m-auto my-5" src={path} alt={`Mark ${mark}`} />;
};

const Cricket = () => {
  const modeName = "CRICKET";
  const maxRound = 8;

  const searchParams = useSearchParams();
  const players = Number(searchParams.get("players")) || 1;

  // 状態管理
  const [roundScore, setRoundScore] = useState<ScoreProps["RoundScore"]>([]);
  const [playerScores, setPlayerScores] = useState<number[]>(
    Array(players).fill(0)
  );
  const [territories, setTerritories] = useState<TerritoryState>(
    Array.from({ length: players }, () => ({
      15: 0,
      16: 0,
      17: 0,
      18: 0,
      19: 0,
      20: 0,
      25: 0, // BULL
    }))
  );

  const [currentPlayer, setCurrentPlayer] = useState<number>(0);
  const [currentRound, setCurrentRound] = useState<number>(1);
  const [isGameOver, setIsGameOver] = useState<boolean>(false);

  // 表示切り替え状態
  const [showCricketMarksBoard, setShowCricketMarksBoard] =
    useState<boolean>(false);

  // スコアおよび陣地管理
  const handleRelease = (coords: { num: number; mul: number }) => {
    if (roundScore.length < 3 && !isGameOver) {
      const hitNumber = coords.num;
      const multiplier = coords.mul;

      if ((hitNumber >= 15 && hitNumber <= 20) || hitNumber === 25) {
        setRoundScore((prev) => [...prev, coords]);
        setTerritories((prev) => {
          const newTerritories = [...prev];
          newTerritories[currentPlayer][hitNumber] += multiplier;

          // 陣地確保後のスコア加算処理
          if (newTerritories[currentPlayer][hitNumber] > 3) {
            const extraHits = newTerritories[currentPlayer][hitNumber] - 3;
            setPlayerScores((prevScores) => {
              const newScores = [...prevScores];
              newScores[currentPlayer] += hitNumber * extraHits;
              return newScores;
            });
            newTerritories[currentPlayer][hitNumber] = 3; // 上限3回に固定
          }

          return newTerritories;
        });
      }
    }
  };

  // 表示切り替え関数
  const handleDisplayChange = () => {
    setShowCricketMarksBoard((prev) => !prev);
  };

  return (
    <section>
      <ModeTitle
        modeName={modeName}
        currentRound={currentRound}
        maxRound={maxRound}
      />

      <div className="flex">
        {/* ドローエリア */}
        <div className="w-1/4 flex justify-center items-center">
          {!isGameOver && <Draw onRelease={handleRelease} />}
        </div>

        {/* 表示切り替え対象 */}
        <div className="w-1/2 py-5">
          {showCricketMarksBoard ? <CricketMarksBord /> : <DartsBoard />}
        </div>

        {/* スコアボード */}
        <div className="w-1/4 flex justify-center items-center">
          <div>
            <RoundScoreBoard RoundScore={roundScore} />
            {roundScore.length === 3 && (
              <button
                onClick={() => setRoundScore([])}
                className="mt-3 px-4 py-2 bg-blue-500 text-white rounded"
              >
                Next Round
              </button>
            )}
            <button onClick={handleDisplayChange}>
              <img
                className="m-auto mt-10 cursor-pointer"
                src="/images/displaychange.png"
                alt="Display Change Button"
              />
            </button>
          </div>
        </div>
      </div>

      {/* プレイヤースコアボード */}
      <PlayerScoreBoards
        playerScores={playerScores}
        currentPlayer={currentPlayer}
        territories={territories}
      />

      {isGameOver && (
        <div className="text-center mt-5 text-2xl font-bold text-green-600">
          ゲーム終了！お疲れ様でした！
        </div>
      )}
    </section>
  );
};

export default Cricket;
