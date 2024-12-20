import React from "react";

// throwScoreの型を定義
type ThrowScore = {
  num: number;
  mul: number;
};

// ScorePropsインターフェースでRoundScoreを定義
export type ScoreProps = {
  RoundScore: [ThrowScore, ThrowScore, ThrowScore];
};

const RoundScoreBoard = ({ RoundScore }: ScoreProps) => {
  return (
    <section>
      {RoundScore.map((score, index) => {
        let multiplierText = "";
        switch (score.mul) {
          case 0:
            multiplierText = `MISS`;
          case 1:
            if (score.num == 25) {
              multiplierText = "BULL";
            } else {
              multiplierText = `SINGLE ${score.num}`;
            }
            break;
          case 2:
            if (score.num == 25) {
              multiplierText = "D-BULL";
            } else {
              multiplierText = `DOUBLE ${score.num}`;
            }
            break;
          case 3:
            multiplierText = `TRIPLE ${score.num}`;
            break;
          default:
            multiplierText = ``;
        }

        return (
          <div key={index}>
            <h3
              style={{ backgroundColor: "#444444" }}
              className="text-center text-3xl border-2 border-gray-800 px-16 py-4 my-3"
            >
              {multiplierText}
            </h3>
          </div>
        );
      })}
    </section>
  );
};

export default RoundScoreBoard;
