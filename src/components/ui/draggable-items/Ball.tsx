import React from "react";
import { ItemTypes } from "../ItemTypes";
import { useDrag } from "react-dnd";

export default function Ball() {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.BALL,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      className={`flex w-32 h-32 rounded-full bg-red-400 ${
        isDragging && "opacity-50"
      } cursor-move`}
    />
  );
}
