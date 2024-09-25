// import React, { useEffect, useRef, useState } from "react";
// import WaveSurfer from "wavesurfer.js";
// import { Button, Group } from "@mantine/core";
// import { IconX } from "@tabler/icons-react";

// const MusicPlayerWithWaveform = ({ audioUrl, onClose }) => {
//   const waveformRef = useRef(null);
//   const wavesurferRef = useRef(null);
//   const [isPlaying, setIsPlaying] = useState(false);

//   useEffect(() => {
//     if (!waveformRef.current) return;

//     // Initialize WaveSurfer instance
//     wavesurferRef.current = WaveSurfer.create({
//       container: waveformRef.current,
//       waveColor: "#00ff8e",
//       progressColor: "#4CAF50",
//       barWidth: 2,
//       responsive: true,
//       height: 128,
//     });

//     // Load audio file into WaveSurfer
//     wavesurferRef.current.load(audioUrl);

//     // Sync play/pause state
//     const handlePlayPause = () => {
//       setIsPlaying((prev) => !prev);
//     };

//     // Handle play/pause button state change
//     wavesurferRef.current.on("play", handlePlayPause);
//     wavesurferRef.current.on("pause", handlePlayPause);

//     return () => {
//       wavesurferRef.current.destroy();
//     };
//   }, [audioUrl]);

//   const handlePlayPause = () => {
//     if (wavesurferRef.current) {
//       wavesurferRef.current.playPause();
//     }
//   };

//   return (
//     <div style={styles.playerContainer}>
//       {/* Close button */}
//       <div style={styles.closeButtonContainer}>
//         <Button variant="outline" color="red" radius="xl" onClick={onClose}>
//           <IconX />
//         </Button>
//       </div>

//       {/* Waveform container */}
//       <div ref={waveformRef} style={styles.waveform} />

//       {/* Play/Pause button */}
//       <Group position="center" style={{ marginTop: "20px" }}>
//         <Button
//           onClick={handlePlayPause}
//           size="md"
//           radius="xl"
//           style={{
//             backgroundColor: isPlaying ? "#ff4d4d" : "#4CAF50",
//             color: "white",
//           }}
//         >
//           {isPlaying ? "Pause" : "Play"}
//         </Button>
//       </Group>
//     </div>
//   );
// };

// const styles = {
//   playerContainer: {
//     backgroundColor: "#1f1f28",
//     padding: "20px",
//     borderRadius: "10px",
//     position: "relative",
//     Width: "1400px",
//     margin: "0 auto",
//     boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
//   },
//   waveform: {
//     width: "100%",
//     marginBottom: "20px",
//   },
//   closeButtonContainer: {
//     position: "absolute",
//     top: "10px",
//     right: "10px",
//   },
// };

// export default MusicPlayerWithWaveform;
