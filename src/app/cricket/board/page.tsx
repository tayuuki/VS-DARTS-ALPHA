// "use client";
// import React from "react";
// import { useParams } from "next/navigation";
// import Image from "next/image";
// import PlayerScoreBoards from "../../components/PlayerScoreBoards";
// import ModeTitle from "../../components/ModeTitle";
// import DartsBoard from "../../components/DartsBoard";
// import RoundScoreBoard from "../../components/RoundScoreBoard";
// import { ScoreProps } from "../../components/RoundScoreBoard";
// import DiplayChangeButton from "../../components/DiplayChangeButton";

// const exampleScore: ScoreProps = {
//   RoundScore: [
//     { num: 20, mul: 3 },
//     { num: 5, mul: 2 },
//     { num: 18, mul: 1 },
//   ],
// };

// const Cricket = () => {
// 	const modeName = "CRICKET"

//   return (
//     <section className="">
//       <ModeTitle modeName={String(modeName)} />
//       <div className="flex">
//         <div className="w-1/4 flex justify-center items-center"></div>

//         <div className="w-1/2 py-5">
//           <DartsBoard />
//         </div>

//         <div className="w-1/4 flex justify-center items-center">
//           <div>
//           <RoundScoreBoard RoundScore={exampleScore.RoundScore} />
//           <DiplayChangeButton />
//           </div>
//         </div>
//       </div>
//       <PlayerScoreBoards />
//     </section>
//   );
// };


// export default Cricket;


// "use client";
// import React from "react";
// import { useParams } from "next/navigation";
// import Image from "next/image";
// import PlayerScoreBoards from "../../components/PlayerScoreBoards";
// import ModeTitle from "../../components/ModeTitle";
// import DartsBoard from "../../components/DartsBoard";
// import RoundScoreBoard from "../../components/RoundScoreBoard";
// import { ScoreProps } from "../../components/RoundScoreBoard";
// import DiplayChangeButton from "../../components/DiplayChangeButton";

// const exampleScore: ScoreProps = {
//   RoundScore: [
//     { num: 20, mul: 3 },
//     { num: 5, mul: 2 },
//     { num: 18, mul: 1 },
//   ],
// };

// const Cricket = () => {
//   const modeName = "CRICKET";

//   return (
//     <section className="">
//       <ModeTitle modeName={String(modeName)} />
//       <div className="flex">
//         <div className="w-1/4 flex justify-center items-center"></div>

//         <div className="w-1/2 py-5">
//           <DartsBoard />
//         </div>

//         <div className="w-1/4 flex justify-center items-center">
//           <div>
//             <RoundScoreBoard RoundScore={exampleScore.RoundScore} />
//             <DiplayChangeButton />
//           </div>
//         </div>
//       </div>
//       <PlayerScoreBoards />
//     </section>
//   );
// };

// export default Cricket;

// // CricketMarksBord Component
// const CricketMarksBord = () => {
//   return (
//     <section className="flex">
//       <div className="border-2 px-5">
//         <MarkBar />
//       </div>
//       <div className="p-5">
//         <p className="text-7xl mb-2">20</p>
//         <p className="text-7xl mb-3">19</p>
//         <p className="text-7xl mb-3">18</p>
//         <p className="text-7xl mb-3">17</p>
//         <p className="text-7xl mb-3">16</p>
//         <p className="text-7xl mb-3">15</p>
//         <p className="text-4xl mb-3">BULL</p>
//       </div>
//       <div className="border-2 px-5">
//         <MarkBar />
//       </div>
//     </section>
//   );
// };

// // MarkBar Component
// const MarkBar = () => {
//   return (
//     <div>
//       <Mark mark={3} />
//       <Mark mark={0} />
//       <Mark mark={2} />
//       <Mark mark={3} />
//       <Mark mark={3} />
//       <Mark mark={0} />
//       <Mark mark={1} />
//     </div>
//   );
// };

// // Mark Component
// type MarkProps = {
//   mark: number;
// };

// const Mark = ({ mark }: MarkProps) => {
//   let path: string;
//   switch (mark) {
//     case 1:
//       path = "/images/1mark.png";
//       break;
//     case 2:
//       path = "/images/2mark.png";
//       break;
//     case 3:
//       path = "/images/3mark.png";
//       break;
//     default:
//       path = "/images/0mark.png";
//   }

//   return <img className="w-3/4 m-auto my-5" src={path} alt={`Mark ${mark}`} />;
// };

// // Updated Cricket Component with Switching Functionality
// const CricketWithSwitch = () => {
//   const [showMarksBoard, setShowMarksBoard] = React.useState(false);
//   const modeName = "CRICKET";

//   const toggleBoard = () => {
//     setShowMarksBoard((prev) => !prev);
//   };

//   return (
//     <section className="">
//       <ModeTitle modeName={String(modeName)} />
//       <div className="flex">
//         <div className="w-1/4 flex justify-center items-center"></div>

//         <div className="w-1/2 py-5">
//           {showMarksBoard ? <CricketMarksBord /> : <DartsBoard />}
//         </div>

//         <div className="w-1/4 flex justify-center items-center">
//           <div>
//             <RoundScoreBoard RoundScore={exampleScore.RoundScore} />
//             <button
//               onClick={toggleBoard}
//               className="mt-5 px-4 py-2 bg-blue-500 text-white rounded"
//             >
//               {showMarksBoard ? "Show Dart Board" : "Show Marks Board"}
//             </button>
//           </div>
//         </div>
//       </div>
//       <PlayerScoreBoards />
//     </section>
//   );
// };




// "use client";
// import React, { useState } from "react";
// import { useSearchParams } from "next/navigation";
// import ModeTitle from "../../components/ModeTitle";
// import PlayerScoreBoards from "../../components/PlayerScoreBoards";
// import RoundScoreBoard from "../../components/RoundScoreBoard";
// import DartsBoard from "../../components/DartsBoard";
// import DiplayChangeButton from "../../components/DiplayChangeButton";
// import Draw from "@/app/components/Draw";

// type ScoreProps = {
//   RoundScore: { num: number; mul: number }[];
// };

// // CricketMarksBoard Component
// const CricketMarksBoard = () => {
//   return (
//     <section className="flex">
//       <div className="border-2 px-5">
//         <MarkBar />
//       </div>
//       <div className="p-5">
//         <p className="text-7xl mb-2">20</p>
//         <p className="text-7xl mb-3">19</p>
//         <p className="text-7xl mb-3">18</p>
//         <p className="text-7xl mb-3">17</p>
//         <p className="text-7xl mb-3">16</p>
//         <p className="text-7xl mb-3">15</p>
//         <p className="text-4xl mb-3">BULL</p>
//       </div>
//       <div className="border-2 px-5">
//         <MarkBar />
//       </div>
//     </section>
//   );
// };

// // MarkBar Component
// const MarkBar = () => {
//   return (
//     <div>
//       <Mark mark={3} />
//       <Mark mark={0} />
//       <Mark mark={2} />
//       <Mark mark={3} />
//       <Mark mark={3} />
//       <Mark mark={0} />
//       <Mark mark={1} />
//     </div>
//   );
// };

// // Mark Component
// type MarkProps = { mark: number };
// const Mark = ({ mark }: MarkProps) => {
//   const path = `/images/${mark}mark.png`;
//   return <img className="w-3/4 m-auto my-5" src={path} alt={`Mark ${mark}`} />;
// };

// // Main Cricket Component
// const Cricket = () => {
//   const modeName = "CRICKET";
//   const maxRound = 8; // 最大ラウンド数

//   const searchParams = useSearchParams();
//   const players = Number(searchParams.get("players")) || 1;

//   const [roundScore, setRoundScore] = useState<ScoreProps["RoundScore"]>([]);
//   const [playerScores, setPlayerScores] = useState<number[]>(Array(players).fill(0));
//   const [currentPlayer, setCurrentPlayer] = useState<number>(0);
//   const [currentRound, setCurrentRound] = useState<number>(1);
//   const [showMarksBoard, setShowMarksBoard] = useState<boolean>(false);

//   // スコア更新処理
//   const handleRelease = (coords: { num: number; mul: number }) => {
//     if (roundScore.length < 3) {
//       const score = coords.num * coords.mul;

//       setPlayerScores((prevScores) => {
//         const newScores = [...prevScores];
//         newScores[currentPlayer] += score;
//         return newScores;
//       });

//       setRoundScore((prev) => [...prev, coords]);
//     }
//   };

//   // ラウンドまたはプレイヤー切り替え処理
//   const handleNextRound = () => {
//     if (roundScore.length === 3) {
//       setRoundScore([]);
//       if (currentPlayer === players - 1) {
//         setCurrentRound((prev) => prev + 1);
//       }
//       setCurrentPlayer((prev) => (prev + 1) % players);
//     }
//   };

//   // ダーツボード/マークボード切り替え
//   const toggleBoard = () => {
//     setShowMarksBoard((prev) => !prev);
//   };

//   return (
//     <section>
//       {/* モードタイトル */}
//       <ModeTitle modeName={modeName} currentRound={currentRound} maxRound={maxRound} />

//       <div className="flex">
//         {/* 左側：空白スペース */}
//         <div className="w-1/4 flex justify-center items-center">
//         <Draw />
//         </div>

//         {/* 中央：ダーツボードまたはマークボード */}
//         <div className="w-1/2 py-5">
//           {showMarksBoard ? <CricketMarksBoard /> : <DartsBoard />}
//         </div>

//         {/* 右側：スコアボードとボタン */}
//         <div className="w-1/4 flex justify-center items-center">
//           <div>
//             <RoundScoreBoard RoundScore={roundScore} />
//             <button
//               onClick={handleNextRound}
//               disabled={roundScore.length < 3}
//               className="block mt-3 px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-400"
//             >
//               Next Round
//             </button>
//             <button
//               onClick={toggleBoard}
//               className="mt-3 px-4 py-2 bg-green-500 text-white rounded"
//             >
//               {showMarksBoard ? "Show Dart Board" : "Show Marks Board"}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* プレイヤースコアボード */}
//       <PlayerScoreBoards playerScores={playerScores} currentPlayer={currentPlayer} />
//     </section>
//   );
// };

// export default Cricket;



// "use client";

// import React, { useState } from "react";
// import { useSearchParams } from "next/navigation";
// import ModeTitle from "../../components/ModeTitle";
// import PlayerScoreBoards from "../../components/PlayerScoreBoards";
// import RoundScoreBoard from "../../components/RoundScoreBoard";
// import DartsBoard from "../../components/DartsBoard";
// import DiplayChangeButton from "../../components/DiplayChangeButton";
// import Draw from "../../components/Draw";

// type ScoreProps = {
//   RoundScore: { num: number; mul: number }[];
// };

// const Cricket = () => {
//   const modeName = "CRICKET";
//   const maxRound = 8;

//   const searchParams = useSearchParams();
//   const players = Number(searchParams.get("players")) || 1;

//   const [roundScore, setRoundScore] = useState<ScoreProps["RoundScore"]>([]);
//   const [playerScores, setPlayerScores] = useState<number[]>(Array(players).fill(0));
//   const [currentPlayer, setCurrentPlayer] = useState<number>(0);
//   const [currentRound, setCurrentRound] = useState<number>(1);
//   const [isGameOver, setIsGameOver] = useState<boolean>(false);

//   // スコア更新処理
//   const handleRelease = (coords: { num: number; mul: number }) => {
//     if (roundScore.length < 3 && !isGameOver) {
//       setRoundScore((prev) => [...prev, coords]);
//     }
//   };

//   // ラウンド進行処理
//   const handleNextRound = () => {
//     if (roundScore.length === 3 && !isGameOver) {
//       setPlayerScores((prevScores) => {
//         const newScores = [...prevScores];
//         const roundTotal = roundScore.reduce((sum, dart) => sum + dart.num * dart.mul, 0);
//         newScores[currentPlayer] += roundTotal;
//         return newScores;
//       });

//       setRoundScore([]);

//       if (currentPlayer === players - 1) {
//         if (currentRound === maxRound) {
//           setIsGameOver(true);
//         } else {
//           setCurrentRound((prev) => prev + 1);
//         }
//       }

//       setCurrentPlayer((prev) => (prev + 1) % players);
//     }
//   };

//   return (
//     <section>
//       <ModeTitle modeName={modeName} currentRound={currentRound} maxRound={maxRound} />
//       <div className="flex">
//         {/* ドローエリア */}
//         <div className="w-1/4 flex justify-center items-center">
//           {!isGameOver && <Draw onRelease={handleRelease} />}
//         </div>

//         {/* ダーツボード */}
//         <div className="w-1/2 py-5">
//           <DartsBoard />
//         </div>

//         {/* スコアボード */}
//         <div className="w-1/4 flex justify-center items-center">
//           <div>
//             <RoundScoreBoard RoundScore={roundScore} />
//             {roundScore.length === 3 && (
//               <button
//                 onClick={handleNextRound}
//                 className="mt-3 px-4 py-2 bg-blue-500 text-white rounded"
//               >
//                 Next Round
//               </button>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* プレイヤースコアボード */}
//       <PlayerScoreBoards playerScores={playerScores} currentPlayer={currentPlayer} />

//       {isGameOver && (
//         <div className="text-center mt-5 text-2xl font-bold text-green-600">
//           ゲーム終了！お疲れ様でした！
//         </div>
//       )}
//     </section>
//   );
// };

// export default Cricket;

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

const Cricket = () => {
  const modeName = "CRICKET";
  const maxRound = 8;

  const searchParams = useSearchParams();
  const players = Number(searchParams.get("players")) || 1;

  // 状態管理
  const [roundScore, setRoundScore] = useState<ScoreProps["RoundScore"]>([]);
  const [playerScores, setPlayerScores] = useState<number[]>(Array(players).fill(0));
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

  // スコアおよび陣地管理
  const handleRelease = (coords: { num: number; mul: number }) => {
    if (roundScore.length < 3 && !isGameOver) {
      const hitNumber = coords.num;
      const multiplier = coords.mul;

      if (hitNumber >= 15 && hitNumber <= 20 || hitNumber === 25) {
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

  // ラウンド進行処理
  const handleNextRound = () => {
    if (roundScore.length === 3 && !isGameOver) {
      setRoundScore([]);

      if (currentPlayer === players - 1) {
        if (currentRound === maxRound) {
          setIsGameOver(true);
        } else {
          setCurrentRound((prev) => prev + 1);
        }
      }

      setCurrentPlayer((prev) => (prev + 1) % players);
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
            {roundScore.length === 3 && (
              <button
                onClick={handleNextRound}
                className="mt-3 px-4 py-2 bg-blue-500 text-white rounded"
              >
                Next Round
              </button>
            )}
            <DisplayChangeButton />
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

