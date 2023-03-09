import React, { useState } from "react";
import { useDrop } from "react-dnd";
import { ItemTypes } from "../ItemTypes";

export default function Bucket() {
  const [hasDropped, setHasDropped] = useState(false);
  const [hasDroppedOnChild, setHasDroppedOnChild] = useState(false);
  const [{ isOver, isOverCurrent }, drop] = useDrop(
    () => ({
      accept: ItemTypes.BALL,
      drop(_item: unknown, monitor) {
        const didDrop = monitor.didDrop();
        if (didDrop) {
          return;
        }
        setHasDropped(true);
        setHasDroppedOnChild(didDrop);
      },
      collect: (monitor) => ({
        isOver: monitor.isOver(),
        isOverCurrent: monitor.isOver({ shallow: true }),
      }),
    }),
    [setHasDropped, setHasDroppedOnChild]
  );

  return (
    <div ref={drop} className="w-80 h-80 rounded-xl bg-blue-300">
      Bucket
      <br />
      {hasDropped && <span>dropped {hasDroppedOnChild && " on child"}</span>}
    </div>
  );
}
