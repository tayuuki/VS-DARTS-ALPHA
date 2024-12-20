// "use client";
// import React from "react";
// import { useParams, useSearchParams } from "next/navigation";
// import Image from "next/image";
// import PlayerScoreBoards from "../../components/PlayerScoreBoards";
// import ModeTitle from "../../components/ModeTitle";
// import DartsBoard from "../../components/DartsBoard";
// import RoundScoreBoard, { ScoreProps } from "../../components/RoundScoreBoard";
// import Draw from "../../components/Draw";
// import { useRouter } from "next/router";

// const exampleScore: ScoreProps = {
//   RoundScore: [
//     { num: 20, mul: 3 },
//     { num: 5, mul: 2 },
//     { num: 18, mul: 1 },
//   ],
// };

// const ZeroOne = () => {
//   const maxNum = Number(useParams().id);
//   if (!(maxNum === 301 || maxNum === 501 || maxNum === 701)) {
//     throw new Error("max_numは301、501、701のいずれかの値である必要があります");
//   }
//   // console.log(maxNum);
//   const searchParams = useSearchParams();
//   const players = Number(searchParams.get("players"));
//   console.log("プレイヤーは", typeof players);

//   return (
//     <section className="">
//       <ModeTitle modeName={String(maxNum)} />
//       <div className="flex">
//         <div className="w-1/4 flex justify-center items-center">
//         </div>
//         <div className="w-1/2 py-5">
//           <DartsBoard />
//         </div>

//         <div className="w-1/4 flex justify-center items-center">
//           <RoundScoreBoard RoundScore={exampleScore.RoundScore} />
//         </div>
//       </div>
//       <PlayerScoreBoards />
//       <Draw />
//     </section>
//   );
// };

// export default ZeroOne;

// "use client";
// import React from "react";
// import { useParams, useSearchParams } from "next/navigation";
// import PlayerScoreBoards from "../../components/PlayerScoreBoards";
// import ModeTitle from "../../components/ModeTitle";
// import DartsBoard from "../../components/DartsBoard";
// import RoundScoreBoard, { ScoreProps } from "../../components/RoundScoreBoard";
// import Draw from "../../components/Draw";

// const exampleScore: ScoreProps = {
//   RoundScore: [
//     { num: 20, mul: 3 },
//     { num: 5, mul: 2 },
//     { num: 18, mul: 1 },
//   ],
// };

// const ZeroOne = () => {
//   const maxNum = Number(useParams().id);
//   if (!(maxNum === 301 || maxNum === 501 || maxNum === 701)) {
//     throw new Error("max_numは301、501、701のいずれかの値である必要があります");
//   }

//   const searchParams = useSearchParams();
//   const players = Number(searchParams.get("players"));

//   // 子コンポーネントから受け取る関数
//   const handleRelease = (coords: { x: number; y: number }) => {
//     console.log("指を離した座標:", coords);
//   };

//   return (
//     <section>
//       <ModeTitle modeName={String(maxNum)} />
//       <div className="flex">
//         <div className="w-1/4 flex justify-center items-center">
//         </div>
//         <div className="w-1/2 py-5">
//           <DartsBoard />
//         </div>
//         <div className="w-1/4 flex justify-center items-center">
//           <RoundScoreBoard RoundScore={exampleScore.RoundScore} />
//         </div>
//       </div>
//       <PlayerScoreBoards />
//       {/* Drawコンポーネントに関数を渡す */}
// <Draw
//   onRelease={(result) => {
//     console.log("判定結果:", result);
//   }}
// />
//     </section>
//   );
// };

// export default ZeroOne;










// "use client";
// import React, { useState } from "react";
// import { useParams, useSearchParams } from "next/navigation";
// import PlayerScoreBoards from "../../components/PlayerScoreBoards";
// import ModeTitle from "../../components/ModeTitle";
// import DartsBoard from "../../components/DartsBoard";
// import RoundScoreBoard, { ScoreProps } from "../../components/RoundScoreBoard";
// import Draw from "../../components/Draw";

// const exampleScore: ScoreProps = {
//   RoundScore: [
//     { num: 20, mul: 3 },
//     { num: 5, mul: 2 },
//     { num: 18, mul: 1 },
//   ],
// };

// const ZeroOne = () => {
//   const maxNum = Number(useParams().id);
//   if (!(maxNum === 301 || maxNum === 501 || maxNum === 701)) {
//     throw new Error("max_numは301、501、701のいずれかの値である必要があります");
//   }

//   const searchParams = useSearchParams();
//   const players = Number(searchParams.get("players"));

//   // RoundScoreの状態を保持
//   const [roundScore, setRoundScore] = useState<ScoreProps["RoundScore"]>([]);
//   const [isGameOver, setIsGameOver] = useState(false);

//   // 子コンポーネントから受け取る関数
//   const handleRelease = (coords: { num: number; mul: number }) => {
//     // RoundScoreの長さが3未満の場合に追加
//     if (roundScore.length < 3) {
//       setRoundScore((prev) => [...prev, coords]);
//     }
//   };

//   // 次のラウンドへ進む
//   const handleNextRound = () => {
//     if (roundScore.length === 3) {
//       // RoundScoreが3つになった場合
//       setRoundScore([]); // 次のラウンドのためにリセット
//     }
//   };

//   return (
//     <section>
//       <ModeTitle modeName={String(maxNum)} />
//       <div className="flex">
//         <div className="w-1/4 flex justify-center items-center">
//           {/* ここにプレイヤーの得点ボードが来る */}
//             <Draw onRelease={handleRelease} />
//         </div>
//         <div className="w-1/2 py-5">
//           <DartsBoard />
//         </div>
//         <div className="w-1/4 flex justify-center items-center">
//           <div>
//             <RoundScoreBoard RoundScore={roundScore} />
//             {/* 次のラウンドに進むボタン */}
//             {roundScore.length === 3 && !isGameOver && (
//               <button onClick={handleNextRound}>
//                 <img className="m-auto" src="/images/next_button.png" />
//               </button>
//             )}
//           </div>
//         </div>
//       </div>
//       <PlayerScoreBoards />
//       {/* Drawコンポーネントに関数を渡す */}
//     </section>
//   );
// };

// export default ZeroOne;









// "use client";
// import React, { useState } from "react";
// import { useParams, useSearchParams } from "next/navigation";
// import PlayerScoreBoards from "../../components/PlayerScoreBoards";
// import ModeTitle from "../../components/ModeTitle";
// import DartsBoard from "../../components/DartsBoard";
// import RoundScoreBoard, { ScoreProps } from "../../components/RoundScoreBoard";
// import Draw from "../../components/Draw";

// const ZeroOne = () => {
//   const maxNum = Number(useParams().id);
//   if (!(maxNum === 301 || maxNum === 501 || maxNum === 701)) {
//     throw new Error("max_numは301、501、701のいずれかの値である必要があります");
//   }

//   const searchParams = useSearchParams();
//   const players = Number(searchParams.get("players"));

//   // RoundScoreの状態を保持
//   const [roundScore, setRoundScore] = useState<ScoreProps["RoundScore"]>([]);
//   const [playerScores, setPlayerScores] = useState<number[]>(Array(players).fill(maxNum));
//   const [currentPlayer, setCurrentPlayer] = useState<number>(0);

//   // 子コンポーネントから受け取る関数
//   const handleRelease = (coords: { num: number; mul: number }) => {
//     if (roundScore.length < 3) {
//       const score = coords.num * coords.mul;

//       // RoundScoreの更新
//       setRoundScore((prev) => [...prev, coords]);

//       // プレイヤーのスコアを更新
//       setPlayerScores((prevScores) => {
//         const newScores = [...prevScores];
//         newScores[currentPlayer] -= score;
//         return newScores;
//       });
//     }
//   };

//   // 次のラウンドへ進む
//   const handleNextRound = () => {
//     if (roundScore.length === 3) {
//       setRoundScore([]); // RoundScoreをリセット

//       // 次のプレイヤーに進む
//       setCurrentPlayer((prev) => (prev + 1) % players);
//     }
//   };

//   return (
//     <section>
//       <ModeTitle modeName={String(maxNum)} />
//       <div className="flex">
//         {/* Drawコンポーネント */}
//         <div className="w-1/4 flex justify-center items-center">
//           <Draw onRelease={handleRelease} />
//         </div>

//         {/* ダーツボード */}
//         <div className="w-1/2 py-5">
//           <DartsBoard />
//         </div>

//         {/* スコアボード */}
//         <div className="w-1/4 flex justify-center items-center">
//           <div>
//             <RoundScoreBoard RoundScore={roundScore} />
//             {/* 次のラウンドに進むボタン */}
//             {roundScore.length === 3 && (
//               <button onClick={handleNextRound}>
//                 <img className="m-auto" src="/images/next_button.png" alt="Next Round" />
//               </button>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* プレイヤーごとのスコアボード */}
//       <PlayerScoreBoards playerScores={playerScores} currentPlayer={currentPlayer} />
//     </section>
//   );
// };

// export default ZeroOne;







// 0以下になったら勝ち

// "use client";
// import React, { useState } from "react";
// import { useParams, useSearchParams } from "next/navigation";
// import PlayerScoreBoards from "../../components/PlayerScoreBoards";
// import ModeTitle from "../../components/ModeTitle";
// import DartsBoard from "../../components/DartsBoard";
// import RoundScoreBoard, { ScoreProps } from "../../components/RoundScoreBoard";
// import Draw from "../../components/Draw";

// const ZeroOne = () => {
//   const maxNum = Number(useParams().id);
//   if (!(maxNum === 301 || maxNum === 501 || maxNum === 701)) {
//     throw new Error("max_numは301、501、701のいずれかの値である必要があります");
//   }

//   const searchParams = useSearchParams();
//   const players = Number(searchParams.get("players"));

//   // State
//   const [roundScore, setRoundScore] = useState<ScoreProps["RoundScore"]>([]);
//   const [playerScores, setPlayerScores] = useState<number[]>(Array(players).fill(maxNum));
//   const [currentPlayer, setCurrentPlayer] = useState<number>(0);
//   const [isGameOver, setIsGameOver] = useState<boolean>(false);

//   // 子コンポーネントから受け取る関数
//   const handleRelease = (coords: { num: number; mul: number }) => {
//     if (roundScore.length < 3 && !isGameOver) {
//       const score = coords.num * coords.mul;

//       // スコアの更新と勝利判定
//       setPlayerScores((prevScores) => {
//         const newScores = [...prevScores];
//         const updatedScore = newScores[currentPlayer] - score;
        
//         if (updatedScore <= 0) {
//           // 勝利判定
//           newScores[currentPlayer] = 0;
//           setIsGameOver(true);
//           alert(`Player ${currentPlayer + 1} が勝利しました！`);
//         } else {
//           newScores[currentPlayer] = updatedScore;
//         }

//         return newScores;
//       });

//       // RoundScoreの更新
//       setRoundScore((prev) => [...prev, coords]);
//     }
//   };

//   // 次のラウンドへ進む
//   const handleNextRound = () => {
//     if (roundScore.length === 3 && !isGameOver) {
//       setRoundScore([]); // RoundScoreをリセット
//       setCurrentPlayer((prev) => (prev + 1) % players); // 次のプレイヤーに進む
//     }
//   };

//   return (
//     <section>
//       <ModeTitle modeName={String(maxNum)} />
//       <div className="flex">
//         {/* Drawコンポーネント */}
//         <div className="w-1/4 flex justify-center items-center">
//           <Draw onRelease={handleRelease} />
//         </div>

//         {/* ダーツボード */}
//         <div className="w-1/2 py-5">
//           <DartsBoard />
//         </div>

//         {/* スコアボード */}
//         <div className="w-1/4 flex justify-center items-center">
//           <div>
//             <RoundScoreBoard RoundScore={roundScore} />
//             {/* 次のラウンドに進むボタン */}
//             {roundScore.length === 3 && !isGameOver && (
//               <button onClick={handleNextRound}>
//                 <img className="m-auto" src="/images/next_button.png" alt="Next Round" />
//               </button>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* プレイヤーごとのスコアボード */}
//       <PlayerScoreBoards playerScores={playerScores} currentPlayer={currentPlayer} />
//     </section>
//   );
// };

// export default ZeroOne;

"use client";
import React, { useState } from "react";
import { useParams, useSearchParams } from "next/navigation";
import PlayerScoreBoards from "../../components/PlayerScoreBoards";
import ModeTitle from "../../components/ModeTitle";
import DartsBoard from "../../components/DartsBoard";
import RoundScoreBoard, { ScoreProps } from "../../components/RoundScoreBoard";
import Draw from "../../components/Draw";

const MAX_ROUNDS = 20; // 01ゲームの最大ラウンド数

const ZeroOne = () => {
  const maxNum = Number(useParams().id);
  if (!(maxNum === 301 || maxNum === 501 || maxNum === 701)) {
    throw new Error("max_numは301、501、701のいずれかの値である必要があります");
  }

  const searchParams = useSearchParams();
  const players = Number(searchParams.get("players"));

  // State
  const [roundScore, setRoundScore] = useState<ScoreProps["RoundScore"]>([]);
  const [playerScores, setPlayerScores] = useState<number[]>(Array(players).fill(maxNum));
  const [currentPlayer, setCurrentPlayer] = useState<number>(0);
  const [currentRound, setCurrentRound] = useState<number>(1); // 現在のラウンド
  const [isGameOver, setIsGameOver] = useState<boolean>(false);

  // 子コンポーネントから受け取る関数
  const handleRelease = (coords: { num: number; mul: number }) => {
    if (roundScore.length < 3 && !isGameOver) {
      const score = coords.num * coords.mul;

      // スコアの更新と勝利判定
      setPlayerScores((prevScores) => {
        const newScores = [...prevScores];
        const updatedScore = newScores[currentPlayer] - score;

        if (updatedScore <= 0) {
          newScores[currentPlayer] = 0;
          setIsGameOver(true);
          alert(`Player ${currentPlayer + 1} が勝利しました！`);
        } else {
          newScores[currentPlayer] = updatedScore;
        }

        return newScores;
      });

      // RoundScoreの更新
      setRoundScore((prev) => [...prev, coords]);
    }
  };

  // 次のラウンドへ進む
  const handleNextRound = () => {
    if (roundScore.length === 3 && !isGameOver) {
      setRoundScore([]); // RoundScoreをリセット

      if (currentRound >= MAX_ROUNDS) {
        // 最大ラウンドに達した場合
        setIsGameOver(true);
        alert("ゲーム終了！最大ラウンドに達しました。");
      } else {
        // 次のプレイヤーに進む or 次のラウンドへ
        setCurrentPlayer((prev) => (prev + 1) % players);
        if (currentPlayer === players - 1) {
          setCurrentRound((prev) => prev + 1); // 全員投げ終わったらラウンドを進める
        }
      }
    }
  };

  return (
    <section>
      <ModeTitle modeName={String(maxNum)} currentRound={currentRound} maxRound={MAX_ROUNDS} />
      <div className="text-center my-2">
      </div>
      <div className="flex">
        {/* Drawコンポーネント */}
        <div className="w-1/4 flex justify-center items-center">
          <Draw onRelease={handleRelease} />
        </div>

        {/* ダーツボード */}
        <div className="w-1/2 py-5">
          <DartsBoard />
        </div>

        {/* スコアボード */}
        <div className="w-1/4 flex justify-center items-center">
          <div>
            <RoundScoreBoard RoundScore={roundScore} />
            {/* 次のラウンドに進むボタン */}
            {roundScore.length === 3 && !isGameOver && (
              <button onClick={handleNextRound}>
                <img className="m-auto" src="/images/next_button.png" alt="Next Round" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* プレイヤーごとのスコアボード */}
      <PlayerScoreBoards playerScores={playerScores} currentPlayer={currentPlayer} />
    </section>
  );
};

export default ZeroOne;








