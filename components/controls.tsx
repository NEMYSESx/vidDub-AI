import React from "react";

interface ControlsProps {
  isPlaying: boolean;
  onPlay: () => void;
  onPause: () => void;
}

const Controls: React.FC<ControlsProps> = ({ isPlaying, onPlay, onPause }) => {
  return (
    <div>
      {isPlaying ? (
        <button onClick={onPause}>Pause</button>
      ) : (
        <button onClick={onPlay}>Play</button>
      )}
    </div>
  );
};

export default Controls;
