import Ball from "./draggable-items/Ball";
import Bucket from "./droppable-items/Bucket";
export default function Board() {
  return (
    <div className="flex w-full h-full p-8">
      <div className="flex justify-between w-full h-full border-4 border-black rounded-xl p-8">
        <Ball />
        <Bucket />
      </div>
    </div>
  );
}
