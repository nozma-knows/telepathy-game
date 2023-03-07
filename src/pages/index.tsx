import React, { useState, useEffect } from "react";
// import { Stage } from "@inlet/react-pixi";
import { Stage } from "@pixi/react";
import Draggable from "@/components/ui/Draggable";
import useWindowSize from "@/components/utils/hooks/useWindowSize";

export default function Home() {
  const size = useWindowSize();
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    setWidth(size.width);
    setHeight(size.height);
  }, [size]);

  return (
    <div>
      <Stage
        width={width}
        height={height}
        options={{ backgroundColor: 0xf2b310, resolution: 2 }}
      >
        <Draggable
          image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/IaUrttj.png"
          x={(1 * width) / 4}
          y={height / 2}
        />
        <Draggable
          image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/IaUrttj.png"
          x={width / 2}
          y={height / 2}
        />
        <Draggable
          image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/IaUrttj.png"
          x={(3 * width) / 4}
          y={height / 2}
        />
        <Draggable
          image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/IaUrttj.png"
          x={width / 2}
          y={(1 * height) / 4}
        />
        <Draggable
          image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/IaUrttj.png"
          x={width / 2}
          y={(3 * height) / 4}
        />
      </Stage>
    </div>
  );
}
