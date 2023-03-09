import React, { useState } from "react";
import Draggable from "react-draggable";

interface BallProps {
  diameter: number;
  setBallLocation(ballLocation: {
    x: number;
    y: number;
    diameter: number;
  }): void;
}

export default function Ball({ diameter, setBallLocation }: BallProps) {
  const [dragging, setDragging] = useState(false);

  const handleDrag = (e: any, data: any) => {
    setDragging(true);
    setBallLocation({
      x: data.x,
      y: data.y,
      diameter,
    });
  };

  const handleStop = () => {
    setDragging(false);
  };

  return (
    <Draggable
      onDrag={(e, data) => handleDrag(e, data)}
      onStop={() => handleStop()}
    >
      <div
        style={{
          width: `${diameter}px`,
          height: `${diameter}px`,
        }}
        className={`${
          dragging ? "opacity-50" : ""
        } rounded-full bg-yellow-500 cursor-move`}
      />
    </Draggable>
  );
}
