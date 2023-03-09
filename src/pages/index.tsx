import React, { useState, useEffect } from "react";
import useWindowSize from "@/components/utils/hooks/useWindowSize";
import Game from "@/components/ui/Game";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const title = `Telepathy Game`;

export default function Home() {
  const size = useWindowSize();
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    setWidth(size.width);
    setHeight(size.height);
  }, [size]);

  return (
    <div style={{ width, height }} className="flex flex-col">
      <div className="flex w-full justify-center">
        <div className="text-4xl font-bold">{title}</div>
      </div>
      <DndProvider backend={HTML5Backend}>
        <Game />
      </DndProvider>
    </div>
  );
}
