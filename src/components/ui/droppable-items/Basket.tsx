interface BasketProps {
  width: number;
  height: number;
  ballLocation: { x: number; y: number; diameter: number };
  setInBasket: (inBasket: boolean) => void;
}

export default function Basket({
  width,
  height,
  ballLocation,
  setInBasket,
}: BasketProps) {
  return (
    <div
      ref={(el) => {
        if (!el) return;
        const { width, height, left, bottom } = el.getBoundingClientRect();
        const { x, y, diameter } = ballLocation;
        if (
          x >= left &&
          x <= left + width &&
          x + diameter >= left &&
          x + diameter <= left + width &&
          y <= bottom &&
          y >= bottom - height &&
          y + diameter <= bottom &&
          y + diameter >= bottom - height
        ) {
          setInBasket(true);
        } else {
          setInBasket(false);
        }
      }}
      style={{
        width: `${width}px`,
        height: `${height}px`,
      }}
      className="flex justify-center items-center bg-blue-500 rounded-xl"
    >
      <div className="text-2xl md:text-4xl font-bold">Basket</div>
    </div>
  );
}
