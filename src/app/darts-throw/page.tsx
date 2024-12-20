// //固まるやつ
// "use client";
// import React, { useEffect, useRef } from "react";
// import { FilesetResolver, HandLandmarker } from "@mediapipe/tasks-vision";
// import { drawConnectors, drawLandmarks } from "@mediapipe/drawing_utils";

// const WebcamHandTracking: React.FC = () => {
//   const videoRef = useRef<HTMLVideoElement>(null);
//   const canvasRef = useRef<HTMLCanvasElement>(null);

//   useEffect(() => {
//     const initHandTracking = async () => {
//       // FilesetResolverを使ってWasmファイルの場所を指定
//       const vision = await FilesetResolver.forVisionTasks(
//         "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest/wasm"
//       );

//       // HandLandmarkerの初期化
//       const handLandmarker = await HandLandmarker.createFromOptions(vision, {
//         baseOptions: {
//           modelAssetPath: "https://storage.googleapis.com/mediapipe-models/hand_landmarker/hand_landmarker/float16/latest/hand_landmarker.task",
//           delegate: "GPU",
//         },
//         runningMode: "video",
//         numHands: 1,
//       });

//       const video = videoRef.current;
//       const canvas = canvasRef.current;
//       const canvasCtx = canvas?.getContext("2d");

//       if (video && canvas && canvasCtx) {
//         // カメラを起動
//         if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
//           navigator.mediaDevices
//             .getUserMedia({ video: true })
//             .then((stream) => {
//               video.srcObject = stream;
//               video.play();
//             })
//             .catch((error) => console.error("Error accessing the camera:", error));
//         } else {
//           alert("Sorry, your browser does not support the camera API.");
//         }

//         // 手のランドマークを描画する関数
//         const renderLoop = async () => {
//           canvas.width = video.videoWidth;
//           canvas.height = video.videoHeight;
//           const startTimeMs = performance.now();

//           if (video.currentTime > 0) {
//             const results = await handLandmarker.detectForVideo(video, startTimeMs);

//             // Canvasをクリアしてビデオフレームを描画
//             canvasCtx.clearRect(0, 0, canvas.width, canvas.height);
//             canvasCtx.drawImage(video, 0, 0, canvas.width, canvas.height);

//             // 手のランドマークを描画
//             if (results.landmarks) {
//               for (const landmarks of results.landmarks) {
//                 drawConnectors(canvasCtx, landmarks, HandLandmarker.HAND_CONNECTIONS, {
//                   color: "#00FF00",
//                   lineWidth: 5,
//                 });
//                 drawLandmarks(canvasCtx, landmarks, { color: "#FF0000", lineWidth: 2 });
//               }
//             }
//           }
//           requestAnimationFrame(renderLoop);
//         };
//         renderLoop();
//       }
//     };

//     initHandTracking();

//     return () => {
//       videoRef.current?.pause();
//     };
//   }, []);

//   return (
//     <div className="flex justify-center items-center h-screen">
//       <video ref={videoRef} style={{ display: "none" }} autoPlay muted></video>
//       <canvas ref={canvasRef} width={640} height={480} className="border border-gray-500 rounded-md shadow-lg" />
//     </div>
//   );
// };

// export default WebcamHandTracking;











// //何も起こらんやつ
// "use client";
// import React, { useEffect, useRef } from "react";
// import { FilesetResolver, HandLandmarker } from "@mediapipe/tasks-vision";
// import Head from "next/head";

// const WebcamHandTracking: React.FC = () => {
//   const videoRef = useRef<HTMLVideoElement>(null);
//   const canvasRef = useRef<HTMLCanvasElement>(null);

//   useEffect(() => {
//     const initHandTracking = async () => {
//       // FilesetResolverを使ってWasmファイルの場所を指定
//       const vision = await FilesetResolver.forVisionTasks(
//         "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest/wasm"
//       );

//       // HandLandmarkerの初期化
//       const handLandmarker = await HandLandmarker.createFromOptions(vision, {
//         baseOptions: {
//           modelAssetPath: "https://storage.googleapis.com/mediapipe-models/hand_landmarker/hand_landmarker/float16/latest/hand_landmarker.task",
//           delegate: "GPU",
//         },
//         runningMode: "video",
//         numHands: 1,
//       });

//       const video = videoRef.current;
//       const canvas = canvasRef.current;
//       const canvasCtx = canvas?.getContext("2d");

//       if (video && canvas && canvasCtx) {
//         // カメラを起動
//         if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
//           navigator.mediaDevices
//             .getUserMedia({ video: true })
//             .then((stream) => {
//               video.srcObject = stream;
//               video.play();
//             })
//             .catch((error) => console.error("Error accessing the camera:", error));
//         } else {
//           alert("Sorry, your browser does not support the camera API.");
//         }

//         // 手のランドマークを描画する関数
//         const renderLoop = async () => {
//           canvas.width = video.videoWidth;
//           canvas.height = video.videoHeight;
//           const startTimeMs = performance.now();

//           if (video.currentTime > 0) {
//             const results = await handLandmarker.detectForVideo(video, startTimeMs);

//             // Canvasをクリアしてビデオフレームを描画
//             canvasCtx.clearRect(0, 0, canvas.width, canvas.height);
//             canvasCtx.drawImage(video, 0, 0, canvas.width, canvas.height);

//             // 手のランドマークを描画
//             if (results.landmarks && typeof window.drawConnectors === "function") {
//               for (const landmarks of results.landmarks) {
//                 window.drawConnectors(canvasCtx, landmarks, HandLandmarker.HAND_CONNECTIONS, {
//                   color: "#00FF00",
//                   lineWidth: 5,
//                 });
//                 window.drawLandmarks(canvasCtx, landmarks, { color: "#FF0000", lineWidth: 2 });
//               }
//             }
//           }
//           requestAnimationFrame(renderLoop);
//         };
//         renderLoop();
//       }
//     };

//     initHandTracking();

//     return () => {
//       videoRef.current?.pause();
//     };
//   }, []);

//   return (
//     <>
//       <Head>
//         <script
//           src="https://cdn.jsdelivr.net/npm/@mediapipe/drawing_utils/drawing_utils.js"
//           async
//         ></script>
//       </Head>
//       <div className="flex justify-center items-center h-screen">
//         <video ref={videoRef} style={{ display: "none" }} autoPlay muted></video>
//         <canvas ref={canvasRef} width={640} height={480} className="border border-gray-500 rounded-md shadow-lg" />
//       </div>
//     </>
//   );
// };

// export default WebcamHandTracking;









// //動かんけどエラーは出ない
// "use client";
// import React, { useEffect, useRef, useState } from "react";
// import { FilesetResolver, HandLandmarker } from "@mediapipe/tasks-vision";
// import Head from "next/head";

// declare global {
//   interface Window {
//     drawingUtils: {
//       drawConnectors: Function;
//       drawLandmarks: Function;
//     };
//   }
// }

// const WebcamHandTracking: React.FC = () => {
//   const videoRef = useRef<HTMLVideoElement>(null);
//   const canvasRef = useRef<HTMLCanvasElement>(null);
//   const [drawingUtilsLoaded, setDrawingUtilsLoaded] = useState(false); // 状態でロードされたかどうかを管理

//   useEffect(() => {
//     // drawing_utils.jsがロードされた後に実行
//     const loadDrawingUtils = () => {
//       if (window.drawingUtils) {
//         console.log("drawingUtils loaded successfully");
//       } else {
// 				console.log("drawingUtils not loaded yet");
//         setDrawingUtilsLoaded(true);
//         // setTimeout(loadDrawingUtils, 100); // 再確認
//       }
//     };

//     // drawing_utils.jsをheadに追加
//     const script = document.createElement("script");
//     script.src =
//       "https://cdn.jsdelivr.net/npm/@mediapipe/drawing_utils/drawing_utils.js";
//     script.onload = loadDrawingUtils; // 読み込み後に状態を変更
//     document.head.appendChild(script);

//     return () => {
//       document.head.removeChild(script); // クリーンアップ
//     };
//   }, []);

//   useEffect(() => {
//     const initHandTracking = async () => {
//       const vision = await FilesetResolver.forVisionTasks(
//         "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest/wasm"
//       );

//       const handLandmarker = await HandLandmarker.createFromOptions(vision, {
//         baseOptions: {
//           modelAssetPath:
//             "https://storage.googleapis.com/mediapipe-models/hand_landmarker/hand_landmarker/float16/latest/hand_landmarker.task",
//           delegate: "GPU",
//         },
//         runningMode: "VIDEO",
//         numHands: 1,
//       });

//       const video = videoRef.current;
//       const canvas = canvasRef.current;
//       const canvasCtx = canvas?.getContext("2d");

//       if (video && canvas && canvasCtx) {
//         if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
//           navigator.mediaDevices
//             .getUserMedia({ video: true })
//             .then((stream) => {
//               video.srcObject = stream;
//               video.play();
//             })
//             .catch((error) =>
//               console.error("Error accessing the camera:", error)
//             );
//         } else {
//           alert("Sorry, your browser does not support the camera API.");
//         }

//         const renderLoop = async () => {
//           canvas.width = video.videoWidth;
//           canvas.height = video.videoHeight;
//           const startTimeMs = performance.now();

//           if (video.currentTime > 0) {
//             const results = await handLandmarker.detectForVideo(
//               video,
//               startTimeMs
//             );

//             canvasCtx.clearRect(0, 0, canvas.width, canvas.height);
//             canvasCtx.drawImage(video, 0, 0, canvas.width, canvas.height);

//             // console.log(results); // resultsが正しく返されているか確認
//             // if (results.landmarks) {
//             //   console.log("Landmarks detected:", results.landmarks);
//             // } else {
//             //   console.log("No landmarks detected");
//             // }

// 						console.log(results.landmarks)

//             if (results.landmarks && drawingUtilsLoaded) {
//               // drawingUtilsが読み込まれた後に描画
//               for (const landmarks of results.landmarks) {
//                 window.drawingUtils.drawConnectors(
//                   canvasCtx,
//                   landmarks,
//                   HandLandmarker.HAND_CONNECTIONS,
//                   {
//                     color: "#00FF00",
//                     lineWidth: 5,
//                   }
//                 );
//                 window.drawingUtils.drawLandmarks(canvasCtx, landmarks, {
//                   color: "#FF0000",
//                   lineWidth: 2,
//                 });
//               }
//             }
//           }
//           requestAnimationFrame(renderLoop);
//         };
//         renderLoop();
//       }
//     };

//     initHandTracking();

//     return () => {
//       videoRef.current?.pause();
//     };
//   }, [drawingUtilsLoaded]); // drawingUtilsLoadedが変わった時に再実行

//   return (
//     <div className="flex justify-center items-center h-screen">
//       <video ref={videoRef} style={{ display: "none" }} autoPlay muted></video>
//       <canvas
//         ref={canvasRef}
//         width={640}
//         height={480}
//         className="border border-gray-500 rounded-md shadow-lg"
//       />

//     </div>
//   );
// };

// export default WebcamHandTracking;




// "use client";
// import React, { useEffect, useRef, useState } from "react";
// import { FilesetResolver, HandLandmarker } from "@mediapipe/tasks-vision";

// declare global {
//   interface Window {
//     drawingUtils: {
//       drawConnectors: Function;
//       drawLandmarks: Function;
//     };
//   }
// }

// const WebcamHandTracking: React.FC = () => {
//   const videoRef = useRef<HTMLVideoElement>(null);
//   const canvasRef = useRef<HTMLCanvasElement>(null);
//   const [drawingUtilsLoaded, setDrawingUtilsLoaded] = useState(false);
//   const [landmarks, setLandmarks] = useState<number[][] | null>(null);

//   useEffect(() => {
//     const loadDrawingUtils = () => {
//       if (window.drawingUtils) {
//         console.log("drawingUtils loaded successfully");
//         setDrawingUtilsLoaded(true);
//       } else {
//         console.log("drawingUtils not loaded yet");
//       }
//     };

//     const script = document.createElement("script");
//     script.src =
//       "https://cdn.jsdelivr.net/npm/@mediapipe/drawing_utils/drawing_utils.js";
//     script.onload = loadDrawingUtils;
//     document.head.appendChild(script);

//     return () => {
//       document.head.removeChild(script);
//     };
//   }, []);

//   useEffect(() => {
//     const initHandTracking = async () => {
//       const vision = await FilesetResolver.forVisionTasks(
//         "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest/wasm"
//       );

//       const handLandmarker = await HandLandmarker.createFromOptions(vision, {
//         baseOptions: {
//           modelAssetPath:
//             "https://storage.googleapis.com/mediapipe-models/hand_landmarker/hand_landmarker/float16/latest/hand_landmarker.task",
//           delegate: "GPU",
//         },
//         runningMode: "VIDEO",
//         numHands: 1,
//       });

//       const video = videoRef.current;
//       const canvas = canvasRef.current;
//       const canvasCtx = canvas?.getContext("2d");

//       if (video && canvas && canvasCtx) {
//         if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
//           navigator.mediaDevices
//             .getUserMedia({ video: true })
//             .then((stream) => {
//               video.srcObject = stream;
//               video.play();
//             })
//             .catch((error) =>
//               console.error("Error accessing the camera:", error)
//             );
//         } else {
//           alert("Sorry, your browser does not support the camera API.");
//         }

//         const renderLoop = async () => {
//           canvas.width = video.videoWidth;
//           canvas.height = video.videoHeight;
//           const startTimeMs = performance.now();

//           if (video.currentTime > 0) {
//             const results = await handLandmarker.detectForVideo(
//               video,
//               startTimeMs
//             );

//             canvasCtx.clearRect(0, 0, canvas.width, canvas.height);
//             canvasCtx.drawImage(video, 0, 0, canvas.width, canvas.height);

//             if (results.landmarks && drawingUtilsLoaded) {
//               setLandmarks(
//                 results.landmarks.map((point) => [point.x, point.y, point.z])
//               );

//               for (const landmarks of results.landmarks) {
//                 window.drawingUtils.drawConnectors(
//                   canvasCtx,
//                   landmarks,
//                   HandLandmarker.HAND_CONNECTIONS,
//                   {
//                     color: "#00FF00",
//                     lineWidth: 5,
//                   }
//                 );
//                 window.drawingUtils.drawLandmarks(canvasCtx, landmarks, {
//                   color: "#FF0000",
//                   lineWidth: 2,
//                 });
//               }
//             }
//           }
//           requestAnimationFrame(renderLoop);
//         };
//         renderLoop();
//       }
//     };

//     if (drawingUtilsLoaded) initHandTracking();

//     return () => {
//       videoRef.current?.pause();
//     };
//   }, [drawingUtilsLoaded]);

//   return (
//     <div className="flex justify-center items-center h-screen">
//       <video ref={videoRef} style={{ display: "none" }} autoPlay muted></video>
//       <canvas
//         ref={canvasRef}
//         width={640}
//         height={480}
//         className="border border-gray-500 rounded-md shadow-lg"
//       />
//       <div className="mt-4">
//         {landmarks ? (
//           <div>
//             <h2 className="text-lg font-semibold">Hand Landmark Coordinates</h2>
//             <ul>
//               {landmarks.map((point, index) => (
//                 <li key={index}>
//                   Point {index + 1}: x = {point[0].toFixed(3)}, y ={" "}
//                   {point[1].toFixed(3)}, z = {point[2].toFixed(3)}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         ) : (
//           <p>No landmarks detected.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default WebcamHandTracking;

import React from 'react'
import Draw from '../components/Draw'

const DartsThrow = () => {
	return (
		<div>
			<Draw/>
		</div>
	)
}

export default DartsThrow