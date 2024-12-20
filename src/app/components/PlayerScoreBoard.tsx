// import React from "react";

// const PlayerScoreBoard = () => {
//   return (
//     <section className="">
//       <hr className="mx-3 border-2 border-red-500" />
//       <div className="flex items-center justify-center p-5">
//         <img className="" src="/images/player-icon.png" />
//         <div className="flex justify-center mx-5 px-6 my-2 bg-gray-500">
//           <p className="my-auto">Player 1</p>
//         </div>
//         <h2 className="font-bold text-6xl">701</h2>
//       </div>
//     </section>
//   );
// };

// export default PlayerScoreBoard;


import React from "react";

interface PlayerScoreBoardProps {
  playerName: string;
  score: number;
  isActive: boolean;
}

const PlayerScoreBoard: React.FC<PlayerScoreBoardProps> = ({ playerName, score, isActive }) => {
  return (
    <section className={`w-1/4 ${isActive ? "bg-gray-700" : ""}`}>
      <hr className="mx-3 border-2 border-red-500" />
      <div className="flex items-center justify-center p-5">
        <img src="/images/player-icon.png" alt="Player Icon" />
        <div className="flex justify-center mx-5 px-6 my-2 bg-gray-500">
          <p className="my-auto">{playerName}</p>
        </div>
        <h2 className="font-bold text-6xl">{score}</h2>
      </div>
    </section>
  );
};

export default PlayerScoreBoard;
