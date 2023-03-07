import { useState, useMemo, useEffect } from "react";
import { Stage, Container, Graphics } from "@pixi/react";
import useWindowSize from "@/components/utils/hooks/useWindowSize";

let index = 1;

const Item = (props: any) => {
  const [myIndex, setMyIndex] = useState(1);

  const color = useMemo(() => {
    return `0x${Math.floor(
      Math.abs(Math.sin(index++) * 16777215) % 16777215
    ).toString(16)}`;
  }, []);

  return (
    <Graphics
      {...props}
      interactive={true}
      zIndex={myIndex}
      pointerdown={() => setMyIndex(index++)}
      draw={(g) => {
        g.beginFill(+color);
        g.drawRect(0, 0, 100, 100);
        g.endFill();
      }}
    />
  );
};

export default function Home() {
  const size = useWindowSize();
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setHeight(size.height);
    setWidth(size.width);
  }, [size]);
  return (
    <Stage
      width={width}
      height={height}
      options={{ backgroundColor: 0x012b30 }}
    >
      <Container sortableChildren={true}>
        <Item x={100} y={100} />
        <Item x={150} y={150} />
        <Item x={200} y={200} />
        <Item x={250} y={250} />
      </Container>
    </Stage>
  );
}
