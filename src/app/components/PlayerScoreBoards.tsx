// import React from 'react'
// import PlayerScoreBoard from './PlayerScoreBoard';

// const PlayerScoreBoards = () => {
//   return (
//     <section className="flex justify-center bg-black pt-5 px-1">
//       <PlayerScoreBoard />
//       {/* <PlayerScoreBoard />
//       <PlayerScoreBoard />
//       <PlayerScoreBoard /> */}

//     </section>
//   );
// };

// export default PlayerScoreBoards;

import React from "react";
import PlayerScoreBoard from "./PlayerScoreBoard";

interface PlayerScoreBoardsProps {
  playerScores: number[];
  currentPlayer: number;
}

const PlayerScoreBoards: React.FC<PlayerScoreBoardsProps> = ({ playerScores, currentPlayer }) => {
  return (
    <section className="flex justify-center bg-black pt-5 px-1">
      {playerScores.map((score, index) => (
        <PlayerScoreBoard
          key={index}
          playerName={`Player ${index + 1}`}
          score={score}
          isActive={currentPlayer === index}
        />
      ))}
    </section>
  );
};

export default PlayerScoreBoards;
