import React, { useState, useEffect } from "react";
import useWindowSize from "@/components/utils/hooks/useWindowSize";
import Ball from "@/components/ui/draggable-items/Ball";
import Basket from "@/components/ui/droppable-items/Basket";

export default function Home() {
  const size = useWindowSize();
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    setWidth(size.width);
    setHeight(size.height);
  }, [size]);

  const [ballLocation, setBallLocation] = useState({
    x: 0,
    y: 0,
    diameter: 10,
  });
  const [inBasket, setInBasket] = useState(false);

  useEffect(() => {
    console.log("inBasket: ", inBasket);
  }, [inBasket]);

  return (
    <div
      style={{ width, height }}
      className={`flex relative justify-center items-center ${
        inBasket ? "bg-green-400" : "bg-red-400"
      }`}
    >
      <div className="absolute top-0 left-0">
        <Ball diameter={240} setBallLocation={setBallLocation} />
      </div>
      <Basket
        width={400}
        height={400}
        ballLocation={ballLocation}
        setInBasket={setInBasket}
      />
    </div>
  );
}
