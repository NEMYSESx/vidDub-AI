// import React from "react";
// import ReactPlayer from "react-player";

// interface AudioPlayerProps {
//   url: string;
//   onPlay: () => void;
//   onPause: () => void;
//   onSeek: (time: number) => void;
// }

// const AudioPlayer: React.FC<AudioPlayerProps> = ({
//   url,
//   onPlay,
//   onPause,
//   onSeek,
// }) => {
//   const handlePlay = () => {
//     onPlay();
//   };

//   const handlePause = () => {
//     onPause();
//   };

//   const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const time = parseFloat(e.target.value);
//     onSeek(time);
//   };

//   return (
//     <ReactPlayer
//       url={url}
//       controls
//       onPlay={handlePlay}
//       onPause={handlePause}
//       onProgress={(progress) => {
//         if (progress.playedSeconds !== progress.loadedSeconds) {
//           return;
//         }
//         const currentTime = progress.playedSeconds;
//         onSeek(currentTime);
//       }}
//     />
//   );
// };

// export default AudioPlayer;
