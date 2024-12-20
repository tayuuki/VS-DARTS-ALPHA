"use client";
import React from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import PlayerScoreBoards from "../../components/PlayerScoreBoards";
import ModeTitle from "../../components/ModeTitle";
import DartsBoard from "../../components/DartsBoard";
import RoundScoreBoard from "../../components/RoundScoreBoard";
import { ScoreProps } from "../../components/RoundScoreBoard";
import DisplayChangeButton from "../../components/DiplayChangeButton";

const exampleScore: ScoreProps = {
  RoundScore: [
    { num: 20, mul: 3 },
    { num: 5, mul: 2 },
    { num: 18, mul: 1 },
  ],
};

const Cricket = () => {
  const modeName = "CRICKET";

  return (
    <section className="">
      <ModeTitle modeName={String(modeName)} />
      <div className="flex">
        <div className="w-1/4 flex justify-center items-center"></div>

        <div className="w-1/2 flex justify-center py-5">
          <CricketMarksBord />
        </div>

        <div className="w-1/4 flex justify-center items-center">
          <div>
          <RoundScoreBoard RoundScore={exampleScore.RoundScore} />
          <DisplayChangeButton />
          </div>
        </div>
      </div>
      <PlayerScoreBoards />
    </section>
  );
};

export default Cricket;

const CricketMarksBord = () => {
  return (
    <section className="flex">
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
