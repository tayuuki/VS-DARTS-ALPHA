// "use client";

// import React, { useEffect, useRef, useState } from "react";
// import { FilesetResolver, HandLandmarker } from "@mediapipe/tasks-vision";

// const Draw: React.FC = () => {
//   const videoRef = useRef<HTMLVideoElement>(null);
//   const canvasRef = useRef<HTMLCanvasElement>(null);
//   const [indexFingerCoords, setIndexFingerCoords] = useState<{ x: number; y: number } | null>(null);
//   const [thumbCoords, setThumbCoords] = useState<{ x: number; y: number } | null>(null);
//   const [isTracking, setIsTracking] = useState(false);

//   const prevDistanceRef = useRef<number | null>(null); // 前フレームの指同士の距離を記録

//   useEffect(() => {
//     let handLandmarker: HandLandmarker | null = null;
//     let animationFrameId: number;

//     const initializeHandLandmarker = async () => {
//       const vision = await FilesetResolver.forVisionTasks("https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision/wasm");

//       handLandmarker = await HandLandmarker.createFromOptions(vision, {
//         baseOptions: {
//           modelAssetPath: "https://storage.googleapis.com/mediapipe-models/hand_landmarker/hand_landmarker/float16/latest/hand_landmarker.task",
//         },
//         runningMode: "VIDEO",
//         numHands: 1,
//       });

//       startVideoProcessing();
//     };

//     const startVideoProcessing = async () => {
//       const stream = await navigator.mediaDevices.getUserMedia({ video: true });
//       videoRef.current!.srcObject = stream;
//       await videoRef.current!.play();

//       const processVideo = async () => {
//         if (videoRef.current && videoRef.current.videoWidth > 0 && videoRef.current.videoHeight > 0 && handLandmarker) {
//           const result = await handLandmarker.detectForVideo(videoRef.current, performance.now());

//           if (result.landmarks && result.landmarks.length > 0) {
//             const landmarks = result.landmarks[0];
//             const indexFinger = landmarks[8]; // 人差し指
//             const thumb = landmarks[4]; // 親指

//             setIndexFingerCoords({ x: indexFinger.x, y: indexFinger.y });
//             setThumbCoords({ x: thumb.x, y: thumb.y });
//             drawHandSkeleton(landmarks);

//             // 人差し指と親指の距離を計算
//             const currentDistance = Math.sqrt(
//               Math.pow(indexFinger.x - thumb.x, 2) + Math.pow(indexFinger.y - thumb.y, 2)
//             );

//             // 離れた瞬間を検出
//             if (prevDistanceRef.current !== null && prevDistanceRef.current < 0.1 && currentDistance >= 0.1) {
//               console.log(
//                 `指が離れました！人差し指の座標: x=${indexFinger.x.toFixed(3)}, y=${indexFinger.y.toFixed(3)}`
//               );
//             }

//             prevDistanceRef.current = currentDistance; // 現在の距離を保存
//             setIsTracking(true);
//           } else {
//             setIndexFingerCoords(null);
//             setThumbCoords(null);
//             setIsTracking(false);
//             prevDistanceRef.current = null; // 手が検出されなかった場合、リセット
//           }
//         }
//         animationFrameId = requestAnimationFrame(processVideo);
//       };

//       processVideo();
//     };

//     const drawHandSkeleton = (landmarks: any[]) => {
//       const canvas = canvasRef.current;
//       if (!canvas) return;
//       const canvasCtx = canvas.getContext("2d");
//       if (!canvasCtx) return;

//       canvasCtx.clearRect(0, 0, canvas.width, canvas.height);
//       canvasCtx.drawImage(videoRef.current!, 0, 0, canvas.width, canvas.height);

//       const connections = [
//         [0, 1], [1, 2], [2, 3], [3, 4],
//         [0, 5], [5, 6], [6, 7], [7, 8],
//         [0, 9], [9, 10], [10, 11], [11, 12],
//         [0, 13], [13, 14], [14, 15], [15, 16],
//         [0, 17], [17, 18], [18, 19], [19, 20]
//       ];

//       // 親指と人差し指の距離で色を変更
//       const color = prevDistanceRef.current && prevDistanceRef.current < 0.1 ? "rgba(255, 0, 0, 0.6)" : "rgba(0, 255, 0, 0.6)";

//       connections.forEach(([startIdx, endIdx]) => {
//         const start = landmarks[startIdx];
//         const end = landmarks[endIdx];
//         if (start && end) {
//           canvasCtx.beginPath();
//           canvasCtx.moveTo(start.x * canvas.width, start.y * canvas.height);
//           canvasCtx.lineTo(end.x * canvas.width, end.y * canvas.height);
//           canvasCtx.strokeStyle = color;
//           canvasCtx.lineWidth = 2;
//           canvasCtx.stroke();
//         }
//       });
//     };

//     initializeHandLandmarker();

//     return () => {
//       if (handLandmarker) handLandmarker.close();
//       if (videoRef.current && videoRef.current.srcObject) {
//         const tracks = (videoRef.current.srcObject as MediaStream).getTracks();
//         tracks.forEach((track) => track.stop());
//       }
//       cancelAnimationFrame(animationFrameId);
//     };
//   }, []);

//   return (
//     <div style={{ position: "relative", width: "640px", height: "480px" }} className="m-auto">
//       <video ref={videoRef} style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 1 }} autoPlay playsInline />
//       {isTracking && (
//         <canvas ref={canvasRef} width={640} height={480} style={{ position: "absolute", top: 0, left: 0, zIndex: 2, pointerEvents: "none" }} />
//       )}
//       <p>
//         {indexFingerCoords
//           ? `人差し指の座標: x=${indexFingerCoords.x.toFixed(3)}, y=${indexFingerCoords.y.toFixed(3)}`
//           : "人差し指が検出されていません"}
//       </p>
//     </div>
//   );
// };

// export default Draw;











// "use client";

// import React, { useEffect, useRef, useState } from "react";
// import { FilesetResolver, HandLandmarker } from "@mediapipe/tasks-vision";

// const Draw: React.FC = () => {
//   const videoRef = useRef<HTMLVideoElement>(null);
//   const canvasRef = useRef<HTMLCanvasElement>(null);
//   const prevDistanceRef = useRef<number | null>(null); // 前フレームの距離を記録
//   const [indexFingerCoords, setIndexFingerCoords] = useState<{ x: number; y: number } | null>(null);
//   const [thumbCoords, setThumbCoords] = useState<{ x: number; y: number } | null>(null);
//   const [isTracking, setIsTracking] = useState(false);

//   useEffect(() => {
//     let handLandmarker: HandLandmarker | null = null;
//     let animationFrameId: number;

//     const initializeHandLandmarker = async () => {
//       const vision = await FilesetResolver.forVisionTasks(
//         "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision/wasm"
//       );

//       handLandmarker = await HandLandmarker.createFromOptions(vision, {
//         baseOptions: {
//           modelAssetPath:
//             "https://storage.googleapis.com/mediapipe-models/hand_landmarker/hand_landmarker/float16/latest/hand_landmarker.task",
//         },
//         runningMode: "VIDEO",
//         numHands: 1,
//       });

//       startVideoProcessing();
//     };

//     const startVideoProcessing = async () => {
//       const stream = await navigator.mediaDevices.getUserMedia({ video: true });
//       videoRef.current!.srcObject = stream;
//       await videoRef.current!.play();

//       const processVideo = async () => {
//         if (
//           videoRef.current &&
//           videoRef.current.videoWidth > 0 &&
//           videoRef.current.videoHeight > 0 &&
//           handLandmarker
//         ) {
//           const result = await handLandmarker.detectForVideo(
//             videoRef.current,
//             performance.now()
//           );

//           if (result.landmarks && result.landmarks.length > 0) {
//             const landmarks = result.landmarks[0];
//             const indexFinger = landmarks[8]; // 人差し指の座標
//             const thumb = landmarks[4]; // 親指の座標

//             setIndexFingerCoords({ x: indexFinger.x, y: indexFinger.y });
//             setThumbCoords({ x: thumb.x, y: thumb.y });
//             drawHandSkeleton(landmarks);

//             setIsTracking(true);

//             // 人差し指と親指の距離を計算
//             const currentDistance = Math.sqrt(
//               Math.pow(indexFinger.x - thumb.x, 2) +
//                 Math.pow(indexFinger.y - thumb.y, 2)
//             );

//             // 前フレームの距離と比較
//             if (prevDistanceRef.current !== null) {
//               if (currentDistance < 0.1 && prevDistanceRef.current >= 0.1) {
//                 // くっついた瞬間
//                 console.log("くっついた! 人差し指の座標:", {
//                   x: indexFinger.x.toFixed(3),
//                   y: indexFinger.y.toFixed(3),
//                 });
//               } else if (currentDistance >= 0.1 && prevDistanceRef.current < 0.1) {
//                 // 離れた瞬間
//                 console.log("離れた! 人差し指の座標:", {
//                   x: indexFinger.x.toFixed(3),
//                   y: indexFinger.y.toFixed(3),
//                 });
//               }
//             }
//             prevDistanceRef.current = currentDistance;
//           } else {
//             setIndexFingerCoords(null);
//             setThumbCoords(null);
//             setIsTracking(false);
//           }
//         }
//         animationFrameId = requestAnimationFrame(processVideo);
//       };

//       processVideo();
//     };

//     const drawHandSkeleton = (landmarks: any[]) => {
//       const canvas = canvasRef.current;
//       if (!canvas) return;
//       const canvasCtx = canvas.getContext("2d");
//       if (!canvasCtx) return;

//       canvasCtx.clearRect(0, 0, canvas.width, canvas.height);
//       canvasCtx.drawImage(videoRef.current!, 0, 0, canvas.width, canvas.height);

//       const connections = [
//         [0, 1],
//         [1, 2],
//         [2, 3],
//         [3, 4],
//         [0, 5],
//         [5, 6],
//         [6, 7],
//         [7, 8],
//         [0, 9],
//         [9, 10],
//         [10, 11],
//         [11, 12],
//         [0, 13],
//         [13, 14],
//         [14, 15],
//         [15, 16],
//         [0, 17],
//         [17, 18],
//         [18, 19],
//         [19, 20],
//       ];

//       connections.forEach(([startIdx, endIdx]) => {
//         const start = landmarks[startIdx];
//         const end = landmarks[endIdx];
//         if (start && end) {
//           canvasCtx.beginPath();
//           canvasCtx.moveTo(start.x * canvas.width, start.y * canvas.height);
//           canvasCtx.lineTo(end.x * canvas.width, end.y * canvas.height);
//           canvasCtx.strokeStyle = "rgba(0, 255, 0, 0.6)";
//           canvasCtx.lineWidth = 2;
//           canvasCtx.stroke();
//         }
//       });
//     };

//     initializeHandLandmarker();

//     return () => {
//       if (handLandmarker) handLandmarker.close();
//       if (videoRef.current && videoRef.current.srcObject) {
//         const tracks = (videoRef.current.srcObject as MediaStream).getTracks();
//         tracks.forEach((track) => track.stop());
//       }
//       cancelAnimationFrame(animationFrameId);
//     };
//   }, []);

//   return (
//     <div style={{ position: "relative", width: "640px", height: "480px" }} className="m-auto">
//       <video
//         ref={videoRef}
//         style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 1 }}
//         autoPlay
//         playsInline
//       />
//       {isTracking && (
//         <canvas
//           ref={canvasRef}
//           width={640}
//           height={480}
//           style={{ position: "absolute", top: 0, left: 0, zIndex: 2, pointerEvents: "none" }}
//         />
//       )}
//     </div>
//   );
// };

// export default Draw;









// "use client";

// import React, { useEffect, useRef, useState } from "react";
// import { FilesetResolver, HandLandmarker } from "@mediapipe/tasks-vision";

// interface DrawProps {
//   onRelease: (coords: { x: number; y: number }) => void; // 座標を渡す関数の型
// }

// const Draw: React.FC<DrawProps> = ({ onRelease }) => {
//   const videoRef = useRef<HTMLVideoElement>(null);
//   const canvasRef = useRef<HTMLCanvasElement>(null);
//   const prevDistanceRef = useRef<number | null>(null);

//   useEffect(() => {
//     let handLandmarker: HandLandmarker | null = null;
//     let animationFrameId: number;

//     const initializeHandLandmarker = async () => {
//       const vision = await FilesetResolver.forVisionTasks(
//         "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision/wasm"
//       );

//       handLandmarker = await HandLandmarker.createFromOptions(vision, {
//         baseOptions: {
//           modelAssetPath:
//             "https://storage.googleapis.com/mediapipe-models/hand_landmarker/hand_landmarker/float16/latest/hand_landmarker.task",
//         },
//         runningMode: "VIDEO",
//         numHands: 1,
//       });

//       startVideoProcessing();
//     };

//     const startVideoProcessing = async () => {
//       const stream = await navigator.mediaDevices.getUserMedia({ video: true });
//       videoRef.current!.srcObject = stream;
//       await videoRef.current!.play();

//       const processVideo = async () => {
//         if (
//           videoRef.current &&
//           videoRef.current.videoWidth > 0 &&
//           videoRef.current.videoHeight > 0 &&
//           handLandmarker
//         ) {
//           const result = await handLandmarker.detectForVideo(
//             videoRef.current,
//             performance.now()
//           );

//           if (result.landmarks && result.landmarks.length > 0) {
//             const landmarks = result.landmarks[0];
//             const indexFinger = landmarks[8]; // 人差し指
//             const thumb = landmarks[4]; // 親指

//             // 人差し指と親指の距離を計算
//             const currentDistance = Math.sqrt(
//               Math.pow(indexFinger.x - thumb.x, 2) +
//                 Math.pow(indexFinger.y - thumb.y, 2)
//             );

//             if (prevDistanceRef.current !== null) {
//               if (currentDistance >= 0.1 && prevDistanceRef.current < 0.1) {
//                 // 離れた瞬間の座標を親コンポーネントに渡す
//                 onRelease({ x: indexFinger.x, y: indexFinger.y });
//               }
//             }
//             prevDistanceRef.current = currentDistance;
//           }
//         }
//         animationFrameId = requestAnimationFrame(processVideo);
//       };

//       processVideo();
//     };

//     initializeHandLandmarker();

//     return () => {
//       if (handLandmarker) handLandmarker.close();
//       if (videoRef.current?.srcObject) {
//         (videoRef.current.srcObject as MediaStream)
//           .getTracks()
//           .forEach((track) => track.stop());
//       }
//       cancelAnimationFrame(animationFrameId);
//     };
//   }, [onRelease]);

//   return (
//     <div style={{ position: "relative", width: "640px", height: "480px" }} className="m-auto">
//       <video
//         ref={videoRef}
//         style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 1 }}
//         autoPlay
//         playsInline
//       />
//       <canvas
//         ref={canvasRef}
//         width={640}
//         height={480}
//         style={{ position: "absolute", top: 0, left: 0, zIndex: 2, pointerEvents: "none" }}
//       />
//     </div>
//   );
// };

// export default Draw;












// "use client";

// import React, { useEffect, useRef, useState } from "react";
// import { FilesetResolver, HandLandmarker } from "@mediapipe/tasks-vision";

// interface DrawProps {
//   onRelease: (result: { num: number; mul: number }) => void;
// }

// const Draw: React.FC<DrawProps> = ({ onRelease }) => {
//   const videoRef = useRef<HTMLVideoElement>(null);
//   const canvasRef = useRef<HTMLCanvasElement>(null);
//   const prevDistanceRef = useRef<number | null>(null);
//   const [isTracking, setIsTracking] = useState(false);

//   useEffect(() => {
//     let handLandmarker: HandLandmarker | null = null;
//     let animationFrameId: number;

//     const initializeHandLandmarker = async () => {
//       const vision = await FilesetResolver.forVisionTasks(
//         "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision/wasm"
//       );

//       handLandmarker = await HandLandmarker.createFromOptions(vision, {
//         baseOptions: {
//           modelAssetPath:
//             "https://storage.googleapis.com/mediapipe-models/hand_landmarker/hand_landmarker/float16/latest/hand_landmarker.task",
//         },
//         runningMode: "VIDEO",
//         numHands: 1,
//       });

//       startVideoProcessing();
//     };

//     const startVideoProcessing = async () => {
//       const stream = await navigator.mediaDevices.getUserMedia({ video: true });
//       videoRef.current!.srcObject = stream;
//       await videoRef.current!.play();

//       const processVideo = async () => {
//         if (
//           videoRef.current &&
//           videoRef.current.videoWidth > 0 &&
//           videoRef.current.videoHeight > 0 &&
//           handLandmarker
//         ) {
//           const result = await handLandmarker.detectForVideo(
//             videoRef.current,
//             performance.now()
//           );

//           if (result.landmarks && result.landmarks.length > 0) {
//             const landmarks = result.landmarks[0];
//             const indexFinger = landmarks[8]; // 人差し指の座標
//             const thumb = landmarks[4]; // 親指の座標

//             setIsTracking(true);

//             // 人差し指と親指の距離を計算
//             const currentDistance = Math.sqrt(
//               Math.pow(indexFinger.x - thumb.x, 2) +
//                 Math.pow(indexFinger.y - thumb.y, 2)
//             );

//             // 指を離した瞬間
//             if (prevDistanceRef.current !== null) {
//               if (currentDistance >= 0.1 && prevDistanceRef.current < 0.1) {
//                 const result = getDartResult(indexFinger.x, indexFinger.y);
//                 onRelease(result);
//               }
//             }
//             prevDistanceRef.current = currentDistance;
//           } else {
//             setIsTracking(false);
//           }
//         }
//         animationFrameId = requestAnimationFrame(processVideo);
//       };

//       processVideo();
//     };

//     const getDartResult = (x: number, y: number) => {
//       // x軸とy軸を反転
//       const flippedX = 1 - x;
//       const flippedY = 1 - y;
    
//       // 中心座標を (0.5, 0.5) とし、距離と角度で判定
//       const centerX = 0.5;
//       const centerY = 0.5;
//       const dx = flippedX - centerX; // x座標の反転を適用
//       const dy = flippedY - centerY; // y座標の反転を適用
    
//       const distance = Math.sqrt(dx * dx + dy * dy); // 中心からの距離
//       const angle = Math.atan2(dy, dx) * (180 / Math.PI) + 180; // 角度 (0~360)
    
//       // 範囲ごとに判定
//       if (distance < 0.05) return { num: 50, mul: 4 }; // BULL
//       if (distance < 0.1) return { num: 25, mul: 1 }; // Outer BULL
//       if (distance > 0.5) return { num: 0, mul: 0 }; // 枠外
    
//       // 角度に基づいて1~20のエリアを判定
//       const segments = [6, 13, 10, 15, 2, 17, 3, 19, 7, 16, 8, 11, 14, 9, 12, 5, 20, 1, 18, 4];
//       const index = Math.floor(((angle + 9) % 360) / 18); // 18度ごとに分割
    
//       const num = segments[index];
    
//       // 距離でシングル、ダブル、トリプル判定
//       if (distance < 0.2) return { num, mul: 1 }; // シングル
//       if (distance < 0.3) return { num, mul: 3 }; // トリプル
//       if (distance < 0.4) return { num, mul: 1 }; // シングル
//       if (distance < 0.5) return { num, mul: 2 }; // ダブル
    
//       return { num: 0, mul: 0 }; // 枠外
//     };
    
    

//     initializeHandLandmarker();

//     return () => {
//       if (handLandmarker) handLandmarker.close();
//       if (videoRef.current && videoRef.current.srcObject) {
//         const tracks = (videoRef.current.srcObject as MediaStream).getTracks();
//         tracks.forEach((track) => track.stop());
//       }
//       cancelAnimationFrame(animationFrameId);
//     };
//   }, [onRelease]);

//   return (
//     <div style={{ position: "relative", width: "640px", height: "480px" }} className="m-auto">
//       <video
//         ref={videoRef}
//         style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
//         autoPlay
//         playsInline
//       />
//       {isTracking && (
//         <canvas
//           ref={canvasRef}
//           width={640}
//           height={480}
//           style={{ position: "absolute", top: 0, left: 0, pointerEvents: "none" }}
//         />
//       )}
//     </div>
//   );
// };

// export default Draw;







"use client";

import React, { useEffect, useRef, useState } from "react";
import { FilesetResolver, HandLandmarker } from "@mediapipe/tasks-vision";

interface DrawProps {
  onRelease: (result: { num: number; mul: number }) => void;
}

const Draw: React.FC<DrawProps> = ({ onRelease }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const prevDistanceRef = useRef<number | null>(null); // 前フレームの距離を記録
  const [isTracking, setIsTracking] = useState(false); // 手のトラッキング状態
  const [isFingersTouching, setIsFingersTouching] = useState(false); // 指がくっついているかの状態

  useEffect(() => {
    let handLandmarker: HandLandmarker | null = null;
    let animationFrameId: number;

    const initializeHandLandmarker = async () => {
      const vision = await FilesetResolver.forVisionTasks(
        "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision/wasm"
      );

      handLandmarker = await HandLandmarker.createFromOptions(vision, {
        baseOptions: {
          modelAssetPath:
            "https://storage.googleapis.com/mediapipe-models/hand_landmarker/hand_landmarker/float16/latest/hand_landmarker.task",
        },
        runningMode: "VIDEO",
        numHands: 1,
      });

      startVideoProcessing();
    };

    const startVideoProcessing = async () => {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      videoRef.current!.srcObject = stream;
      await videoRef.current!.play();

      const processVideo = async () => {
        if (
          videoRef.current &&
          videoRef.current.videoWidth > 0 &&
          videoRef.current.videoHeight > 0 &&
          handLandmarker
        ) {
          const result = await handLandmarker.detectForVideo(
            videoRef.current,
            performance.now()
          );

          if (result.landmarks && result.landmarks.length > 0) {
            const landmarks = result.landmarks[0];
            const indexFinger = landmarks[8]; // 人差し指
            const thumb = landmarks[4]; // 親指

            setIsTracking(true);

            // 距離の計算
            const currentDistance = Math.sqrt(
              Math.pow(indexFinger.x - thumb.x, 2) +
                Math.pow(indexFinger.y - thumb.y, 2)
            );

            // 指がくっついているかの状態を判定
            const touching = currentDistance < 0.1; // 0.1未満なら「くっついた」と判定
            setIsFingersTouching(touching);

            // 離れた瞬間に結果を送信
            if (prevDistanceRef.current !== null && prevDistanceRef.current < 0.1 && currentDistance >= 0.1) {
              const result = getDartResult(indexFinger.x, indexFinger.y); // 指が離れた瞬間にダーツの結果を取得
              onRelease(result);
            }

            prevDistanceRef.current = currentDistance;

            drawHandSkeleton(landmarks, touching);
          } else {
            setIsTracking(false);
            setIsFingersTouching(false);
          }
        }
        animationFrameId = requestAnimationFrame(processVideo);
      };

      processVideo();
    };

    const drawHandSkeleton = (landmarks: any[], touching: boolean) => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const canvasCtx = canvas.getContext("2d");
      if (!canvasCtx) return;

      canvasCtx.clearRect(0, 0, canvas.width, canvas.height);
      canvasCtx.drawImage(videoRef.current!, 0, 0, canvas.width, canvas.height);

      const connections = [
        [0, 1], [1, 2], [2, 3], [3, 4], // 親指
        [0, 5], [5, 6], [6, 7], [7, 8], // 人差し指
        [0, 9], [9, 10], [10, 11], [11, 12], // 中指
        [0, 13], [13, 14], [14, 15], [15, 16], // 薬指
        [0, 17], [17, 18], [18, 19], [19, 20], // 小指
      ];

      // 線を描画
      canvasCtx.strokeStyle = touching ? "blue" : "red"; // 指がくっついている場合は青、それ以外は赤
      canvasCtx.lineWidth = 2;

      connections.forEach(([start, end]) => {
        const startPoint = landmarks[start];
        const endPoint = landmarks[end];

        canvasCtx.beginPath();
        canvasCtx.moveTo(startPoint.x * canvas.width, startPoint.y * canvas.height);
        canvasCtx.lineTo(endPoint.x * canvas.width, endPoint.y * canvas.height);
        canvasCtx.stroke();
      });
    };

    const getDartResult = (x: number, y: number) => {
      // x軸とy軸を反転
      const flippedY = 1 - y;

      // 中心座標を (0.5, 0.5) とし、距離と角度で判定
      const centerX = 0.5;
      const centerY = 0.5;
      const dx = x - centerX;
      const dy = flippedY - centerY;

      const distance = Math.sqrt(dx * dx + dy * dy); // 中心からの距離
      const angle = Math.atan2(dy, dx) * (180 / Math.PI) + 180; // 角度 (0~360)

      // 範囲ごとに判定
      if (distance < 0.05) return { num: 25, mul: 2 }; // BULL
      if (distance < 0.1) return { num: 25, mul: 1 }; // Outer BULL
      if (distance > 0.5) return { num: 0, mul: 0 }; // 枠外

      // 角度に基づいて1~20のエリアを判定
      const segments = [6, 13, 10, 15, 2, 17, 3, 19, 7, 16, 8, 11, 14, 9, 12, 5, 20, 1, 18, 4];
      const index = Math.floor(((angle + 9) % 360) / 18); // 18度ごとに分割

      const num = segments[index];

      // 距離でシングル、ダブル、トリプル判定
      if (distance < 0.2) return { num, mul: 1 }; // シングル
      if (distance < 0.3) return { num, mul: 3 }; // トリプル
      if (distance < 0.4) return { num, mul: 1 }; // シングル
      if (distance < 0.5) return { num, mul: 2 }; // ダブル

      return { num: 0, mul: 0 }; // 枠外
    };

    initializeHandLandmarker();

    return () => {
      if (handLandmarker) handLandmarker.close();
      if (videoRef.current && videoRef.current.srcObject) {
        const tracks = (videoRef.current.srcObject as MediaStream).getTracks();
        tracks.forEach((track) => track.stop());
      }
      cancelAnimationFrame(animationFrameId);
    };
  }, [onRelease]);

  return (
    <div style={{ position: "relative", width: "640px", height: "480px" }} className="m-auto">
      <video
        ref={videoRef}
        style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
        autoPlay
        playsInline
      />
      {isTracking && (
        <canvas
          ref={canvasRef}
          width={640}
          height={480}
          style={{ position: "absolute", top: 0, left: 0, pointerEvents: "none" }}
        />
      )}
    </div>
  );
};

export default Draw;
