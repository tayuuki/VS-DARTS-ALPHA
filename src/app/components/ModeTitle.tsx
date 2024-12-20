// import React from "react";

// // モードタイトルコンポーネントの定義
// interface ModeTitleProps {
//   modeName: string; // maxNumの型を指定
// }

// const ModeTitle: React.FC<ModeTitleProps> = ({ modeName }) => {
//   let currentRound = 1;
//   const maxRound = 20;
//   return (
//     <section className="fixed top-0 left-0 w-1/4">
//       <div className="bg-red-600 py-1 px-5">
//         <h1 className="text-white text-center text-7xl">{modeName}</h1>
//       </div>
//       <div className="bg-gray-600 p-2">
//         <h2 className="text-white text-center text-2xl">
//           {currentRound} / {maxRound} ROUND
//         </h2>
//       </div>
//     </section>
//   );
// };

// export default ModeTitle;


import React from "react";

// モードタイトルコンポーネントの定義
interface ModeTitleProps {
  modeName: string; // モード名（例: COUNT UP）
  currentRound: number; // 現在のラウンド数
  maxRound: number; // 最大ラウンド数
}

const ModeTitle: React.FC<ModeTitleProps> = ({ modeName, currentRound, maxRound }) => {
  return (
    <section className="fixed top-0 left-0 w-1/4">
      <div className="bg-red-600 py-1 px-5">
        <h1 className="text-white text-center text-7xl">{modeName}</h1>
      </div>
      <div className="bg-gray-600 p-2">
        <h2 className="text-white text-center text-2xl">
          {currentRound} / {maxRound} ROUND
        </h2>
      </div>
    </section>
  );
};

export default ModeTitle;
