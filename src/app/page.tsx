"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [gameMode, setGameMode] = useState("301");
  const [playerCount, setPlayerCount] = useState("1");
  const router = useRouter();

  const handleStart = () => {
    // 選択したゲームモードに基づいてルートを決定
    let route = "/";
    switch (gameMode) {
      case "301":
        route = `/zero-one/301?players=${playerCount}`;
        break;
      case "501":
        route = `/zero-one/501?players=${playerCount}`;
        break;
      case "701":
        route = `/zero-one/701?players=${playerCount}`;
        break;
      case "Cricket":
        route = `/cricket/board?players=${playerCount}`;
        break;
      case "Count-Up":
        route = `/count-up?players=${playerCount}`;
        break;
      default:
        route = "/";
    }
    router.push(route);
  };

  const gameModes = ["301", "501", "701", "Cricket", "Count-Up"];
  const playerCounts = ["1", "2", "3", "4"];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-8">
      <h1 className="text-3xl font-bold mb-4">VS-DARTS αへようこそ</h1>

      {/* ゲームモード選択 */}
      <div>
        <h2 className="text-xl font-semibold mb-2">ゲームモード</h2>
        <div className="flex space-x-4">
          {gameModes.map((mode) => (
            <div
              key={mode}
              onClick={() => setGameMode(mode)}
              className={`w-32 h-32 flex items-center justify-center border-2 rounded-lg cursor-pointer 
                ${gameMode === mode ? "border-blue-500 bg-blue-100" : "border-gray-300 bg-white"}
              `}
            >
              <span className={`text-lg font-semibold ${gameMode === mode ? "text-blue-500" : "text-gray-700"}`}>
                {mode}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* プレイヤー人数選択 */}
      <div>
        <h2 className="text-xl font-semibold mb-2">プレイヤーの人数</h2>
        <div className="flex space-x-4">
          {playerCounts.map((count) => (
            <div
              key={count}
              onClick={() => setPlayerCount(count)}
              className={`w-20 h-20 flex items-center justify-center border-2 rounded-lg cursor-pointer 
                ${playerCount === count ? "border-blue-500 bg-blue-100" : "border-gray-300 bg-white"}
              `}
            >
              <span className={`text-lg font-semibold ${playerCount === count ? "text-blue-500" : "text-gray-700"}`}>
                {count}人
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* スタートボタン */}
      <button
        onClick={handleStart}
        className="px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
      >
        スタート
      </button>
    </div>
  );
}
