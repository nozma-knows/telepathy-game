import React from "react";
import { Sprite } from "@inlet/react-pixi";
import { DisplayObject } from "pixi.js";
import { InteractionEvent } from "@pixi/interaction";
import { Viewport as PixiViewport } from "pixi-viewport";

interface PixiDraggable extends DisplayObject {
  data: InteractionEvent | null;
  dragging: boolean;
}

interface Props {
  image: string;
  x: number;
  y: number;
}

const Draggable = ({ image, x, y }: Props) => {
  const onDragStart = (event: InteractionEvent) => {
    console.log("EVENT: ", event);
    console.log("EVENT.DATA: ", event.data);

    // const onDragStart = (event: any) => {
    const sprite = event.currentTarget as PixiDraggable;
    const viewport = sprite.parent as PixiViewport;

    sprite.alpha = 0.5;
    sprite.data = event.data;
    sprite.dragging = true;
    viewport.drag({ pressDrag: false });
  };

  const onDragEnd = (event: InteractionEvent) => {
    // const onDragEnd = (event: any) => {
    const sprite = event.currentTarget as PixiDraggable;
    const viewport = sprite.parent as PixiViewport;

    sprite.alpha = 1;
    sprite.dragging = false;
    sprite.data = null;
    viewport.drag();
  };

  const onDragMove = (event: InteractionEvent) => {
    // const onDragMove = (event: any) => {
    const sprite = event.currentTarget as PixiDraggable;
    console.log("sprite: ", sprite);
    if (sprite.dragging) {
      const newPosition = sprite.data!.getLocalPosition(sprite.parent);
      sprite.x = newPosition.x;
      sprite.y = newPosition.y;
    }
  };

  return (
    <Sprite
      image={image}
      x={x}
      y={y}
      anchor={0.5}
      interactive
      cursor="pointer"
      buttonMode
      pointerdown={onDragStart}
      pointerup={onDragEnd}
      pointerupoutside={onDragEnd}
      pointermove={onDragMove}
    />
  );
};

export default Draggable;

// import React, { useRef, useState } from "react";
// import * as PIXI from "pixi.js";

// export default function Draggable() {
//   const ref = useRef<any>();

//   const app = new PIXI.Application({ background: "#1099bb" });
//   ref.current.appendChild(app.view);

//   return <div></div>;
// }
